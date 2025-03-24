
import React from 'react';
import { cn } from '@/lib/utils';

interface TvLayoutProps {
  children: React.ReactNode;
  className?: string;
  withPadding?: boolean;
}

const TvLayout: React.FC<TvLayoutProps> = ({
  children,
  className,
  withPadding = true
}) => {
  return (
    <div className={cn(
      "min-h-screen flex flex-col",
      withPadding && "p-8 md:p-12",
      className
    )}>
      {children}
    </div>
  );
};

export default TvLayout;
