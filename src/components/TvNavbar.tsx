
import { cn } from '@/lib/utils';
import React from 'react';
import { NavGroup, NavigableItem } from './TizenNavigation';

interface TvNavItem {
  id: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

interface TvNavbarProps {
  items: TvNavItem[];
  className?: string;
}

const TvNavbar: React.FC<TvNavbarProps> = ({
  items,
  className
}) => {
  return (
    <nav className={cn("mb-8", className)}>
      <NavGroup 
        id="main-navbar" 
        className="items-center justify-start space-x-2 pb-2"
      >
        {items.map((item) => (
          <NavigableItem
            key={item.id}
            id={`nav-${item.id}`}
            onSelect={item.onClick}
            className={cn(
              "tv-nav-item font-medium text-lg px-6 py-3 rounded-lg",
              item.active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            )}
          >
            {item.label}
          </NavigableItem>
        ))}
      </NavGroup>
    </nav>
  );
};

export default TvNavbar;
