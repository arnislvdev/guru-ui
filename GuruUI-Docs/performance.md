# Performance Guide

Guru UI is built for speed and efficiency. Here's how we achieved an ultra-lightweight 9.1KB gzipped library and how you can maximize performance in your apps.

## Bundle Size Breakdown

### Overall Performance
- **Total Library**: 9.1KB gzipped
- **Tree-shaking Ratio**: 39.4% (excellent optimization)
- **Framework Overhead**: Minimal shared core approach

### Framework-Specific Bundles
| Framework | Size (Gzipped) | Use Case |
|-----------|----------------|----------|
| React | 1.0KB | React applications |
| Vue 3 | 263 bytes | Vue applications |
| Vanilla JS | 400 bytes | No framework needed |
| Core Logic | 418 bytes | Custom implementations |
| Utilities | 623 bytes | Helper functions only |
| Styles | 6.4KB | Global CSS and animations |

## Optimization Strategies

### Smart Imports

Import only what you need for optimal tree-shaking:

```tsx
// ✅ Good - specific imports
import { Button, Input } from 'guru-ui'

// ❌ Avoid - imports everything
import * as GuruUI from 'guru-ui'

// ✅ Better - framework-specific
import { Button } from 'guru-ui/vue'  // 263 bytes

// ✅ Best - core only if building custom wrapper
import { ButtonCore } from 'guru-ui/core'  // 418 bytes
```

### Bundle Analysis

Use these tools to analyze your bundle:

```bash
# Webpack Bundle Analyzer
npm install --save-dev webpack-bundle-analyzer

# Vite Bundle Analyzer
npm install --save-dev rollup-plugin-analyzer

# Check Guru UI impact
npm run build -- --analyze
```

### Component Size Reference

**Largest Components** (for selective importing):
- VideoPlayer: 1.7KB
- Combobox: 1.6KB  
- MultiSelect: 1.5KB
- Chart: 1.4KB
- DatePicker: 1.3KB

**Smallest Components** (lightweight choices):
- Button: 800 bytes
- Badge: 470 bytes
- Skeleton: 270 bytes
- Separator: 180 bytes

## Core Architecture Benefits

### Shared Logic Approach

```typescript
// Single core implementation used by all frameworks
export class ButtonCore extends BaseCore {
  static getClasses(options: ButtonCoreOptions): string {
    // Shared class generation logic
    return createComponentClasses(baseClasses, sizeClasses, variantClasses, options)
  }
}

// React wrapper (minimal overhead)
export const Button = (props) => {
  const classes = ButtonCore.getClasses(props)
  return <button className={classes} {...props} />
}

// Vue wrapper (minimal overhead)  
export default defineComponent({
  setup(props) {
    const classes = computed(() => ButtonCore.getClasses(props))
    return { classes }
  }
})
```

### Benefits:
- **No Duplication**: Logic written once, used everywhere
- **Consistent Behavior**: Same classes and props across frameworks
- **Easier Testing**: Test core logic once
- **Better Performance**: Smaller total bundle size

## CSS Performance

### Variable-Based Theming

Guru UI uses CSS custom properties for runtime theming without rebuilds:

```css
/* Fast runtime changes */
:root {
  --guru-accent: #ff6b6b;  /* Instant theme change */
  --guru-radius: 0.75rem;  /* Instant border radius change */
}

/* No need to rebuild or process CSS */
```

### Utility-First Classes

Components use optimized Tailwind classes:

```typescript
// Smart class merging with tailwind-merge
import { cn } from 'guru-ui/utils'

const classes = cn(
  'inline-flex items-center',  // Base utility classes
  'bg-[color:var(--guru-accent)]',  // CSS variable integration
  'hover:bg-[color:var(--guru-accent-hover)]',
  customClass  // User override
)
```

### CSS Loading Strategy

```tsx
// Option 1: Import all styles (recommended for most apps)
import 'guru-ui/style.css'

// Option 2: Import specific stylesheets
import 'guru-ui/globals.css'     // Base styles only
import 'guru-ui/components.css'  // Component styles only
import 'guru-ui/animations.css'  // Animation styles only
```

## Runtime Performance

### Component Optimization

```tsx
// ✅ Use React.memo for expensive components
const OptimizedChart = React.memo(Chart)

// ✅ Use computed properties in Vue
const chartData = computed(() => processData(props.data))

// ✅ Debounce expensive operations
import { debounce } from 'guru-ui/utils'

const debouncedSearch = debounce((query) => {
  // Expensive search operation
}, 300)
```

### Lazy Loading

```tsx
// Lazy load heavy components
import { lazy, Suspense } from 'react'

const Chart = lazy(() => 
  import('guru-ui').then(m => ({ default: m.Chart }))
)

function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Chart data={data} />
    </Suspense>
  )
}
```

### Event Handling

```tsx
// ✅ Use useCallback for stable references
const handleClick = useCallback(() => {
  // Handle click
}, [dependency])

// ✅ Use vanilla JS for high-frequency events
import { createButton } from 'guru-ui/vanilla'

// More performant for simple interactions
const button = createButton(element, { 
  variant: 'primary',
  onClick: handler 
})
```

## Build Optimization

### Vite Configuration

```ts
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'vue'],  // Don't bundle peer deps
    }
  },
  optimizeDeps: {
    include: ['guru-ui']  // Pre-bundle Guru UI
  }
})
```

### Webpack Configuration

```js
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        guruui: {
          test: /[\\/]node_modules[\\/]guru-ui[\\/]/,
          name: 'guru-ui',
          chunks: 'all',
        },
      },
    },
  },
}
```

### Next.js Configuration

```js
// next.config.js
module.exports = {
  transpilePackages: ['guru-ui'],
  experimental: {
    optimizePackageImports: ['guru-ui']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
}
```

## Monitoring Performance

### Bundle Size Monitoring

```bash
# Run benchmark script
npm run benchmark

# Output shows:
# React Components: 1.0KB (gzipped)
# Vue Components: 263 bytes (gzipped)  
# Vanilla JS: 400 bytes (gzipped)
# Core Logic: 418 bytes (gzipped)
# Total: 9.1KB (gzipped)
```

### Runtime Monitoring

```tsx
// Measure component render time
import { Profiler } from 'react'

function onRenderCallback(id, phase, actualDuration) {
  console.log(`${id} ${phase} took ${actualDuration}ms`)
}

<Profiler id="Button" onRender={onRenderCallback}>
  <Button>Click me</Button>
</Profiler>
```

### Performance Budget

Set performance budgets in your build process:

```js
// Budget recommendations for Guru UI apps
const budgets = {
  maximumFileSizeBudget: '50KB',    // Per chunk
  maximumError: '100KB',           // Total bundle
  guruUIBudget: '10KB'             // Guru UI portion
}
```

## Best Practices

### Component Selection

```tsx
// Choose the right component for your needs
<Skeleton />        // 270 bytes - simple loading state
<Loader />          // 740 bytes - advanced loading animations  
<LoadingOverlay />  // 480 bytes - overlay loading state
```

### State Management

```tsx
// ✅ Use local state for UI-only data
const [isOpen, setIsOpen] = useState(false)

// ✅ Use global state for shared data
const theme = useGlobalTheme()

// ✅ Avoid unnecessary re-renders
const memoizedProps = useMemo(() => ({ 
  variant, size, disabled 
}), [variant, size, disabled])
```

### Accessibility Performance

```tsx
// Guru UI handles this automatically, but you can optimize:

// ✅ Use semantic HTML
<Button as="a" href="/link">Link Button</Button>

// ✅ Provide meaningful labels
<Button aria-label="Close dialog">×</Button>

// ✅ Use proper heading hierarchy
<h1>Page Title</h1>
<h2>Section Title</h2>
```

## Performance Checklist

- [ ] Import only needed components
- [ ] Use framework-specific builds when possible
- [ ] Import CSS separately for better caching
- [ ] Use lazy loading for heavy components
- [ ] Set up proper bundle analysis
- [ ] Monitor bundle size in CI/CD
- [ ] Use React.memo or Vue computed for expensive operations
- [ ] Implement proper error boundaries
- [ ] Use semantic HTML for better accessibility performance
- [ ] Set performance budgets in your build process

With these optimizations, your app using Guru UI should have excellent performance while maintaining the full feature set and beautiful design.
