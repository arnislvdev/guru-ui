import * as React from 'react'
import { cn } from '../utils/cn'
import { ToggleCore, type ToggleCoreOptions } from '../core/ToggleCore'

export type ToggleProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'role' | 'aria-pressed'> & ToggleCoreOptions & {
  pressed?: boolean
  onPressedChange?: (pressed: boolean) => void
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ 
    className = '', 
    pressed: pressedProp, 
    onPressedChange, 
    disabled, 
    size = 'md',
    variant = 'default',
    required = false,
    label,
    description,
    loading = false,
    ...props 
  }, ref) => {
    const [internal, setInternal] = React.useState(false)
    const pressed = pressedProp ?? internal

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) return
      const next = !pressed
      setInternal(next)
      onPressedChange?.(next)
      props.onClick?.(e)
    }

    const toggleOptions = { size, variant, disabled: disabled || false, required, label: label || '', description: description || '', loading }
    const accessibilityProps = ToggleCore.getAccessibilityProps(toggleOptions)

    return (
      <div className={ToggleCore.getContainerClasses()}>
        <button
          ref={ref}
          type="button"
          disabled={disabled || loading}
          onClick={handleClick}
          className={cn(
            ToggleCore.getToggleClasses(toggleOptions),
            pressed && ToggleCore.getToggleActiveClasses(toggleOptions),
            className
          )}
          {...(accessibilityProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
          {...props}
        >
          <span
            className={cn(
              ToggleCore.getThumbClasses(toggleOptions),
              'absolute left-0.5 top-1/2 -translate-y-1/2 transform',
              pressed && ToggleCore.getThumbActiveClasses(toggleOptions)
            )}
          />
          {loading && (
            <span className={cn('absolute inset-0 flex items-center justify-center', ToggleCore.getLoadingClasses())}>
              ⏳
            </span>
          )}
        </button>
        {(label || description) && (
          <div className="ml-3">
            {label && (
              <div className={ToggleCore.getLabelClasses(toggleOptions)}>{label}</div>
            )}
            {description && (
              <div className={ToggleCore.getDescriptionClasses(toggleOptions)}>{description}</div>
            )}
          </div>
        )}
      </div>
    )
  }
)

Toggle.displayName = 'Toggle'


