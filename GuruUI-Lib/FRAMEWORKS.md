# 🚀 GuruUI Multi-Framework Support

GuruUI now supports multiple frameworks! Choose the approach that best fits your project.

## 📦 Installation

```bash
npm install guru-ui
```

## 🎯 Framework Options

### 1. **React (Primary)**
```tsx
import { Button, Card, Input } from 'guru-ui'

function App() {
  return (
    <div>
      <Button variant="primary" size="lg">
        Click me
      </Button>
      <Card>
        <Input placeholder="Enter text..." />
      </Card>
    </div>
  )
}
```

### 2. **Vue 3**
```vue
<template>
  <div>
    <GuruButton variant="primary" size="lg" @click="handleClick">
      Click me
    </GuruButton>
    <GuruCard>
      <GuruInput placeholder="Enter text..." />
    </GuruCard>
  </div>
</template>

<script setup lang="ts">
import { GuruButton, GuruCard, GuruInput } from 'guru-ui/vue'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

### 3. **Vanilla JavaScript**
```html
<!-- HTML with data attributes -->
<button data-guru-button data-variant="primary" data-size="lg" data-text="Click me"></button>

<div data-guru-card>
  <input data-guru-input placeholder="Enter text..." />
</div>
```

```javascript
// JavaScript API
import { createButton, GuruCard } from 'guru-ui/vanilla'

// Programmatic creation
const button = createButton({
  text: 'Click me',
  variant: 'primary',
  size: 'lg',
  onClick: (e) => console.log('Button clicked!', e)
})

button.mount(document.getElementById('container'))

// Event handling
document.addEventListener('guru-button-click', (e) => {
  console.log('Button clicked via event!', e.detail)
})
```

## 🎨 CSS Import

All frameworks use the same CSS:

```javascript
// React
import 'guru-ui/style.css'

// Vue
import 'guru-ui/style.css'

// Vanilla
import 'guru-ui/style.css'
```

## 🔧 Tailwind Preset

```javascript
// tailwind.config.js
module.exports = {
  presets: [require('guru-ui/tailwind-preset')],
  // ... your config
}
```

## 📱 Component Availability

| Component | React | Vue | Vanilla |
|-----------|-------|-----|---------|
| Button    | ✅    | ✅  | ✅      |
| Card      | ✅    | ✅  | ✅      |
| Input     | ✅    | ✅  | ✅      |
| Badge     | ✅    | ✅  | ✅      |
| Modal     | ✅    | ✅  | ✅      |
| ...       | ✅    | ✅  | ✅      |

## 🎯 Framework-Specific Features

### **React**
- Full TypeScript support
- React hooks integration
- JSX syntax
- Forward refs

### **Vue 3**
- Composition API
- Vue SFC syntax
- TypeScript support
- Vue events

### **Vanilla**
- Zero dependencies
- Data attribute API
- Programmatic creation
- Event-driven architecture

## 🚀 Getting Started Examples

### **React + Next.js**
```bash
npm install guru-ui
```

```tsx
// pages/_app.tsx
import 'guru-ui/style.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

### **Vue + Nuxt**
```bash
npm install guru-ui
```

```vue
<!-- nuxt.config.ts -->
export default {
  css: ['guru-ui/style.css']
}
```

### **Vanilla + Vite**
```bash
npm install guru-ui
```

```javascript
// main.js
import 'guru-ui/style.css'
import 'guru-ui/vanilla'
```

## 🔄 Migration Guide

### **From React to Vue**
```tsx
// React
<Button variant="primary">Click me</Button>
```

```vue
<!-- Vue -->
<GuruButton variant="primary">Click me</GuruButton>
```

### **From React to Vanilla**
```tsx
// React
<Button variant="primary">Click me</Button>
```

```html
<!-- Vanilla -->
<button data-guru-button data-variant="primary" data-text="Click me"></button>
```

## 🎨 Theming

All frameworks support the same theming system:

```javascript
// Any framework
import { ThemeProvider, themes } from 'guru-ui'

// Use the same theme presets across all frameworks
const customTheme = {
  ...themes.default,
  accent: '#ff6b6b'
}
```

## 📚 Documentation

- [React Components](./docs/react.md)
- [Vue Components](./docs/vue.md)
- [Vanilla Components](./docs/vanilla.md)
- [Theming Guide](./docs/theming.md)
- [Migration Guide](./docs/migration.md)

## 🤝 Contributing

Want to add support for another framework? Check out our [contributing guide](./CONTRIBUTING.md)!

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.
