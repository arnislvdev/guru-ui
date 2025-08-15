import * as React from 'react'
import { cn } from '../utils/cn'

export type CarouselProps = {
  children: React.ReactNode[] | React.ReactNode
  initialIndex?: number
  autoplayMs?: number | null
  showArrows?: boolean
  showIndicators?: boolean
  className?: string
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  initialIndex = 0,
  autoplayMs = null,
  showArrows = true,
  showIndicators = true,
  className = ''
}) => {
  const slides = React.Children.toArray(children)
  const [index, setIndex] = React.useState(initialIndex)
  const count = slides.length

  const go = (i: number) => setIndex((i + count) % count)
  const next = () => go(index + 1)
  const prev = () => go(index - 1)

  React.useEffect(() => {
    if (!autoplayMs) return
    const id = setInterval(next, autoplayMs)
    return () => clearInterval(id)
  }, [index, autoplayMs])

  // Touch/drag swipe
  const startX = React.useRef<number | null>(null)
  const onTouchStart = (e: React.TouchEvent) => { 
    if (e.touches[0]) startX.current = e.touches[0].clientX 
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (startX.current === null || !e.touches[0]) return
    const dx = e.touches[0].clientX - startX.current
    if (Math.abs(dx) > 50) {
      dx < 0 ? next() : prev()
      startX.current = null
    }
  }
  const onTouchEnd = () => { startX.current = null }

  return (
    <div className={cn('relative overflow-hidden rounded-lg border border-white/10 bg-white/5', className)}>
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${index * 100}%)`, width: `${count * 100}%` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full flex-shrink-0 md:w-full">
            {slide}
          </div>
        ))}
      </div>

      {showArrows && count > 1 && (
        <>
          <button aria-label="Previous" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-sm text-white hover:bg-black/60">‹</button>
          <button aria-label="Next" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-sm text-white hover:bg-black/60">›</button>
        </>
      )}

      {showIndicators && count > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => go(i)} className={cn('h-2 w-2 rounded-full', i === index ? 'bg-[color:var(--arnis-accent,#ffffff)]' : 'bg-white/40')} />
          ))}
        </div>
      )}
    </div>
  )
}

Carousel.displayName = 'Carousel'


