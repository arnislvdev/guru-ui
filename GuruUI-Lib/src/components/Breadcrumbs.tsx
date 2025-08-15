import * as React from 'react'
import { cn } from '../utils/cn'

export type Crumb = { label: React.ReactNode; href?: string };

export type BreadcrumbsProps = {
  items: Crumb[]
  separator?: React.ReactNode
  className?: string
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, separator = '/', className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={cn('text-sm', className)}>
      <ol className="flex flex-wrap items-center gap-2 text-[color:var(--arnis-body,#b3b3b3)]">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1
          return (
            <li key={idx} className="inline-flex items-center">
              {item.href && !isLast ? (
                <a href={item.href} className="hover:text-[color:var(--arnis-accent,#ffffff)]">{item.label}</a>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className={cn(isLast && 'text-[color:var(--arnis-heading,#ffffff)]')}>{item.label}</span>
              )}
              {!isLast && <span className="mx-2 opacity-70">{separator}</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

Breadcrumbs.displayName = 'Breadcrumbs'


