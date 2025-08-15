import * as React from 'react'
import { cn } from '../utils/cn'
import { Star } from 'lucide-react'

export type RatingProps = {
  value: number
  onChange?: (value: number) => void
  max?: number
  size?: 'sm' | 'md' | 'lg'
  readonly?: boolean
  className?: string
}

export const Rating: React.FC<RatingProps> = ({ 
  value, 
  onChange, 
  max = 5, 
  size = 'md',
  readonly = false,
  className = '' 
}) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  }

  const handleClick = (rating: number) => {
    if (!readonly && onChange) {
      onChange(rating)
    }
  }

  const handleMouseEnter = () => {
    if (!readonly) {
      // Could add hover state logic here
    }
  }

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {Array.from({ length: max }, (_, index) => {
        const rating = index + 1
        const isFilled = rating <= value
        const isHalf = value > index && value < rating
        
        return (
          <button
            key={index}
            type="button"
            onClick={() => handleClick(rating)}
            onMouseEnter={() => handleMouseEnter()}
            disabled={readonly}
            className={cn(
              'transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--arnis-accent,#ffffff)]/60 rounded',
              sizes[size],
              isFilled 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-400 hover:text-yellow-300',
              readonly && 'cursor-default'
            )}
            aria-label={`Rate ${rating} out of ${max}`}
          >
            <Star className={cn('w-full h-full', sizes[size])} />
          </button>
        )
      })}
    </div>
  )
}

Rating.displayName = 'Rating'
