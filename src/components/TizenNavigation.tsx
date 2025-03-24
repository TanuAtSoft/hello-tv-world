
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  children: React.ReactNode;
  className?: string;
}

export const TizenNavigation: React.FC<NavigationProps> = ({ children, className }) => {
  return (
    <div className={cn("flex flex-row h-full w-full", className)}>
      {children}
    </div>
  );
};

interface NavigableItemProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: () => void;
  id: string;
}

export const NavigableItem: React.FC<NavigableItemProps> = ({ 
  children, 
  className, 
  onSelect,
  id
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSelect?.();
    }
  };

  return (
    <div 
      ref={itemRef}
      className={cn("tv-focusable", className)} 
      tabIndex={0}
      data-nav-id={id}
      onKeyDown={handleKeyDown}
      onClick={onSelect}
    >
      {children}
    </div>
  );
};

interface NavGroupProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'horizontal' | 'vertical';
  id: string;
}

export const NavGroup: React.FC<NavGroupProps> = ({ 
  children, 
  className, 
  direction = 'horizontal',
  id
}) => {
  return (
    <div 
      className={cn(
        "flex", 
        direction === 'horizontal' ? 'flex-row' : 'flex-col',
        className
      )}
      data-nav-group-id={id}
    >
      {children}
    </div>
  );
};

export function useTizenNavigation() {
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!currentFocus) {
      const firstFocusable = document.querySelector('[tabindex="0"]') as HTMLElement;
      if (firstFocusable) {
        firstFocusable.focus();
        setCurrentFocus(firstFocusable);
        return;
      }
    }

    if (!currentFocus) return;

    const group = currentFocus.closest('[data-nav-group-id]');
    if (!group) return;
    
    const isHorizontal = group.classList.contains('flex-row');
    const items = Array.from(group.querySelectorAll('[tabindex="0"]')) as HTMLElement[];
    const currentIndex = items.indexOf(currentFocus);
    
    let nextElement: HTMLElement | null = null;
    
    switch (e.key) {
      case 'ArrowRight':
        if (isHorizontal && currentIndex < items.length - 1) {
          nextElement = items[currentIndex + 1];
        }
        break;
      case 'ArrowLeft':
        if (isHorizontal && currentIndex > 0) {
          nextElement = items[currentIndex - 1];
        }
        break;
      case 'ArrowDown':
        if (!isHorizontal && currentIndex < items.length - 1) {
          nextElement = items[currentIndex + 1];
        } else {
          // Try to find the next group below
          const nextGroup = findNextVerticalGroup(group as HTMLElement, 'down');
          if (nextGroup) {
            const nextGroupItems = Array.from(nextGroup.querySelectorAll('[tabindex="0"]')) as HTMLElement[];
            if (nextGroupItems.length > 0) {
              nextElement = nextGroupItems[0];
            }
          }
        }
        break;
      case 'ArrowUp':
        if (!isHorizontal && currentIndex > 0) {
          nextElement = items[currentIndex - 1];
        } else {
          // Try to find the next group above
          const nextGroup = findNextVerticalGroup(group as HTMLElement, 'up');
          if (nextGroup) {
            const nextGroupItems = Array.from(nextGroup.querySelectorAll('[tabindex="0"]')) as HTMLElement[];
            if (nextGroupItems.length > 0) {
              nextElement = nextGroupItems[0];
            }
          }
        }
        break;
    }
    
    if (nextElement) {
      nextElement.focus();
      setCurrentFocus(nextElement);
      e.preventDefault();
    }
  };

  const findNextVerticalGroup = (
    currentGroup: HTMLElement, 
    direction: 'up' | 'down'
  ): HTMLElement | null => {
    const allGroups = Array.from(document.querySelectorAll('[data-nav-group-id]')) as HTMLElement[];
    const currentRect = currentGroup.getBoundingClientRect();
    
    // Filter groups that are above/below the current one
    const eligibleGroups = allGroups.filter(group => {
      const rect = group.getBoundingClientRect();
      if (direction === 'down') {
        return rect.top > currentRect.bottom;
      } else {
        return rect.bottom < currentRect.top;
      }
    });
    
    if (eligibleGroups.length === 0) return null;
    
    // Find the closest group
    return eligibleGroups.reduce((closest, group) => {
      const closestRect = closest.getBoundingClientRect();
      const groupRect = group.getBoundingClientRect();
      
      const closestDistance = direction === 'down' 
        ? closestRect.top - currentRect.bottom 
        : currentRect.top - closestRect.bottom;
        
      const groupDistance = direction === 'down' 
        ? groupRect.top - currentRect.bottom 
        : currentRect.top - groupRect.bottom;
      
      return groupDistance < closestDistance ? group : closest;
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    // Initialize focus on first element
    setTimeout(() => {
      const firstFocusable = document.querySelector('[tabindex="0"]') as HTMLElement;
      if (firstFocusable) {
        firstFocusable.focus();
        setCurrentFocus(firstFocusable);
      }
    }, 100);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return { currentFocus };
}
