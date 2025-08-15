import * as React from 'react'
import { cn } from '../utils/cn'

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  rounded?: boolean
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', rounded = true, ...props }) => {
  return (
    <div
      className={cn(
        'animate-pulse bg-white/10',
        rounded ? 'rounded-[var(--guru-radius,0.5rem)]' : '',
        className
      )}
      {...props}
    />
  )
}


