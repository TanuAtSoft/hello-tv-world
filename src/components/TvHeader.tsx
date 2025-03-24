
import { cn } from '@/lib/utils';
import React from 'react';

interface TvHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const TvHeader: React.FC<TvHeaderProps> = ({
  title,
  subtitle,
  className
}) => {
  return (
    <div className={cn("mb-8", className)}>
      {subtitle && (
        <p className="text-sm uppercase tracking-widest font-medium text-muted-foreground mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl font-display font-semibold tracking-tight">{title}</h2>
    </div>
  );
};

export default TvHeader;
