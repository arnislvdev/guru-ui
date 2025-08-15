# Guru UI Documentation

Welcome to Guru UI, a lightweight multi-framework component library built with Tailwind CSS. This library provides consistent, accessible components that work across React, Vue 3, and vanilla JavaScript.

## What You'll Find Here

This documentation covers everything you need to know about using Guru UI in your projects:

### Getting Started
- [Installation Guide](./installation.md) - How to install and set up Guru UI
- [Quick Start](./quick-start.md) - Get up and running in minutes
- [Framework Support](./frameworks.md) - React, Vue, and vanilla JavaScript usage

### Components
- [Component Overview](./components/overview.md) - All available components
- [Button](./components/button.md) - Interactive buttons with multiple variants
- [Modal](./components/modal.md) - Overlay dialogs with focus management
- [Form Components](./components/forms.md) - Inputs, checkboxes, toggles, and more
- [Layout Components](./components/layout.md) - Cards, tabs, accordions, and navigation
- [Feedback Components](./components/feedback.md) - Alerts, toasts, progress indicators
- [Data Display](./components/data.md) - Tables, charts, stats, and more

### Customization
- [Theming Guide](./theming.md) - How to customize colors and styles
- [CSS Variables](./css-variables.md) - Available CSS custom properties
- [Tailwind Integration](./tailwind-integration.md) - Using with Tailwind CSS

### Development
- [Architecture](./architecture.md) - How the library is structured
- [Contributing](./contributing.md) - How to contribute to the project
- [API Reference](./api-reference.md) - Detailed API documentation

## Key Features

**Multi-Framework Support**: Write once, use everywhere. The same components work in React, Vue, and vanilla JavaScript with identical APIs and styling.

**Lightweight**: Small bundle size with tree-shaking support. Only include what you use.

**Accessible**: Built with accessibility in mind. Proper ARIA attributes, keyboard navigation, and screen reader support.

**Customizable**: Easy theming system using CSS variables. Change colors and styles without rebuilding.

**TypeScript Ready**: Full TypeScript support with comprehensive type definitions.

**Responsive**: All components work well on desktop and mobile devices.

## Quick Example

```jsx
// React
import { Button, Modal, Alert } from 'guru-ui'
import 'guru-ui/style.css'

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Alert variant="success">Operation completed!</Alert>
    </div>
  )
}
```

```vue
<!-- Vue -->
<template>
  <div>
    <Button variant="primary">Click me</Button>
    <Alert variant="success">Operation completed!</Alert>
  </div>
</template>

<script setup>
import { Button, Alert } from 'guru-ui/vue'
import 'guru-ui/style.css'
</script>
```

```html
<!-- Vanilla JavaScript -->
<button data-guru-button data-variant="primary">Click me</button>
<div data-guru-alert data-variant="success">Operation completed!</div>

<script type="module">
  import 'guru-ui/vanilla'
  import 'guru-ui/style.css'
</script>
```

## Getting Help

If you need help or have questions:

- Check the [FAQ](./faq.md) for common questions
- Look at [Examples](./examples/) for practical usage scenarios
- Visit our [GitHub repository](https://github.com/guru-lv/guru-ui) for issues and discussions

## Next Steps

1. Start with the [Installation Guide](./installation.md)
2. Follow the [Quick Start](./quick-start.md) tutorial
3. Explore the [Component Overview](./components/overview.md)
4. Learn about [Theming](./theming.md) to customize the look

Happy building with Guru UI!
