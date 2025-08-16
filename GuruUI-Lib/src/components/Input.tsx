import * as React from 'react'
import { cn } from '../utils/cn'
import { InputCore, type InputCoreOptions } from '../core/InputCore'
import type { ComponentSize, BaseComponentProps } from '../types/common'

export type InputProps = 
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  BaseComponentProps &
  InputCoreOptions & {
    label?: string
    helperText?: string
    error?: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    size?: ComponentSize
    fullWidth?: boolean
  }

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      size = 'md',
      fullWidth = true,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const inputId = id ?? generatedId
    
    const coreOptions: InputCoreOptions = {
      size: size as 'sm' | 'md' | 'lg',
      variant: error ? 'error' : 'default',
      disabled: props.disabled ?? false,
      fullWidth,
      placeholder: props.placeholder ?? 'Enter text',
      type: props.type as any,
      required: props.required ?? false
    }

    const inputClasses = InputCore.getClasses(coreOptions)
    const accessibilityProps = InputCore.getAccessibilityProps(coreOptions)

    return (
      <div className={cn(fullWidth && 'w-full')}>
        {label && (
          <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-[color:var(--guru-body,#b3b3b3)]">
            {label}
          </label>
        )}
        <div className={cn('relative', fullWidth && 'w-full')}>
          {leftIcon && (
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[color:var(--guru-body,#b3b3b3)]">
              {leftIcon}
            </span>
          )}
          <input
            id={inputId}
            ref={ref}
            className={cn(inputClasses, className)}
            {...accessibilityProps}
            {...props}
          />
          {rightIcon && (
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-[color:var(--guru-body,#b3b3b3)]">
              {rightIcon}
            </span>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="mt-2 text-sm text-[#ef4444]">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-2 text-sm text-[color:var(--guru-body,#b3b3b3)]/70">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'


