import * as React from 'react'
import { cn } from '../utils/cn'

export type Column<T> = {
  key: keyof T
  header: React.ReactNode
  render?: (value: any, row: T) => React.ReactNode
  width?: string
}

export type TableProps<T> = {
  columns: Column<T>[]
  data: T[]
  stickyHeader?: boolean
  className?: string
  empty?: React.ReactNode
}

export const Table = React.forwardRef<HTMLTableElement, TableProps<any>>(({ columns, data, stickyHeader = true, className = '', empty = 'No data' }, ref) => {
  return (
    <div className={cn('overflow-auto rounded-lg border border-white/10', className)}>
      <table ref={ref} className="w-full text-left text-sm min-w-[600px] md:min-w-0" role="table">
        <thead className={cn('bg-white/5 text-[color:var(--guru-heading,#ffffff)]', stickyHeader && 'sticky top-0 z-10')}>
          <tr>
            {columns.map((c, idx) => (
              <th key={idx} style={{ width: c.width }} className="px-4 py-2 font-medium" scope="col">
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 text-[color:var(--guru-body,#b3b3b3)]">
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-4 py-6 text-center" role="cell">{empty}</td>
            </tr>
          )}
          {data.map((row, rIdx) => (
            <tr key={rIdx} className={cn('hover:bg-white/5')}>
              {columns.map((c, cIdx) => (
                <td key={cIdx} className="px-4 py-2" role="cell">
                  {c.render ? c.render(row[c.key], row) : String(row[c.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
})

Table.displayName = 'Table'
