import * as React from 'react'
import { cn } from '../utils/cn'
import { ButtonCore, type ButtonCoreOptions } from '../core/ButtonCore'
import { ComponentSize, ComponentVariant, BaseComponentProps } from '../types/common'

export interface ButtonProps extends 
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
  BaseComponentProps,
  ButtonCoreOptions {
  /**
   * Button variant style
   */
  variant?: ComponentVariant
  /**
   * Button size
   */
  size?: ComponentSize
  /**
   * Show loading spinner and disable interaction
   */
  loading?: boolean
  /**
   * Button type for form submission
   */
  type?: 'button' | 'submit' | 'reset'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled = false,
      type = 'button',
      children,
      ...rest
    } = props

    // Auto-detect icon-only buttons
    const hasText = React.Children.toArray(children).some(
      (child) => typeof child === 'string' || typeof child === 'number'
    )
    const iconOnly = !hasText

    // Generate classes using optimized core
    const coreOptions: ButtonCoreOptions = {
      variant,
      size,
      disabled: disabled || loading,
      loading,
      iconOnly,
      fullWidth: className?.includes('w-full')
    }

    const buttonClasses = ButtonCore.getClasses(coreOptions)
    const accessibilityProps = ButtonCore.getAccessibilityProps(coreOptions)

    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonClasses, className)}
        {...accessibilityProps}
        {...rest}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'


