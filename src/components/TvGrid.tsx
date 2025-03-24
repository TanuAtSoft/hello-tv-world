
import { cn } from '@/lib/utils';
import React from 'react';

interface TvGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: number;
  gap?: number;
}

const TvGrid: React.FC<TvGridProps> = ({
  children,
  className,
  columns = 3,
  gap = 6
}) => {
  return (
    <div 
      className={cn(
        "grid",
        `grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} gap-${gap}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default TvGrid;
