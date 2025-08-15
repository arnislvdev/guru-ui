import * as React from 'react'
import { cn } from '../utils/cn'

export type RangeProps = {
  min: number
  max: number
  value: [number, number]
  onChange: (value: [number, number]) => void
  step?: number
  disabled?: boolean
  showLabels?: boolean
  className?: string
}

export const Range: React.FC<RangeProps> = ({ 
  min, 
  max, 
  value, 
  onChange, 
  step = 1,
  disabled = false,
  showLabels = true,
  className = '' 
}) => {
  const [isDragging, setIsDragging] = React.useState<'min' | 'max' | null>(null)
  const rangeRef = React.useRef<HTMLDivElement>(null)

  const range = max - min
  const minPercent = ((value[0] - min) / range) * 100
  const maxPercent = ((value[1] - min) / range) * 100

  const handleMouseDown = (handle: 'min' | 'max') => {
    if (disabled) return
    setIsDragging(handle)
  }

  const handleMouseMove = React.useCallback((e: MouseEvent) => {
    if (!isDragging || !rangeRef.current) return

    const rect = rangeRef.current.getBoundingClientRect()
    const percent = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100))
    const newValue = Math.round((percent / 100) * range + min)

    if (isDragging === 'min') {
      const newMin = Math.max(min, Math.min(newValue, value[1] - step))
      onChange([newMin, value[1]])
    } else {
      const newMax = Math.min(max, Math.max(newValue, value[0] + step))
      onChange([value[0], newMax])
    }
  }, [isDragging, range, min, max, value, onChange, step])

  const handleMouseUp = React.useCallback(() => {
    setIsDragging(null)
  }, [])

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  const handleKeyDown = (e: React.KeyboardEvent, handle: 'min' | 'max') => {
    if (disabled) return

    let newValue: number
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      newValue = handle === 'min' ? value[0] - step : value[1] - step
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      newValue = handle === 'min' ? value[0] + step : value[1] + step
    } else {
      return
    }

    e.preventDefault()
    
    if (handle === 'min') {
      const newMin = Math.max(min, Math.min(newValue, value[1] - step))
      onChange([newMin, value[1]])
    } else {
      const newMax = Math.min(max, Math.max(newValue, value[0] + step))
      onChange([value[0], newMax])
    }
  }

  return (
    <div className={cn('w-full', className)}>
      {showLabels && (
        <div className="flex justify-between text-sm text-[color:var(--arnis-body,#b3b3b3)] mb-2">
          <span>{value[0]}</span>
          <span>{value[1]}</span>
        </div>
      )}
      
      <div className="relative">
        <div
          ref={rangeRef}
          className={cn(
            'relative h-2 bg-white/10 rounded-full cursor-pointer',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        >
          {/* Track fill */}
          <div
            className="absolute h-full bg-[color:var(--arnis-accent,#ffffff)] rounded-full"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`
            }}
          />
          
          {/* Min handle */}
          <button
            type="button"
            className={cn(
              'absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[color:var(--arnis-accent,#ffffff)] rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--arnis-accent,#ffffff)]/60 transition-transform hover:scale-110',
              disabled && 'cursor-not-allowed'
            )}
            style={{ left: `${minPercent}%`, transform: 'translate(-50%, -50%)' }}
            onMouseDown={() => handleMouseDown('min')}
            onKeyDown={(e) => handleKeyDown(e, 'min')}
            disabled={disabled}
            aria-label="Minimum value"
            tabIndex={disabled ? -1 : 0}
          />
          
          {/* Max handle */}
          <button
            type="button"
            className={cn(
              'absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[color:var(--arnis-accent,#ffffff)] rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--arnis-accent,#ffffff)]/60 transition-transform hover:scale-110',
              disabled && 'cursor-not-allowed'
            )}
            style={{ left: `${maxPercent}%`, transform: 'translate(-50%, -50%)' }}
            onMouseDown={() => handleMouseDown('max')}
            onKeyDown={(e) => handleKeyDown(e, 'max')}
            disabled={disabled}
            aria-label="Maximum value"
            tabIndex={disabled ? -1 : 0}
          />
        </div>
      </div>
    </div>
  )
}

Range.displayName = 'Range'
