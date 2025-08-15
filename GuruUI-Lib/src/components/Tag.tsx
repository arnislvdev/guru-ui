import * as React from 'react'
import { cn } from '../utils/cn'
import { X } from 'lucide-react'

export type TagProps = {
  children: React.ReactNode
  onRemove?: () => void
  variant?: 'default' | 'outline' | 'subtle'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Tag: React.FC<TagProps> = ({ 
  children, 
  onRemove, 
  variant = 'default', 
  size = 'md',
  className = '' 
}) => {
  const baseClasses = 'inline-flex items-center gap-1.5 rounded-full font-medium transition-colors'
  
  const variants = {
    default: 'bg-[color:var(--arnis-accent,#ffffff)] text-[color:var(--arnis-on-accent,#0b0b0b)]',
    outline: 'border border-[color:var(--arnis-accent,#ffffff)] text-[color:var(--arnis-accent,#ffffff)] hover:bg-[color:var(--arnis-accent,#ffffff)] hover:text-[color:var(--arnis-on-accent,#0b0b0b)]',
    subtle: 'bg-[color:var(--arnis-accent,#ffffff)]/10 text-[color:var(--arnis-accent,#ffffff)]'
  }
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base'
  }

  return (
    <span className={cn(baseClasses, variants[variant], sizes[size], className)}>
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 rounded-full p-0.5 hover:bg-black/10 transition-colors"
          aria-label="Remove tag"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </span>
  )
}

Tag.displayName = 'Tag'
