import * as React from 'react'
import { cn } from '../utils/cn'

export type NavbarLinkItem = { label: React.ReactNode; href: string };

export type NavbarProps = {
  brand?: React.ReactNode
  links?: NavbarLinkItem[]
  className?: string
  right?: React.ReactNode
}

export const Navbar: React.FC<NavbarProps> = ({ brand, links = [], className = '', right }) => {
  const hasLeftContent = brand || links.length > 0
  const hasRightContent = right !== null && right !== undefined
  
  return (
    <header className={cn('sticky top-0 z-40 border-b border-white/10 bg-[color:var(--guru-background,#121212)]/80 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--guru-background,#121212)]/60', className)}>
      <div className={cn(
        'mx-auto flex h-14 max-w-7xl items-center px-4',
        hasLeftContent && hasRightContent ? 'justify-between' : 'justify-center'
      )}>
        <div className="flex items-center gap-3">
          {brand && <div className="text-[color:var(--guru-heading,#ffffff)] font-semibold">{brand}</div>}
          <nav className="hidden md:flex items-center gap-4">
            {links.map((l) => (
              <a key={(typeof l.label === 'string' ? l.label : l.href) as any} href={l.href} className="text-[color:var(--guru-body,#b3b3b3)] hover:text-[color:var(--guru-accent,#ffffff)]">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        {hasRightContent && (
          <div className="flex items-center gap-2">{right}</div>
        )}
      </div>
    </header>
  )
}

Navbar.displayName = 'Navbar'

 
