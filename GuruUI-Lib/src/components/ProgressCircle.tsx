import * as React from 'react'

export type ProgressCircleProps = {
  value?: number // 0-100 for determinate; undefined for indeterminate
  size?: number // px
  strokeWidth?: number
  className?: string
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({ value, size = 44, strokeWidth = 4, className = '' }) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const dash = typeof value === 'number' ? (circumference * (100 - Math.max(0, Math.min(100, value)))) / 100 : circumference * 0.75

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="currentColor"
        strokeOpacity={0.2}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: dash,
          transformOrigin: '50% 50%'
        }}
        className={typeof value === 'number' ? 'text-[color:var(--guru-accent,#ffffff)] transition-[stroke-dashoffset] duration-300' : 'text-[color:var(--guru-accent,#ffffff)] animate-spin'}
      />
    </svg>
  )
}

ProgressCircle.displayName = 'ProgressCircle'


