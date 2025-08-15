import * as React from 'react'
import { cn } from '../utils/cn'

export type VirtualListProps<T> = {
  items: T[]
  height: number
  itemHeight: number
  renderItem: (item: T, index: number) => React.ReactNode
  overscan?: number
  className?: string
}

export const VirtualList = React.forwardRef<HTMLDivElement, VirtualListProps<any>>(({ 
  items, 
  height, 
  itemHeight, 
  renderItem, 
  overscan = 5,
  className = '' 
}, ref) => {
  const [scrollTop, setScrollTop] = React.useState(0)

  const totalHeight = items.length * itemHeight
  const visibleCount = Math.ceil(height / itemHeight)
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan)
  const endIndex = Math.min(items.length - 1, startIndex + visibleCount + overscan * 2)

  const visibleItems = items.slice(startIndex, endIndex + 1)
  const offsetY = startIndex * itemHeight

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop)
  }

  return (
    <div
      ref={ref}
      className={cn('overflow-auto', className)}
      style={{ height }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: offsetY,
            left: 0,
            right: 0
          }}
        >
          {visibleItems.map((item, index) => (
            <div
              key={startIndex + index}
              style={{ height: itemHeight }}
            >
              {renderItem(item, startIndex + index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

VirtualList.displayName = 'VirtualList'
