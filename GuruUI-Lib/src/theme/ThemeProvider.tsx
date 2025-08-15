import * as React from 'react'

export type Theme = {
  background?: string
  heading?: string
  body?: string
  accent?: string
  accentHover?: string
  onAccent?: string
  radius?: string
  fontFamily?: string
}

export type ThemeProviderProps = {
  theme?: Theme
  children: React.ReactNode
}

const defaultTheme: Required<Omit<Theme, 'fontFamily'>> & { fontFamily: string } = {
  background: '#121212',
  heading: '#ffffff',
  body: '#b3b3b3',
  accent: '#ffffff',
  accentHover: '#e5e5e5',
  onAccent: '#0b0b0b',
  radius: '0.5rem',
  fontFamily: 'Inter, ui-sans-serif, system-ui, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif'
}

export const ThemeContext = React.createContext<Theme>(defaultTheme)

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  const merged = { ...defaultTheme, ...theme }
  const style: React.CSSProperties = {
    // Expose as CSS variables for Tailwind interop and runtime theming
    ['--arnis-background' as any]: merged.background,
    ['--arnis-heading' as any]: merged.heading,
    ['--arnis-body' as any]: merged.body,
    ['--arnis-accent' as any]: merged.accent,
    ['--arnis-accent-hover' as any]: merged.accentHover,
    ['--arnis-on-accent' as any]: merged.onAccent,
    ['--arnis-radius' as any]: merged.radius,
    ['--arnis-font' as any]: merged.fontFamily
  }
  return (
    <ThemeContext.Provider value={merged}>
      <div style={style} className="arnis-ux-theme">
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext)


