import * as React from 'react'
import { cn } from '../utils/cn'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

export type StatsProps = {
  title: string
  value: string | number
  description?: string
  trend?: {
    value: number
    isPositive?: boolean
    period?: string
  }
  icon?: React.ReactNode
  className?: string
}

export const Stats: React.FC<StatsProps> = ({ 
  title, 
  value, 
  description, 
  trend, 
  icon,
  className = '' 
}) => {
  const getTrendIcon = () => {
    if (!trend) return null
    if (trend.value > 0) return <TrendingUp className="h-4 w-4 text-green-500" />
    if (trend.value < 0) return <TrendingDown className="h-4 w-4 text-red-500" />
    return <Minus className="h-4 w-4 text-gray-500" />
  }

  const getTrendColor = () => {
    if (!trend) return ''
    if (trend.value > 0) return 'text-green-500'
    if (trend.value < 0) return 'text-red-500'
    return 'text-gray-500'
  }

  return (
    <div className={cn('rounded-lg border border-white/10 bg-white/5 p-6', className)}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-[color:var(--arnis-body,#b3b3b3)]">{title}</p>
          <p className="mt-2 text-3xl font-bold text-[color:var(--arnis-heading,#ffffff)]">{value}</p>
          {description && (
            <p className="mt-1 text-sm text-[color:var(--arnis-body,#b3b3b3)]">{description}</p>
          )}
          {trend && (
            <div className="mt-2 flex items-center gap-1">
              {getTrendIcon()}
              <span className={cn('text-sm font-medium', getTrendColor())}>
                {trend.value > 0 ? '+' : ''}{trend.value}%
              </span>
              {trend.period && (
                <span className="text-xs text-[color:var(--arnis-body,#b3b3b3)] ml-1">
                  {trend.period}
                </span>
              )}
            </div>
          )}
        </div>
        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[color:var(--arnis-accent,#ffffff)]/10">
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}

Stats.displayName = 'Stats'
