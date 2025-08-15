# Installation Guide

This guide will help you install and set up Guru UI in your project. The process is the same regardless of which framework you're using.

## Requirements

Before installing Guru UI, make sure you have:

- Node.js 18 or higher
- npm, yarn, or pnpm package manager
- A project using React 18+, Vue 3.3+, or vanilla JavaScript
- Tailwind CSS 3.4+ (recommended but not required)

## Install the Package

Add Guru UI to your project using your preferred package manager:

```bash
# npm
npm install guru-ui

# yarn
yarn add guru-ui

# pnpm
pnpm add guru-ui
```

## Basic Setup

### React Projects

1. Import the CSS file in your main entry point:

```tsx
// main.tsx or App.tsx
import 'guru-ui/style.css'
```

2. Start using components:

```tsx
import { Button, Card } from 'guru-ui'

function App() {
  return (
    <div>
      <Card>
        <h1>Welcome to Guru UI</h1>
        <Button variant="primary">Get Started</Button>
      </Card>
    </div>
  )
}
```

### Vue Projects

1. Import the CSS file in your main entry point:

```ts
// main.ts
import 'guru-ui/style.css'
```

2. Start using components:

```vue
<template>
  <div>
    <Card>
      <h1>Welcome to Guru UI</h1>
      <Button variant="primary">Get Started</Button>
    </Card>
  </div>
</template>

<script setup>
import { Button, Card } from 'guru-ui/vue'
</script>
```

### Vanilla JavaScript Projects

1. Import the CSS and JavaScript in your main file:

```html
<!-- In your HTML head -->
<link rel="stylesheet" href="node_modules/guru-ui/style.css">

<!-- Before closing body tag -->
<script type="module">
  import 'guru-ui/vanilla'
</script>
```

2. Use data attributes in your HTML:

```html
<div data-guru-card>
  <h1>Welcome to Guru UI</h1>
  <button data-guru-button data-variant="primary">Get Started</button>
</div>
```

## Tailwind CSS Integration

If you're using Tailwind CSS, you can extend your configuration to use Guru UI's preset:

```js
// tailwind.config.js
module.exports = {
  presets: [require('guru-ui/tailwind-preset')],
  content: [
    './src/**/*.{js,ts,jsx,tsx,vue,html}',
    './node_modules/guru-ui/dist/**/*.js'
  ],
  // your other config
}
```

This preset includes:

- Color variables that match Guru UI's theming system
- Custom CSS variables for easy customization
- Responsive breakpoints optimized for UI components

## TypeScript Support

Guru UI comes with full TypeScript support out of the box. No additional setup is required.

```tsx
import type { ButtonProps } from 'guru-ui'

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />
}
```

## Bundle Size

The library is extremely lightweight and optimized:
- **Total library**: 9.1KB gzipped
- **React bundle**: 1.0KB gzipped
- **Vue bundle**: 263 bytes gzipped
- **Vanilla JS**: 400 bytes gzipped
- **Core logic**: 418 bytes gzipped
- **Styles**: 6.4KB gzipped

The library has excellent tree-shaking support, so you only bundle what you actually import and use.

## Bundle Optimization

### Tree Shaking

Guru UI supports tree shaking, so you only bundle the components you use:

```tsx
// Good - only imports Button
import { Button } from 'guru-ui'

// Avoid - imports everything
import * as GuruUI from 'guru-ui'
```

### Import Specific Frameworks

You can import from specific framework builds to reduce bundle size:

```tsx
// React (default) - 1.0KB gzipped
import { Button } from 'guru-ui'

// Vue specific - 263 bytes gzipped
import { Button } from 'guru-ui/vue'

// Vanilla specific - 400 bytes gzipped
import { createButton } from 'guru-ui/vanilla'

// Core logic only - 418 bytes gzipped
import { ButtonCore } from 'guru-ui/core'

// Utilities only - 623 bytes gzipped
import { cn } from 'guru-ui/utils'
```

## Next.js Setup

For Next.js projects, you might need to optimize the import:

```js
// next.config.js
module.exports = {
  transpilePackages: ['guru-ui'],
  experimental: {
    optimizePackageImports: ['guru-ui']
  }
}
```

## Vite Setup

Vite works with Guru UI out of the box. For optimal performance:

```ts
// vite.config.ts
export default defineConfig({
  optimizeDeps: {
    include: ['guru-ui']
  }
})
```

## Nuxt Setup

For Nuxt projects:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['guru-ui/style.css'],
  build: {
    transpile: ['guru-ui']
  }
})
```

## Webpack Setup

If you're using a custom Webpack setup:

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  }
}
```

## Verify Installation

To verify everything is working correctly, create a simple test component:

```tsx
// Test.tsx (React)
import { Button } from 'guru-ui'

export function Test() {
  return (
    <Button onClick={() => alert('Guru UI is working!')}>
      Test Button
    </Button>
  )
}
```

If the button renders with proper styling and shows an alert when clicked, your installation is successful.

## Troubleshooting

### Styles Not Loading

If components appear unstyled:

1. Make sure you imported the CSS file: `import 'guru-ui/style.css'`
2. Check that your bundler processes CSS imports
3. Verify the CSS file exists in `node_modules/guru-ui/style.css`

### TypeScript Errors

If you get TypeScript errors:

1. Make sure you're using TypeScript 5.0 or higher
2. Update your `tsconfig.json` to include `"moduleResolution": "node"`
3. Restart your TypeScript language server

### Build Errors

If you get build errors:

1. Make sure all peer dependencies are installed
2. Check that your bundler supports ES modules
3. Try clearing your node_modules and reinstalling

### Components Not Working

If components don't respond to interactions:

1. Make sure you imported the framework-specific version
2. For vanilla JS, verify the script is loaded after the DOM
3. Check browser console for JavaScript errors

## Getting Help

If you're still having issues:

1. Check the [FAQ](./faq.md) for common problems
2. Search existing [GitHub issues](https://github.com/guru-lv/guru-ui/issues)
3. Create a new issue with your setup details

## Next Steps

Now that you have Guru UI installed:

1. Read the [Quick Start Guide](./quick-start.md)
2. Explore the [Component Overview](./components/overview.md)
3. Learn about [Theming](./theming.md)
