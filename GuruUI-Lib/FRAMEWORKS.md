# 🚀 ArnisUX Multi-Framework Support

ArnisUX now supports multiple frameworks! Choose the approach that best fits your project.

## 📦 Installation

```bash
npm install arnis-ux
```

## 🎯 Framework Options

### 1. **React (Primary)**
```tsx
import { Button, Card, Input } from 'arnis-ux'

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
    <ArnisButton variant="primary" size="lg" @click="handleClick">
      Click me
    </ArnisButton>
    <ArnisCard>
      <ArnisInput placeholder="Enter text..." />
    </ArnisCard>
  </div>
</template>

<script setup lang="ts">
import { ArnisButton, ArnisCard, ArnisInput } from 'arnis-ux/vue'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

### 3. **Vanilla JavaScript**
```html
<!-- HTML with data attributes -->
<button data-arnis-button data-variant="primary" data-size="lg" data-text="Click me"></button>

<div data-arnis-card>
  <input data-arnis-input placeholder="Enter text..." />
</div>
```

```javascript
// JavaScript API
import { createButton, ArnisCard } from 'arnis-ux/vanilla'

// Programmatic creation
const button = createButton({
  text: 'Click me',
  variant: 'primary',
  size: 'lg',
  onClick: (e) => console.log('Button clicked!', e)
})

button.mount(document.getElementById('container'))

// Event handling
document.addEventListener('arnis-button-click', (e) => {
  console.log('Button clicked via event!', e.detail)
})
```

## 🎨 CSS Import

All frameworks use the same CSS:

```javascript
// React
import 'arnis-ux/style.css'

// Vue
import 'arnis-ux/style.css'

// Vanilla
import 'arnis-ux/style.css'
```

## 🔧 Tailwind Preset

```javascript
// tailwind.config.js
module.exports = {
  presets: [require('arnis-ux/tailwind-preset')],
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
npm install arnis-ux
```

```tsx
// pages/_app.tsx
import 'arnis-ux/style.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

### **Vue + Nuxt**
```bash
npm install arnis-ux
```

```vue
<!-- nuxt.config.ts -->
export default {
  css: ['arnis-ux/style.css']
}
```

### **Vanilla + Vite**
```bash
npm install arnis-ux
```

```javascript
// main.js
import 'arnis-ux/style.css'
import 'arnis-ux/vanilla'
```

## 🔄 Migration Guide

### **From React to Vue**
```tsx
// React
<Button variant="primary">Click me</Button>
```

```vue
<!-- Vue -->
<ArnisButton variant="primary">Click me</ArnisButton>
```

### **From React to Vanilla**
```tsx
// React
<Button variant="primary">Click me</Button>
```

```html
<!-- Vanilla -->
<button data-arnis-button data-variant="primary" data-text="Click me"></button>
```

## 🎨 Theming

All frameworks support the same theming system:

```javascript
// Any framework
import { ThemeProvider, themes } from 'arnis-ux'

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
