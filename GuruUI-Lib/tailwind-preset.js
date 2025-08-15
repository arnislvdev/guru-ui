/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'guru-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'guru-scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      animation: {
        'fade-in': 'guru-fade-in 180ms ease-out both',
        'scale-in': 'guru-scale-in 180ms ease-out both'
      },
      colors: {
        background: '#121212',
        heading: '#ffffff',
        body: '#b3b3b3',
        accent: '#ffffff',
        accentHover: '#e5e5e5'
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'sans-serif'
        ]
      },
      borderRadius: {
        md: '0.5rem'
      }
    }
  }
}


