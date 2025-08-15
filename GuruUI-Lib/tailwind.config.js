/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'arnis': {
          background: 'var(--arnis-background, #121212)',
          'background-hover': 'var(--arnis-background-hover, #1a1a1a)',
          heading: 'var(--arnis-heading, #ffffff)',
          body: 'var(--arnis-body, #b3b3b3)',
          accent: 'var(--arnis-accent, #ffffff)',
          'accent-hover': 'var(--arnis-accent-hover, #e5e5e5)',
          'on-accent': 'var(--arnis-on-accent, #0b0b0b)',
          primary: 'var(--arnis-primary, #3b82f6)',
          secondary: 'var(--arnis-secondary, #64748b)',
          success: 'var(--arnis-success, #10b981)',
          warning: 'var(--arnis-warning, #f59e0b)',
          danger: 'var(--arnis-danger, #ef4444)',
        }
      },
      borderRadius: {
        'arnis': 'var(--arnis-radius, 0.5rem)'
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-up': 'slideUp 0.2s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
    container: false
  }
}


