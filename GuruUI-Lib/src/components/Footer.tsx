import * as React from 'react'

export type FooterProps = {
  left?: React.ReactNode
  right?: React.ReactNode
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ left, right, className }) => {
  return (
    <footer className={`w-full border-t border-white/10 bg-[#0f0f0f] text-[color:var(--arnis-body,#b3b3b3)] ${className ?? ''}`.trim()}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-sm">{left}</div>
        <div className="text-sm">{right}</div>
      </div>
    </footer>
  )
}


