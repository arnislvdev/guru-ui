import * as React from 'react'

export type HeroProps = {
  title: React.ReactNode
  subtitle?: string
  cta?: React.ReactNode
  center?: boolean
  className?: string
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, cta, center = true, className }) => {
  return (
    <section className={`w-full bg-[color:var(--arnis-background,#121212)] text-[color:var(--arnis-body,#b3b3b3)] ${className ?? ''}`.trim()}>
      <div className={center ? 'mx-auto max-w-5xl px-6 py-24 text-center' : 'mx-auto max-w-5xl px-6 py-24'}>
        <h1 className="text-4xl font-extrabold tracking-tight text-[color:var(--arnis-heading,#ffffff)] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-[color:var(--arnis-body,#b3b3b3)]">
            {subtitle}
          </p>
        ) : null}
        {cta ? <div className="mt-8 flex items-center justify-center gap-3">{cta}</div> : null}
      </div>
    </section>
  )
}


