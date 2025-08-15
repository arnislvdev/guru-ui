# Guru UI

A lightweight, multi-framework UI component library built for modern web development. Guru UI provides consistent, accessible components for React, Vue, and vanilla JavaScript with exceptional performance and developer experience.

## Why Choose Guru UI?

- **Ultra Lightweight** - Only 9.1KB gzipped for the entire library
- **Multi-Framework** - Works seamlessly with React, Vue 3, and vanilla JavaScript
- **Optimized Bundles** - React (1.0KB), Vue (263 bytes), Vanilla (400 bytes)
- **16 Core Components** - Fully implemented and production-ready
- **Excellent Tree-Shaking** - 39.4% core-to-framework ratio for minimal bundles
- **Built with Tailwind CSS** - Easy customization and theming
- **TypeScript First** - Full type safety and IntelliSense support
- **Accessibility Focused** - WCAG compliant with screen reader support

## Quick Start

### Installation

```bash
npm install @arnis-lv/guru-ui
```

### React Example

```jsx
import { Button, ThemeProvider } from '@arnis-lv/guru-ui'
import '@arnis-lv/guru-ui/style.css'

function App() {
  return (
    <ThemeProvider theme="dark">
      <Button variant="primary" size="lg">
        Hello Guru UI
      </Button>
    </ThemeProvider>
  )
}
```

### Vue Example

```vue
<template>
  <ThemeProvider theme="dark">
    <Button variant="primary" size="lg">
      Hello Guru UI
    </Button>
  </ThemeProvider>
</template>

<script setup>
import { Button, ThemeProvider } from '@arnis-lv/guru-ui/vue'
import '@arnis-lv/guru-ui/style.css'
</script>
```

### Vanilla JavaScript Example

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="node_modules/@arnis-lv/guru-ui/style.css">
</head>
<body>
  <button data-guru-button data-variant="primary" data-size="lg">
    Hello Guru UI
  </button>
  
  <script type="module">
    import { initializeAllComponents } from '@arnis-lv/guru-ui/vanilla'
    initializeAllComponents()
  </script>
</body>
</html>
```

## Documentation

Explore our comprehensive documentation to get the most out of Guru UI:

### 📚 Getting Started
- **[Installation Guide](GuruUI-Docs/installation.md)** - Setup instructions for all frameworks
- **[Quick Start Guide](GuruUI-Docs/quick-start.md)** - Get up and running in minutes
- **[Architecture Overview](GuruUI-Docs/architecture.md)** - Understanding the multi-framework system

### 🧩 Components
- **[Component Overview](GuruUI-Docs/components/overview.md)** - Complete list of available components
- **[Button Documentation](GuruUI-Docs/components/button.md)** - Button component guide
- **[Form Components](GuruUI-Docs/components/form.md)** - Input, Textarea, Checkbox, and more
- **[Navigation Components](GuruUI-Docs/components/navigation.md)** - Menu, Breadcrumbs, Pagination
- **[Feedback Components](GuruUI-Docs/components/feedback.md)** - Alert, Modal, Toast, Progress
- **[Layout Components](GuruUI-Docs/components/layout.md)** - Card, Separator, Hero, Footer
- **[Data Display](GuruUI-Docs/components/data-display.md)** - Table, Avatar, Badge, Stats

### 🎨 Customization
- **[Theming Guide](GuruUI-Docs/theming.md)** - Custom themes and CSS variables
- **[Styling Guide](GuruUI-Docs/styling.md)** - Tailwind integration and custom styles
- **[Theme Presets](GuruUI-Docs/theme-presets.md)** - Built-in theme options

### 🚀 Advanced
- **[Performance Guide](GuruUI-Docs/performance.md)** - Optimization tips and bundle analysis
- **[Framework Integration](GuruUI-Docs/framework-integration.md)** - Deep dives for each framework
- **[Build Optimization](GuruUI-Docs/build-optimization.md)** - Tree-shaking and bundle splitting

### 📝 Examples
- **[React Examples](GuruUI-Docs/examples/react.md)** - Complete React application examples
- **[Vue Examples](GuruUI-Docs/examples/vue.md)** - Vue 3 implementation guides
- **[Vanilla JS Examples](GuruUI-Docs/examples/vanilla.md)** - Pure JavaScript usage
- **[Form Examples](GuruUI-Docs/examples/react-form.md)** - Advanced form implementations

### 🤝 Contributing
- **[Contributing Guide](GuruUI-Docs/contributing.md)** - How to contribute to Guru UI
- **[Development Setup](GuruUI-Docs/development.md)** - Local development environment
- **[API Reference](GuruUI-Docs/api-reference.md)** - Complete API documentation

### 📋 Other
- **[Changelog](GuruUI-Docs/UPDATES.md)** - Recent updates and changes
- **[Roadmap](GuruUI-Docs/roadmap.md)** - Future plans and features
- **[FAQ](GuruUI-Docs/faq.md)** - Frequently asked questions

## Package Information

- **Package Name**: `@arnis-lv/guru-ui`
- **Current Version**: `0.1.21`
- **Bundle Size**: 9.1KB gzipped (total library)
- **Framework Bundles**: React (1.0KB), Vue (263B), Vanilla (400B)
- **Core Components**: 16 fully implemented
- **License**: MIT

## Performance Metrics

```
Total Library Size: 9.1KB gzipped
├── React Bundle: 1.0KB gzipped
├── Vue Bundle: 263 bytes gzipped  
├── Vanilla Bundle: 400 bytes gzipped
├── Core Logic: 418 bytes gzipped
├── Utilities: 616 bytes gzipped
└── Styles: 275 bytes gzipped

Tree-shaking Ratio: 39.4% (Excellent)
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Links

- **NPM Package**: [npmjs.com/package/@arnis-lv/guru-ui](https://www.npmjs.com/package/@arnis-lv/guru-ui)
- **GitHub Repository**: [github.com/guru-lv/guru-ui](https://github.com/guru-lv/guru-ui)
- **Website**: [guruui.com](https://guruui.com)

## License

MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by the Guru UI team. Built for developers who value performance, simplicity, and flexibility.
