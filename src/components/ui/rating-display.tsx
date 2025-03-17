import { StarIcon } from 'lucide-react';
import React from 'react';

type RatingProps = {
  rating: number;
  max?: number;
};

export const RatingDisplay = ({ rating, max = 5 }: RatingProps) => {
  const roundedValue = Math.floor(rating + 0.5);
  const clampedValue = Math.min(Math.max(0, roundedValue), max);

  return (
    <div className="inline-flex items-center space-x-1">
      {Array.from({ length: max }, (_, i) => {
        const filled = i < clampedValue;
        return (
          <StarIcon
            key={i}
            fill={filled ? 'currentColor' : 'none'}
            className={filled ? 'text-yellow-500' : 'text-gray-300'}
          />
        );
      })}
    </div>
  );
};
