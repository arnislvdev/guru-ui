import { Alert } from '@arnis-lv/guru-ui'
import { Package, Download, Zap, Code2 } from 'lucide-react'
import CodeExample from '../components/CodeExample'

const npmInstall = `npm install @arnis-lv/guru-ui`
const yarnInstall = `yarn add @arnis-lv/guru-ui`
const pnpmInstall = `pnpm add @arnis-lv/guru-ui`

const reactSetup = `import { Button, ThemeProvider } from '@arnis-lv/guru-ui'
import '@arnis-lv/guru-ui/style.css'

function App() {
  return (
    <ThemeProvider theme="light">
      <Button variant="primary">
        Hello Guru UI
      </Button>
    </ThemeProvider>
  )
}`

const vueSetup = `<template>
  <ThemeProvider theme="light">
    <Button variant="primary">
      Hello Guru UI
    </Button>
  </ThemeProvider>
</template>

<script setup>
import { Button, ThemeProvider } from '@arnis-lv/guru-ui/vue'
import '@arnis-lv/guru-ui/style.css'
</script>`

const vanillaSetup = `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="node_modules/@arnis-lv/guru-ui/style.css">
</head>
<body>
  <button data-guru-button data-variant="primary">
    Hello Guru UI
  </button>
  
  <script type="module">
    import { initializeAllComponents } from '@arnis-lv/guru-ui/vanilla'
    initializeAllComponents()
  </script>
</body>
</html>`

const tailwindConfig = `module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@arnis-lv/guru-ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`

export default function InstallationPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Installation</h1>
        <p className="text-lg text-gray-600">
          Get started with Guru UI in seconds. Choose your preferred package manager and framework.
        </p>
      </div>

      <Alert variant="info" className="mb-8">
        <Zap className="h-4 w-4" />
        <span>
          Guru UI is only 9.1KB gzipped total. Individual framework bundles are even smaller: 
          React (1.0KB), Vue (263B), Vanilla (400B).
        </span>
      </Alert>

      {/* Package Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
          <Package className="mr-3 h-6 w-6 text-guru-600" />
          Package Installation
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <h3 className="text-lg font-medium mb-2">npm</h3>
            <CodeExample code={npmInstall} language="bash" showCopy={true} />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Yarn</h3>
            <CodeExample code={yarnInstall} language="bash" showCopy={true} />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">pnpm</h3>
            <CodeExample code={pnpmInstall} language="bash" showCopy={true} />
          </div>
        </div>
      </section>

      {/* Framework Setup */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
          <Code2 className="mr-3 h-6 w-6 text-guru-600" />
          Framework Setup
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium mb-4 flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              React
            </h3>
            <p className="text-gray-600 mb-4">
              Import components and styles directly from the main package.
            </p>
            <CodeExample code={reactSetup} language="jsx" />
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4 flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              Vue 3
            </h3>
            <p className="text-gray-600 mb-4">
              Use the Vue-specific export path for optimized Vue components.
            </p>
            <CodeExample code={vueSetup} language="vue" />
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4 flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
              Vanilla JavaScript
            </h3>
            <p className="text-gray-600 mb-4">
              Use data attributes and initialize components automatically.
            </p>
            <CodeExample code={vanillaSetup} language="html" />
          </div>
        </div>
      </section>

      {/* Bundle Sizes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Bundle Sizes</h2>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-guru-600">9.1KB</div>
              <div className="text-sm text-gray-600">Total Library</div>
              <div className="text-xs text-gray-500">gzipped</div>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-blue-600">1.0KB</div>
              <div className="text-sm text-gray-600">React Bundle</div>
              <div className="text-xs text-gray-500">gzipped</div>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-green-600">263B</div>
              <div className="text-sm text-gray-600">Vue Bundle</div>
              <div className="text-xs text-gray-500">gzipped</div>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">400B</div>
              <div className="text-sm text-gray-600">Vanilla Bundle</div>
              <div className="text-xs text-gray-500">gzipped</div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              Tree-shaking ratio: 39.4% (Excellent)
            </span>
          </div>
        </div>
      </section>

      {/* Tailwind Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Tailwind CSS Configuration</h2>
        
        <p className="text-gray-600 mb-4">
          If you're using Tailwind CSS, add Guru UI to your content paths for proper purging:
        </p>
        
        <CodeExample code={tailwindConfig} language="javascript" title="tailwind.config.js" />
      </section>

      {/* Next Steps */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Next Steps</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-guru-50 to-guru-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-guru-900 mb-2">Explore Components</h3>
            <p className="text-guru-700 mb-4">
              Browse our collection of 16 fully implemented components.
            </p>
            <a 
              href="/components" 
              className="text-guru-600 hover:text-guru-800 font-medium"
            >
              View Components →
            </a>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Try the Playground</h3>
            <p className="text-blue-700 mb-4">
              Experiment with components in our interactive playground.
            </p>
            <a 
              href="/playground" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Open Playground →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
