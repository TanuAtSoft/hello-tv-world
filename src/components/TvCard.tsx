
import { cn } from '@/lib/utils';
import React from 'react';

interface TvCardProps {
  title: string;
  image?: string;
  description?: string;
  className?: string;
  onClick?: () => void;
}

const TvCard: React.FC<TvCardProps> = ({
  title,
  image,
  description,
  className,
  onClick
}) => {
  return (
    <div 
      className={cn(
        "tv-tile bg-card group relative overflow-hidden rounded-xl w-full aspect-[16/9] shadow-sm",
        className
      )}
      onClick={onClick}
    >
      {image && (
        <div className="absolute inset-0 w-full h-full bg-black">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus:scale-105"
          />
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
        <h3 className={cn(
          "font-display font-semibold tracking-tight transition-colors duration-200",
          image ? "text-white" : "text-foreground",
          "text-2xl mb-2"
        )}>
          {title}
        </h3>
        
        {description && (
          <p className={cn(
            "line-clamp-2 text-base transition-colors duration-200",
            image ? "text-white/80" : "text-muted-foreground"
          )}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default TvCard;
