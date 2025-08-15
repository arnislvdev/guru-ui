# GuruUI

A lightweight, multi-framework UI component library built with Tailwind CSS. Use the same components across React, Vue, and vanilla JavaScript with consistent styling and behavior.

## What Makes This Different

- **Multi-Framework Support**: Works with React, Vue 3, and vanilla JavaScript
- **Consistent Design**: Components look and work the same across all frameworks
- **Lightweight**: Small bundle size with tree-shaking support
- **Accessible**: Built with accessibility best practices
- **Themeable**: Change colors and styles without rebuilding
- **Responsive**: Works well on all screen sizes
- **TypeScript**: Full type safety and better development experience

## Getting Started

### Install the Package

```bash
npm install guru-ui
```

### Basic Usage

#### React
```tsx
import { Button, Modal, Alert } from 'guru-ui'
import 'guru-ui/style.css'

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Alert variant="success">Success message!</Alert>
    </div>
  )
}
```

#### Vue 3
```vue
<template>
  <div>
    <Button variant="primary">Click me</Button>
    <Alert variant="success">Success message!</Alert>
  </div>
</template>

<script setup>
import { Button, Alert } from 'guru-ui/vue'
import 'guru-ui/style.css'
</script>
```

#### Vanilla JavaScript
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="node_modules/guru-ui/style.css">
</head>
<body>
  <button data-guru-button data-variant="primary">Click me</button>
  <div data-guru-alert data-variant="success">Success message!</div>
  
  <script type="module">
    import 'guru-ui/vanilla'
  </script>
</body>
</html>
```

## Changing Themes

### Use Built-in Themes
```tsx
import { ThemeProvider, themes } from 'guru-ui'

function App() {
  return (
    <ThemeProvider theme={themes.blue}>
      <YourApp />
    </ThemeProvider>
  )
}
```

### Create Your Own Theme
```tsx
const customTheme = {
  '--guru-primary': '#ff6b6b',
  '--guru-background': '#2d3436',
  '--guru-heading': '#ffffff',
  '--guru-body': '#b2bec3'
}

<ThemeProvider theme={customTheme}>
  <YourApp />
</ThemeProvider>
```

## Available Components

### Form Components
- **Button** - Different styles, sizes, and states
- **Input** - Text, email, password inputs with validation
- **Checkbox** - Accessible checkbox with labels
- **Toggle** - Switch component with loading states
- **Radio** - Radio button groups
- **Select** - Dropdown selection
- **Textarea** - Multi-line text input

### Layout Components
- **Card** - Content containers with shadows
- **Modal** - Overlay dialogs with focus management
- **Drawer** - Slide-out side panels
- **Tabs** - Tabbed content organization
- **Accordion** - Collapsible content sections

### Feedback Components
- **Alert** - Status messages with different types
- **Toast** - Notification system
- **Progress** - Progress bars and spinners
- **Skeleton** - Loading placeholders
- **Tooltip** - Hover information
- **Popover** - Rich popup content

### Data Display
- **Table** - Data tables with sorting
- **Avatar** - User profile images
- **Badge** - Status indicators
- **Tag** - Categorization labels
- **Stats** - Metric displays
- **Chart** - Data visualization

## Advanced Usage

### Import from Specific Frameworks
```tsx
// React (default)
import { Button } from 'guru-ui'

// Vue
import { Button } from 'guru-ui/vue'

// Vanilla JS
import { createButton } from 'guru-ui/vanilla'

// Core logic only
import { ButtonCore } from 'guru-ui/core'
```

### Custom Styling
```tsx
import { Button } from 'guru-ui'

// Override with your own classes
<Button className="bg-red-500 hover:bg-red-600">
  Custom Button
</Button>
```

### Create Components Programmatically
```tsx
import { createModal } from 'guru-ui/vanilla'

const modal = createModal({
  title: 'Custom Modal',
  content: 'This is a programmatically created modal',
  size: 'lg'
})

modal.open()
```

## Responsive Design

All components work well on mobile and desktop:

```tsx
// Responsive grid that adapts to screen size
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card>Content 1</Card>
  <Card>Content 2</Card>
  <Card>Content 3</Card>
</div>
```

## Accessibility Features

- **Screen Reader Support**: Proper labels and descriptions
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Smart focus handling
- **Color Contrast**: Meets accessibility standards
- **ARIA Support**: Proper accessibility attributes

## Performance Tips

### Only Import What You Need
```tsx
// Good - only imports Button code
import { Button } from 'guru-ui'

// Bad - imports everything
import * as guru from 'guru-ui'
```

### Check Bundle Size
```bash
npm run size
```

### Analyze Your Bundle
```bash
npm run analyze
```

## Development

### Set Up Locally
```bash
git clone https://github.com/guru-lv/guru-ui.git
cd guru-ui
npm install
npm run dev
```

### Build Commands
```bash
npm run build        # Build the library
npm run docs:build   # Build documentation
npm run size         # Check bundle size
```

## API Reference

### Button Component
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: () => void
}
```

### Modal Component
```tsx
interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  children: React.ReactNode
}
```

## Contributing

We welcome contributions! Please see our Contributing Guide for details.

### Development Setup
```bash
npm install
npm run dev
npm run test
npm run build
```

## License

MIT License - see LICENSE file for details.

## Support

- **Documentation**: [docs.guru-ui.com](https://docs.guru-ui.com)
- **Issues**: [GitHub Issues](https://github.com/guru-lv/guru-ui/issues)
- **Discussions**: [GitHub Discussions](https://github.com/guru-lv/guru-ui/discussions)

## Version Updates

### From v0.1.x to v0.2.x
- Import paths stay the same
- Better TypeScript types
- Improved accessibility
- Better tree-shaking support

---

**Made with care by the GuruUI team**

[![npm version](https://badge.fury.io/js/guru-ui.svg)](https://badge.fury.io/js/guru-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
