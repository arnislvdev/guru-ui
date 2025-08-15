import * as React from 'react'
import { cn } from '../utils/cn'

export type SliderProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> & {
  value?: number
  onValueChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
  showValue?: boolean
  size?: 'sm' | 'md'
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      className = '',
      value,
      onValueChange,
      onChange,
      min = 0,
      max = 100,
      step = 1,
      showValue = false,
      size = 'md',
      disabled,
      ...props
    },
    ref
  ) => {
    const [internal, setInternal] = React.useState<number>(typeof value === 'number' ? value : min)
    const current = typeof value === 'number' ? value : internal

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = Number(e.target.value)
      setInternal(next)
      onValueChange?.(next)
      onChange?.(e)
    }

    const height = size === 'sm' ? 'h-1.5' : 'h-2'

    return (
      <div className={cn('w-full', className)}>
        <input
          ref={ref}
          type="range"
          min={min}
          max={max}
          step={step}
          value={current}
          onChange={handleChange}
          disabled={disabled}
          className={cn(
            'w-full rounded-full focus:outline-none',
            height
          )}
          style={{ accentColor: 'var(--guru-accent, #ffffff)' } as React.CSSProperties}
          {...props}
        />
        {showValue && (
          <div className="mt-2 text-sm text-[color:var(--guru-body,#b3b3b3)]">{current}</div>
        )}
      </div>
    )
  }
)

Slider.displayName = 'Slider'


