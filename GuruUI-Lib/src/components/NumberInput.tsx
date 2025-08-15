import * as React from 'react'
import { cn } from '../utils/cn'
import { Plus, Minus } from 'lucide-react'

export type NumberInputProps = {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  placeholder?: string
  className?: string
}

export const NumberInput: React.FC<NumberInputProps> = ({ 
  value, 
  onChange, 
  min = -Infinity, 
  max = Infinity, 
  step = 1,
  size = 'md',
  disabled = false,
  placeholder,
  className = '' 
}) => {
  const sizes = {
    sm: 'h-8 px-2 text-sm',
    md: 'h-10 px-3 text-base',
    lg: 'h-12 px-4 text-lg'
  }

  const buttonSizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  }

  const handleIncrement = () => {
    const newValue = Math.min(value + step, max)
    if (newValue !== value) {
      onChange(newValue)
    }
  }

  const handleDecrement = () => {
    const newValue = Math.max(value - step, min)
    if (newValue !== value) {
      onChange(newValue)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    if (inputValue === '') {
      onChange(0)
      return
    }
    
    const numValue = parseFloat(inputValue)
    if (!isNaN(numValue)) {
      const clampedValue = Math.max(min, Math.min(numValue, max))
      onChange(clampedValue)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      handleIncrement()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      handleDecrement()
    }
  }

  return (
    <div className={cn('flex items-center', className)}>
      <button
        type="button"
        onClick={handleDecrement}
        disabled={disabled || value <= min}
        className={cn(
          'flex items-center justify-center border border-r-0 border-white/10 bg-white/5 text-[color:var(--arnis-body,#b3b3b3)] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--arnis-accent,#ffffff)]/60 rounded-l-md',
          buttonSizes[size],
          (disabled || value <= min) && 'opacity-50 cursor-not-allowed'
        )}
        aria-label="Decrease value"
      >
        <Minus className="h-4 w-4" />
      </button>
      
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        placeholder={placeholder}
        className={cn(
          'border border-white/10 bg-white/5 text-[color:var(--arnis-heading,#ffffff)] placeholder-[color:var(--arnis-body,#b3b3b3)] focus:outline-none focus:ring-2 focus:ring-[color:var(--arnis-accent,#ffffff)]/60 transition-shadow',
          sizes[size],
          'text-center'
        )}
      />
      
      <button
        type="button"
        onClick={handleIncrement}
        disabled={disabled || value >= max}
        className={cn(
          'flex items-center justify-center border border-l-0 border-white/10 bg-white/5 text-[color:var(--arnis-body,#b3b3b3)] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--arnis-accent,#ffffff)]/60 rounded-r-md',
          buttonSizes[size],
          (disabled || value >= max) && 'opacity-50 cursor-not-allowed'
        )}
        aria-label="Increase value"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}

NumberInput.displayName = 'NumberInput'
