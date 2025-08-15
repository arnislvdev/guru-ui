import * as React from 'react'
import { cn } from '../utils/cn'

export type PaginationProps = {
  page: number
  pageCount: number
  onPageChange: (page: number) => void
  className?: string
}

export const Pagination: React.FC<PaginationProps> = ({ page, pageCount, onPageChange, className = '' }) => {
  const clamp = (p: number) => Math.max(1, Math.min(pageCount, p))
  const pages: (number | '…')[] = React.useMemo(() => {
    const acc: (number | '…')[] = []
    const win = 1
    const add = (p: number) => { if (p >= 1 && p <= pageCount) acc.push(p) }
    add(1)
    for (let p = page - win; p <= page + win; p++) add(p)
    add(pageCount)
    const dedup = Array.from(new Set(acc)).sort((a, b) => (a as number) - (b as number)) as number[]
    const out: (number | '…')[] = []
    for (let i = 0; i < dedup.length; i++) {
      if (i > 0 && dedup[i] !== (dedup[i - 1] as number) + 1) out.push('…')
      out.push(dedup[i] as number)
    }
    return out
  }, [page, pageCount])

  return (
    <nav className={cn('inline-flex items-center gap-1', className)} aria-label="Pagination">
      <button className="px-3 py-1.5 rounded border border-white/10 text-[color:var(--guru-heading,#ffffff)] hover:bg-white/10 disabled:opacity-40" disabled={page <= 1} onClick={() => onPageChange(clamp(page - 1))}>
        Prev
      </button>
      {pages.map((p, idx) => (
        p === '…' ? (
          <span key={idx} className="px-2 text-[color:var(--guru-body,#b3b3b3)]">…</span>
        ) : (
          <button key={idx} className={cn('px-3 py-1.5 rounded border text-sm', p === page ? 'border-[color:var(--guru-accent,#ffffff)] text-[color:var(--guru-accent,#ffffff)]' : 'border-white/10 text-[color:var(--guru-heading,#ffffff)] hover:bg-white/10')} onClick={() => onPageChange(p)}>
            {p}
          </button>
        )
      ))}
      <button className="px-3 py-1.5 rounded border border-white/10 text-[color:var(--guru-heading,#ffffff)] hover:bg-white/10 disabled:opacity-40" disabled={page >= pageCount} onClick={() => onPageChange(clamp(page + 1))}>
        Next
      </button>
    </nav>
  )
}

Pagination.displayName = 'Pagination'


