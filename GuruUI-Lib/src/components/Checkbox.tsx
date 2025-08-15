import * as React from 'react'
import { cn } from '../utils/cn'
import { CheckboxCore, type CheckboxCoreOptions } from '../core/CheckboxCore'

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & CheckboxCoreOptions & {
  label?: React.ReactNode
  description?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ 
    className = '', 
    label, 
    description, 
    disabled, 
    size = 'md' as const,
    variant = 'default',
    indeterminate = false,
    required = false,
    ...props 
  }, ref) => {
    const checkboxOptions = { size, variant, disabled: disabled || false, indeterminate, required, label: label || '', description: description || '' }
    const accessibilityProps = CheckboxCore.getAccessibilityProps(checkboxOptions)
    
    return (
      <div className={CheckboxCore.getContainerClasses()}>
        <label className={cn('group inline-flex items-start select-none', className)}>
          <span className={cn('relative inline-flex flex-none', CheckboxCore.getCheckboxClasses(checkboxOptions))}>
            <input
              ref={ref}
              type="checkbox"
              disabled={disabled}
              className={cn('peer absolute inset-0 cursor-pointer appearance-none transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2', CheckboxCore.getCheckboxClasses(checkboxOptions))}
              {...(accessibilityProps as React.InputHTMLAttributes<HTMLInputElement>)}
              {...props}
            />
            <svg
              className={cn('pointer-events-none absolute inset-0 m-auto translate-y-[1px] opacity-0 transition-opacity duration-200 peer-checked:opacity-100', CheckboxCore.getIconClasses(checkboxOptions))}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M5 13l4 4L19 7" className="text-[color:var(--arnis-on-accent,#0b0b0b)]" />
            </svg>
          </span>
          {(label || description) && (
            <span className="leading-snug">
              {label && (
                <span className={CheckboxCore.getLabelClasses(checkboxOptions)}>{label}</span>
              )}
              {description && (
                <span className={CheckboxCore.getDescriptionClasses(checkboxOptions)}>{description}</span>
              )}
            </span>
          )}
        </label>
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'


