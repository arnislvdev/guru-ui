import * as React from 'react'
import { cn } from '../utils/cn'
import { ProgressCore, type ProgressCoreOptions } from '../core/ProgressCore'

export type ProgressProps = React.HTMLAttributes<HTMLDivElement> & ProgressCoreOptions & {
  value?: number // 0-100
  max?: number
  indeterminate?: boolean
}

export const Progress: React.FC<ProgressProps> = ({ 
  value = 0, 
  max = 100,
  indeterminate = false, 
  size = 'md',
  variant = 'default',
  showLabel = true,
  showValue = false,
  animated = false,
  striped = false,
  rounded = true,
  height = 'normal',
  className = '', 
  ...props 
}) => {
  const progressOptions = { size, variant, showLabel, showValue, animated, striped, rounded, height }
  const accessibilityProps = ProgressCore.getAccessibilityProps(progressOptions)
  
  const percentage = ProgressCore.calculatePercentage(value, max)
  ProgressCore.getProgressColor(percentage)
  
  return (
    <div className={cn(ProgressCore.getContainerClasses(progressOptions), className)} {...props}>
      {(showLabel || showValue) && (
        <div className={ProgressCore.getInfoClasses(progressOptions)}>
          {showLabel && <div className={ProgressCore.getLabelClasses(progressOptions)}>Progress</div>}
          {showValue && <div className={ProgressCore.getValueClasses(progressOptions)}>{value}/{max}</div>}
        </div>
      )}
      <div className={ProgressCore.getTrackClasses(progressOptions)}>
        <div
          className={cn(
            ProgressCore.getBarClasses(progressOptions),
            indeterminate && 'w-1/3 animate-[arnis-progress_1.2s_ease_infinite]'
          )}
          style={indeterminate ? undefined : { width: `${percentage}%` }}
          {...(accessibilityProps as React.HTMLAttributes<HTMLDivElement>)}
        />
      </div>
      <style>{`@keyframes arnis-progress { 0%{margin-left:-33%} 50%{margin-left:50%} 100%{margin-left:100%} }`}</style>
    </div>
  )
}


