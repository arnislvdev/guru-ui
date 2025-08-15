import * as React from 'react'
import { CSS_VARS } from '../types/common'

export interface Theme {
  background?: string
  foreground?: string
  heading?: string
  body?: string
  accent?: string
  accentHover?: string
  onAccent?: string
  radius?: string
  fontFamily?: string
}

export interface ThemeProviderProps {
  theme?: Partial<Theme>
  children: React.ReactNode
  /**
   * Apply theme to root document instead of wrapper div
   * Useful for global theming
   */
  global?: boolean
}

const defaultTheme: Required<Theme> = {
  background: '#0a0a0a',
  foreground: '#fafafa',
  heading: '#ffffff',
  body: '#a3a3a3',
  accent: '#ffffff',
  accentHover: '#e5e5e5',
  onAccent: '#0a0a0a',
  radius: '0.5rem',
  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif'
}

const ThemeContext = React.createContext<Required<Theme>>(defaultTheme)

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  theme, 
  children, 
  global = false 
}) => {
  const merged = React.useMemo(() => ({ 
    ...defaultTheme, 
    ...theme 
  }), [theme])

  const cssVariables = React.useMemo(() => ({
    [CSS_VARS.background]: merged.background,
    [CSS_VARS.foreground]: merged.foreground,
    [CSS_VARS.heading]: merged.heading,
    [CSS_VARS.body]: merged.body,
    [CSS_VARS.accent]: merged.accent,
    [CSS_VARS.accentHover]: merged.accentHover,
    [CSS_VARS.onAccent]: merged.onAccent,
    [CSS_VARS.radius]: merged.radius,
    [CSS_VARS.font]: merged.fontFamily,
  }), [merged])

  // Apply theme globally to document root
  React.useEffect(() => {
    if (!global || typeof document === 'undefined') return

    Object.entries(cssVariables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value)
    })

    return () => {
      Object.keys(cssVariables).forEach(key => {
        document.documentElement.style.removeProperty(key)
      })
    }
  }, [cssVariables, global])

  if (global) {
    return (
      <ThemeContext.Provider value={merged}>
        {children}
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={merged}>
      <div 
        style={cssVariables as React.CSSProperties} 
        className="guru-ui-theme"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

/**
 * Hook to access the current theme values
 */
export const useTheme = (): Required<Theme> => {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}


