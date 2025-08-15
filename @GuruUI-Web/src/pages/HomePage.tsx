import { Link } from 'react-router-dom'
import { Button } from '@arnis-lv/guru-ui'
import { 
  ArrowRight, 
  Zap, 
  Layers, 
  Package, 
  Code, 
  Gauge, 
  Palette,
  Shield,
  Download,
  Star
} from 'lucide-react'
import CodeExample from '../components/CodeExample'

const features = [
  {
    icon: Zap,
    title: 'Ultra Lightweight',
    description: 'Only 9.1KB gzipped for the entire library. React bundle is just 1.0KB, Vue is 263 bytes.',
  },
  {
    icon: Layers,
    title: 'Multi-Framework',
    description: 'Works seamlessly with React, Vue 3, and vanilla JavaScript with consistent APIs.',
  },
  {
    icon: Package,
    title: 'Tree-Shakable',
    description: 'Excellent tree-shaking with 39.4% ratio. Import only what you need.',
  },
  {
    icon: Code,
    title: 'TypeScript First',
    description: 'Built with TypeScript for full type safety and excellent developer experience.',
  },
  {
    icon: Gauge,
    title: 'Performance Focused',
    description: 'Optimized build process, minimal runtime overhead, and fast rendering.',
  },
  {
    icon: Palette,
    title: 'Highly Customizable',
    description: 'Built with Tailwind CSS. Easy theming with CSS variables and design tokens.',
  },
  {
    icon: Shield,
    title: 'Accessibility First',
    description: 'WCAG compliant components with screen reader support and keyboard navigation.',
  },
]

const stats = [
  { label: 'Total Bundle Size', value: '9.1KB', suffix: 'gzipped' },
  { label: 'Core Components', value: '16', suffix: 'implemented' },
  { label: 'Tree-Shaking Ratio', value: '39.4%', suffix: 'excellent' },
  { label: 'Framework Support', value: '3', suffix: 'React, Vue, Vanilla' },
]

const reactExample = `import { Button, Alert, ThemeProvider } from '@arnis-lv/guru-ui'
import '@arnis-lv/guru-ui/style.css'

function App() {
  return (
    <ThemeProvider theme="dark">
      <Alert variant="success">
        Welcome to Guru UI!
      </Alert>
      <Button variant="primary" size="lg">
        Get Started
      </Button>
    </ThemeProvider>
  )
}`

const vueExample = `<template>
  <ThemeProvider theme="dark">
    <Alert variant="success">
      Welcome to Guru UI!
    </Alert>
    <Button variant="primary" size="lg">
      Get Started
    </Button>
  </ThemeProvider>
</template>

<script setup>
import { Button, Alert, ThemeProvider } from '@arnis-lv/guru-ui/vue'
import '@arnis-lv/guru-ui/style.css'
</script>`

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-guru-50 to-white px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center rounded-full bg-guru-100 px-3 py-1 text-sm font-medium text-guru-800">
                <Star className="mr-2 h-4 w-4" />
                v0.1.21 - Ultra Lightweight Release
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Build Faster with{' '}
              <span className="bg-gradient-to-r from-guru-600 to-guru-500 bg-clip-text text-transparent">
                Guru UI
              </span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              A lightweight, multi-framework UI component library for React, Vue, and vanilla JavaScript. 
              Only 9.1KB gzipped with exceptional performance and developer experience.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="primary" size="lg" asChild>
                <Link to="/installation">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link to="/playground">
                  Try Playground
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center">
              <code className="inline-flex items-center rounded-md bg-gray-100 px-3 py-1 text-sm font-mono text-gray-900">
                <Download className="mr-2 h-4 w-4" />
                npm install @arnis-lv/guru-ui
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-guru-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.suffix}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Guru UI?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to build modern, performant user interfaces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-guru-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-guru-600" />
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Quick Examples
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get started in seconds with any framework
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                React
              </h3>
              <CodeExample code={reactExample} language="jsx" />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Vue 3
              </h3>
              <CodeExample code={vueExample} language="vue" />
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/examples">
                View More Examples
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-guru-600">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to build something amazing?
          </h2>
          <p className="mt-4 text-lg text-guru-100">
            Join developers who choose performance and simplicity
          </p>
          <div className="mt-8">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/installation">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
