# Theming Guide

Guru UI provides a flexible theming system that lets you customize the appearance of all components without rebuilding. Use built-in themes or create your own.

## How Theming Works

Guru UI uses CSS custom properties (variables) for theming. This allows you to:

- Change colors and styles at runtime
- Create theme switchers
- Support dark/light modes
- Customize specific components

## Using Built-in Themes

Guru UI comes with several pre-made themes:

### React
```tsx
import { ThemeProvider, themes } from 'guru-ui'

function App() {
  return (
    <ThemeProvider theme={themes.blue}>
      <YourComponents />
    </ThemeProvider>
  )
}
```

### Vue
```vue
<template>
  <ThemeProvider :theme="themes.blue">
    <YourComponents />
  </ThemeProvider>
</template>

<script setup>
import { ThemeProvider, themes } from 'guru-ui/vue'
</script>
```

### Vanilla JavaScript
```html
<div class="guru-ui-theme" style="
  --guru-accent: #1e90ff;
  --guru-accent-hover: #1677d9;
  --guru-on-accent: #ffffff;
">
  <button data-guru-button data-variant="primary">Themed Button</button>
</div>
```

## Available Themes

| Theme | Primary Color | Best For |
|-------|---------------|----------|
| `themes.default` | White | General use, high contrast |
| `themes.blue` | Blue | Professional, corporate |
| `themes.violet` | Purple | Creative, modern |
| `themes.emerald` | Green | Success, nature themes |
| `themes.amber` | Orange | Warning, energy |
| `themes.rose` | Red | Error, passion |
| `themes.cyan` | Cyan | Tech, fresh |
| `themes.slate` | Gray | Minimal, sophisticated |

## Creating Custom Themes

### Simple Custom Theme

```tsx
const customTheme = {
  accent: '#ff6b6b',
  accentHover: '#ff5252',
  onAccent: '#ffffff'
}

<ThemeProvider theme={customTheme}>
  <YourApp />
</ThemeProvider>
```

### Complete Custom Theme

```tsx
const darkTheme = {
  background: '#0a0a0a',
  heading: '#ffffff',
  body: '#a0a0a0',
  accent: '#00d4aa',
  accentHover: '#00c49a',
  onAccent: '#000000',
  radius: '12px',
  fontFamily: 'Poppins, sans-serif'
}

<ThemeProvider theme={darkTheme}>
  <YourApp />
</ThemeProvider>
```

## Theme Properties

### Color Properties

| Property | Description | Default |
|----------|-------------|---------|
| `background` | Main background color | `#121212` |
| `heading` | Primary text color | `#ffffff` |
| `body` | Secondary text color | `#b3b3b3` |
| `accent` | Primary accent color | `#ffffff` |
| `accentHover` | Accent hover state | `#e5e5e5` |
| `onAccent` | Text on accent color | `#0b0b0b` |

### Style Properties

| Property | Description | Default |
|----------|-------------|---------|
| `radius` | Border radius | `0.5rem` |
| `fontFamily` | Font family | `Inter, sans-serif` |

## Theme Switching

### React Theme Switcher

```tsx
import { useState } from 'react'
import { ThemeProvider, themes } from 'guru-ui'

const themeOptions = [
  { name: 'Default', value: themes.default },
  { name: 'Blue', value: themes.blue },
  { name: 'Violet', value: themes.violet },
  { name: 'Emerald', value: themes.emerald }
]

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.default)

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="p-4">
        <select 
          value={themeOptions.findIndex(t => t.value === currentTheme)}
          onChange={(e) => setCurrentTheme(themeOptions[e.target.value].value)}
        >
          {themeOptions.map((theme, index) => (
            <option key={theme.name} value={index}>
              {theme.name}
            </option>
          ))}
        </select>
        
        <YourComponents />
      </div>
    </ThemeProvider>
  )
}
```

### Vue Theme Switcher

```vue
<template>
  <ThemeProvider :theme="currentTheme">
    <div class="p-4">
      <select v-model="selectedTheme">
        <option v-for="(theme, index) in themeOptions" :value="index">
          {{ theme.name }}
        </option>
      </select>
      
      <YourComponents />
    </div>
  </ThemeProvider>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ThemeProvider, themes } from 'guru-ui/vue'

const themeOptions = [
  { name: 'Default', value: themes.default },
  { name: 'Blue', value: themes.blue },
  { name: 'Violet', value: themes.violet },
  { name: 'Emerald', value: themes.emerald }
]

const selectedTheme = ref(0)
const currentTheme = computed(() => themeOptions[selectedTheme.value].value)
</script>
```

## CSS Variable Override

You can override theme variables directly in CSS:

### Global Override
```css
:root {
  --guru-accent: #ff6b6b;
  --guru-accent-hover: #ff5252;
  --guru-background: #1a1a1a;
  --guru-heading: #ffffff;
}
```

### Component-Specific Override
```css
.special-button {
  --guru-accent: #00d4aa;
  --guru-radius: 20px;
}
```

### Scoped Override
```css
.dark-section {
  --guru-background: #000000;
  --guru-heading: #ffffff;
  --guru-body: #cccccc;
}
```

## Dark and Light Mode

### System Preference Detection

```tsx
import { useState, useEffect } from 'react'

function useSystemTheme() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDark(mediaQuery.matches)

    const handler = (e) => setIsDark(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return isDark
}

function App() {
  const systemIsDark = useSystemTheme()
  const [userTheme, setUserTheme] = useState(null)
  
  const effectiveTheme = userTheme || (systemIsDark ? darkTheme : lightTheme)

  return (
    <ThemeProvider theme={effectiveTheme}>
      <button onClick={() => setUserTheme(userTheme === darkTheme ? lightTheme : darkTheme)}>
        Toggle Theme
      </button>
      <YourApp />
    </ThemeProvider>
  )
}
```

### Light Theme Example

```tsx
const lightTheme = {
  background: '#ffffff',
  heading: '#1a1a1a',
  body: '#4a4a4a',
  accent: '#2563eb',
  accentHover: '#1d4ed8',
  onAccent: '#ffffff'
}

const darkTheme = {
  background: '#0a0a0a',
  heading: '#ffffff',
  body: '#a0a0a0',
  accent: '#3b82f6',
  accentHover: '#2563eb',
  onAccent: '#ffffff'
}
```

## Advanced Theming

### Dynamic Theme Generation

```tsx
function generateTheme(primaryColor) {
  // Simple theme generator
  return {
    accent: primaryColor,
    accentHover: darken(primaryColor, 0.1),
    onAccent: getContrastColor(primaryColor)
  }
}

// Usage
const userTheme = generateTheme('#ff6b6b')
```

### Theme Persistence

```tsx
function usePersistedTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('guru-ui-theme')
    return saved ? JSON.parse(saved) : themes.default
  })

  useEffect(() => {
    localStorage.setItem('guru-ui-theme', JSON.stringify(theme))
  }, [theme])

  return [theme, setTheme]
}
```

### CSS-in-JS Integration

```tsx
// With styled-components
const ThemedButton = styled.button`
  background: var(--guru-accent);
  color: var(--guru-on-accent);
  border-radius: var(--guru-radius);
  
  &:hover {
    background: var(--guru-accent-hover);
  }
`

// With emotion
const buttonStyles = css`
  background: var(--guru-accent);
  color: var(--guru-on-accent);
`
```

## Tailwind Integration

### Using CSS Variables in Tailwind

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'guru-accent': 'var(--guru-accent)',
        'guru-background': 'var(--guru-background)',
        'guru-heading': 'var(--guru-heading)',
        'guru-body': 'var(--guru-body)'
      }
    }
  }
}
```

```tsx
// Usage in components
<div className="bg-guru-background text-guru-heading">
  <button className="bg-guru-accent text-guru-body">
    Themed Button
  </button>
</div>
```

### Guru UI Tailwind Preset

Use the included Tailwind preset for automatic integration:

```js
// tailwind.config.js
module.exports = {
  presets: [require('guru-ui/tailwind-preset')],
  // your config
}
```

## Best Practices

### Color Accessibility

- Ensure sufficient contrast ratios (4.5:1 for normal text)
- Test with color blindness simulators
- Don't rely solely on color to convey information

### Performance

- Use CSS variables for runtime theming
- Avoid inline styles when possible
- Group theme changes to minimize reflows

### User Experience

- Respect system preferences by default
- Provide theme options when appropriate
- Persist user theme choices
- Use smooth transitions for theme changes

### Design Consistency

- Maintain consistent spacing and typography
- Use a limited color palette
- Follow your brand guidelines
- Test themes across all components

## Troubleshooting

### Theme Not Applying

1. Make sure ThemeProvider wraps your components
2. Check that CSS variables are being set
3. Verify import paths are correct
4. Clear browser cache if styles seem cached

### CSS Variable Support

CSS variables are supported in all modern browsers. For older browsers:

```css
/* Fallback for older browsers */
.button {
  background: #ffffff; /* fallback */
  background: var(--guru-accent, #ffffff);
}
```

### Theme Flickering

To prevent theme flickering on page load:

```tsx
// Set theme immediately in head
const script = `
  (function() {
    const theme = localStorage.getItem('guru-ui-theme');
    if (theme) {
      const parsed = JSON.parse(theme);
      Object.entries(parsed).forEach(([key, value]) => {
        document.documentElement.style.setProperty('--guru-' + key, value);
      });
    }
  })();
`
```

## Examples

### Brand Color Theme

```tsx
const brandTheme = {
  accent: '#1db584', // Your brand color
  accentHover: '#16a075',
  onAccent: '#ffffff',
  radius: '8px'
}
```

### High Contrast Theme

```tsx
const highContrastTheme = {
  background: '#000000',
  heading: '#ffffff',
  body: '#ffffff',
  accent: '#ffff00',
  accentHover: '#cccc00',
  onAccent: '#000000'
}
```

### Minimal Theme

```tsx
const minimalTheme = {
  background: '#fafafa',
  heading: '#1a1a1a',
  body: '#666666',
  accent: '#000000',
  accentHover: '#333333',
  onAccent: '#ffffff',
  radius: '2px'
}
```
