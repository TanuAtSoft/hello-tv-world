
import { cn } from '@/lib/utils';
import React from 'react';

interface TvSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const TvSection: React.FC<TvSectionProps> = ({
  children,
  className,
  delay = 0
}) => {
  return (
    <section 
      className={cn("tv-content-section mb-12", className)}
      style={{ 
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </section>
  );
};

export default TvSection;
