import * as React from 'react'
import { cn } from '../utils/cn'
import { Circle } from 'lucide-react'

export type TimelineItem = {
  id: string
  title: string
  description?: string
  date?: string
  icon?: React.ReactNode
  status?: 'default' | 'success' | 'warning' | 'error'
  disabled?: boolean
}

export type TimelineProps = {
  items: TimelineItem[]
  orientation?: 'vertical' | 'horizontal'
  className?: string
}

export const Timeline: React.FC<TimelineProps> = ({ 
  items, 
  orientation = 'vertical',
  className = '' 
}) => {
  const getStatusColor = (status: TimelineItem['status']) => {
    switch (status) {
      case 'success':
        return 'text-green-500 border-green-500'
      case 'warning':
        return 'text-yellow-500 border-yellow-500'
      case 'error':
        return 'text-red-500 border-red-500'
      default:
        return 'text-[color:var(--guru-accent,#ffffff)] border-[color:var(--guru-accent,#ffffff)]'
    }
  }

  if (orientation === 'horizontal') {
    return (
      <div className={cn('w-full', className)}>
        <div className="flex items-center">
          {items.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className="flex flex-col items-center">
                <div className={cn(
                  'flex items-center justify-center w-8 h-8 rounded-full border-2 bg-[#0f0f0f]',
                  getStatusColor(item.status),
                  item.disabled && 'opacity-50'
                )}>
                  {item.icon || <Circle className="h-4 w-4" />}
                </div>
                <div className="mt-2 text-center max-w-24">
                  <p className="text-sm font-medium text-[color:var(--guru-heading,#ffffff)] truncate">
                    {item.title}
                  </p>
                  {item.description && (
                    <p className="text-xs text-[color:var(--guru-body,#b3b3b3)] truncate">
                      {item.description}
                    </p>
                  )}
                  {item.date && (
                    <p className="text-xs text-[color:var(--guru-body,#b3b3b3)] mt-1">
                      {item.date}
                    </p>
                  )}
                </div>
              </div>
              {index < items.length - 1 && (
                <div className="flex-1 h-px bg-white/10 mx-4" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={cn('w-full', className)}>
      {items.map((item, index) => (
        <div key={item.id} className="relative">
          {index < items.length - 1 && (
            <div className="absolute left-4 top-8 w-px h-8 bg-white/10" />
          )}
          
          <div className="flex items-start gap-4">
            <div className={cn(
              'flex items-center justify-center w-8 h-8 rounded-full border-2 bg-[#0f0f0f] flex-shrink-0',
              getStatusColor(item.status),
              item.disabled && 'opacity-50'
            )}>
              {item.icon || <Circle className="h-4 w-4" />}
            </div>
            
            <div className="flex-1 min-w-0 pb-6">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-medium text-[color:var(--guru-heading,#ffffff)]">
                  {item.title}
                </h3>
                {item.date && (
                  <span className="text-xs text-[color:var(--guru-body,#b3b3b3)]">
                    {item.date}
                  </span>
                )}
              </div>
              
              {item.description && (
                <p className="text-sm text-[color:var(--guru-body,#b3b3b3)]">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

Timeline.displayName = 'Timeline'
