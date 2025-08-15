import { Link } from 'react-router-dom'
import { Button } from '@arnis-lv/guru-ui'
import { Code, ExternalLink, Github } from 'lucide-react'
import CodeExample from '../components/CodeExample'

const examples = [
  {
    title: 'Login Form',
    description: 'Complete login form with validation and error handling',
    framework: 'React',
    difficulty: 'Beginner',
    preview: `<form className="space-y-4 max-w-sm">
  <Input 
    type="email" 
    placeholder="Email" 
    required 
  />
  <Input 
    type="password" 
    placeholder="Password" 
    required 
  />
  <Button type="submit" fullWidth>
    Sign In
  </Button>
</form>`,
    codeUrl: '/examples/login-form',
    liveUrl: '/playground?example=login-form'
  },
  {
    title: 'Dashboard Cards',
    description: 'Dashboard layout with stats cards and charts',
    framework: 'React',
    difficulty: 'Intermediate',
    preview: `<div className="grid grid-cols-3 gap-4">
  <Card>
    <Badge variant="success">+12%</Badge>
    <h3>Revenue</h3>
    <p>$12,345</p>
  </Card>
  {/* More cards... */}
</div>`,
    codeUrl: '/examples/dashboard',
    liveUrl: '/playground?example=dashboard'
  },
  {
    title: 'Modal Dialog',
    description: 'Accessible modal with form and actions',
    framework: 'Vue',
    difficulty: 'Beginner',
    preview: `<Modal v-model="isOpen">
  <template #header>
    <h2>Confirm Action</h2>
  </template>
  
  <p>Are you sure you want to continue?</p>
  
  <template #footer>
    <Button @click="cancel">Cancel</Button>
    <Button variant="primary" @click="confirm">
      Confirm
    </Button>
  </template>
</Modal>`,
    codeUrl: '/examples/modal-vue',
    liveUrl: '/playground?example=modal-vue'
  },
  {
    title: 'Data Table',
    description: 'Sortable table with pagination and filters',
    framework: 'React',
    difficulty: 'Advanced',
    preview: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead sortable>Name</TableHead>
      <TableHead sortable>Status</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map(row => (
      <TableRow key={row.id}>
        <TableCell>{row.name}</TableCell>
        <TableCell>
          <Badge variant={row.status}>
            {row.status}
          </Badge>
        </TableCell>
        <TableCell>
          <Button size="sm">Edit</Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,
    codeUrl: '/examples/data-table',
    liveUrl: '/playground?example=data-table'
  },
  {
    title: 'Theme Switcher',
    description: 'Dynamic theme switching with local storage',
    framework: 'React',
    difficulty: 'Intermediate',
    preview: `const [theme, setTheme] = useState('light')

return (
  <ThemeProvider theme={theme}>
    <Button
      variant="outline"
      onClick={() => setTheme(
        theme === 'light' ? 'dark' : 'light'
      )}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </Button>
  </ThemeProvider>
)`,
    codeUrl: '/examples/theme-switcher',
    liveUrl: '/playground?example=theme-switcher'
  },
  {
    title: 'Form Validation',
    description: 'Complete form with real-time validation',
    framework: 'Vue',
    difficulty: 'Intermediate',
    preview: `<form @submit="handleSubmit">
  <Input
    v-model="form.email"
    type="email"
    :error="errors.email"
    placeholder="Email"
  />
  <Textarea
    v-model="form.message"
    :error="errors.message"
    placeholder="Message"
  />
  <Button type="submit" :disabled="!isValid">
    Submit
  </Button>
</form>`,
    codeUrl: '/examples/form-validation-vue',
    liveUrl: '/playground?example=form-validation-vue'
  }
]

const quickStartReact = `npm install @arnis-lv/guru-ui

import { Button, Alert } from '@arnis-lv/guru-ui'
import '@arnis-lv/guru-ui/style.css'

function App() {
  return (
    <div>
      <Alert variant="success">
        Welcome to Guru UI!
      </Alert>
      <Button variant="primary">
        Get Started
      </Button>
    </div>
  )
}`

const quickStartVue = `npm install @arnis-lv/guru-ui

<template>
  <div>
    <Alert variant="success">
      Welcome to Guru UI!
    </Alert>
    <Button variant="primary">
      Get Started
    </Button>
  </div>
</template>

<script setup>
import { Button, Alert } from '@arnis-lv/guru-ui/vue'
import '@arnis-lv/guru-ui/style.css'
</script>`

export default function ExamplesPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Examples</h1>
        <p className="text-lg text-gray-600">
          Real-world examples and code snippets to help you get started with Guru UI.
        </p>
      </div>

      {/* Quick Start */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Quick Start</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              React
            </h3>
            <CodeExample code={quickStartReact} language="jsx" />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              Vue 3
            </h3>
            <CodeExample code={quickStartVue} language="vue" />
          </div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Component Examples</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {examples.map((example) => (
            <div key={example.title} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {example.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {example.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium
                    ${example.framework === 'React' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                    }`}>
                    {example.framework}
                  </span>
                  
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium
                    ${example.difficulty === 'Beginner' 
                      ? 'bg-green-100 text-green-800'
                      : example.difficulty === 'Intermediate'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                    }`}>
                    {example.difficulty}
                  </span>
                </div>
                
                {/* Code Preview */}
                <div className="mb-4">
                  <CodeExample 
                    code={example.preview} 
                    language={example.framework.toLowerCase()} 
                    showCopy={false}
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <Link to={example.codeUrl}>
                      <Code className="h-4 w-4 mr-2" />
                      View Code
                    </Link>
                  </Button>
                  
                  <Button
                    variant="primary"
                    size="sm"
                    asChild
                  >
                    <Link to={example.liveUrl}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Try Live
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">More Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-guru-50 to-guru-100 p-6 rounded-lg">
            <Code className="h-8 w-8 text-guru-600 mb-4" />
            <h3 className="text-lg font-semibold text-guru-900 mb-2">Interactive Playground</h3>
            <p className="text-guru-700 mb-4 text-sm">
              Experiment with components in real-time
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link to="/playground">
                Open Playground
              </Link>
            </Button>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
            <Github className="h-8 w-8 text-gray-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">GitHub Examples</h3>
            <p className="text-gray-700 mb-4 text-sm">
              Complete example projects and templates
            </p>
            <Button variant="outline" size="sm" asChild>
              <a 
                href="https://github.com/guru-lv/guru-ui/tree/main/examples" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
            <ExternalLink className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Component Docs</h3>
            <p className="text-blue-700 mb-4 text-sm">
              Detailed documentation for each component
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link to="/components">
                Browse Components
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
