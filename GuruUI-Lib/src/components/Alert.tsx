import * as React from 'react'
import { AlertCore, type AlertCoreOptions } from '../core/AlertCore'

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & AlertCoreOptions & {
  title?: string
  dismissible?: boolean
  onDismiss?: () => void
}

// Icon components for each variant
const AlertIcons = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  error: '❌'
}

export const Alert: React.FC<AlertProps> = ({ 
  title, 
  variant = 'info', 
  size = 'md',
  dismissible = false,
  icon = true,
  border = false,
  rounded = false,
  onDismiss,
  className = '', 
  children, 
  ...props 
}) => {
  const alertOptions = { variant, size, dismissible, icon, border, rounded }
  const accessibilityProps = AlertCore.getAccessibilityProps(alertOptions)

  return (
    <div 
      className={`${AlertCore.getClasses(alertOptions)} ${className}`.trim()} 
      {...(accessibilityProps as React.HTMLAttributes<HTMLDivElement>)}
      {...props}
    >
      {icon && (
        <span className={AlertCore.getIconClasses(alertOptions)}>
          {AlertIcons[variant]}
        </span>
      )}
      <div className={AlertCore.getContentClasses()}>
        {title && (
          <div className={AlertCore.getTitleClasses()}>{title}</div>
        )}
        <div className={AlertCore.getDescriptionClasses()}>{children}</div>
      </div>
      {dismissible && onDismiss && (
        <button
          className={AlertCore.getDismissButtonClasses(alertOptions)}
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          ✕
        </button>
      )}
    </div>
  )
}
