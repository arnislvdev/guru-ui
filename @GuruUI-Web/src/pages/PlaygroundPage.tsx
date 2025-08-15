import { useState } from 'react'
import { Button, Alert, Input, Checkbox, Progress, Avatar, Badge, Switch, ThemeProvider } from '@arnis-lv/guru-ui'
import { Play, RotateCcw, Copy, Download } from 'lucide-react'
import CodeExample from '../components/CodeExample'

const presetExamples = {
  'button-variants': {
    title: 'Button Variants',
    code: `<div className="flex gap-2 flex-wrap">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="danger">Danger</Button>
</div>`,
    component: (
      <div className="flex gap-2 flex-wrap">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>
    )
  },
  'form-elements': {
    title: 'Form Elements',
    code: `<div className="space-y-4 max-w-sm">
  <Input placeholder="Enter your name" />
  <Input type="email" placeholder="Email address" />
  <Checkbox>Accept terms and conditions</Checkbox>
  <Switch>Enable notifications</Switch>
  <Button variant="primary" fullWidth>Submit</Button>
</div>`,
    component: (
      <div className="space-y-4 max-w-sm">
        <Input placeholder="Enter your name" />
        <Input type="email" placeholder="Email address" />
        <Checkbox>Accept terms and conditions</Checkbox>
        <Switch>Enable notifications</Switch>
        <Button variant="primary" fullWidth>Submit</Button>
      </div>
    )
  },
  'alerts': {
    title: 'Alert Components',
    code: `<div className="space-y-4">
  <Alert variant="info">This is an info alert</Alert>
  <Alert variant="success">Operation completed successfully</Alert>
  <Alert variant="warning">Please check your input</Alert>
  <Alert variant="danger">Something went wrong</Alert>
</div>`,
    component: (
      <div className="space-y-4">
        <Alert variant="info">This is an info alert</Alert>
        <Alert variant="success">Operation completed successfully</Alert>
        <Alert variant="warning">Please check your input</Alert>
        <Alert variant="danger">Something went wrong</Alert>
      </div>
    )
  },
  'progress-and-badges': {
    title: 'Progress & Badges',
    code: `<div className="space-y-6">
  <div>
    <h4 className="mb-2">Progress Bars</h4>
    <div className="space-y-2">
      <Progress value={25} />
      <Progress value={50} variant="success" />
      <Progress value={75} variant="warning" />
      <Progress value={100} variant="danger" />
    </div>
  </div>
  
  <div>
    <h4 className="mb-2">Badges</h4>
    <div className="flex gap-2 flex-wrap">
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  </div>
</div>`,
    component: (
      <div className="space-y-6">
        <div>
          <h4 className="mb-2 font-medium">Progress Bars</h4>
          <div className="space-y-2">
            <Progress value={25} />
            <Progress value={50} variant="success" />
            <Progress value={75} variant="warning" />
            <Progress value={100} variant="danger" />
          </div>
        </div>
        
        <div>
          <h4 className="mb-2 font-medium">Badges</h4>
          <div className="flex gap-2 flex-wrap">
            <Badge>Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
          </div>
        </div>
      </div>
    )
  }
}

export default function PlaygroundPage() {
  const [activeExample, setActiveExample] = useState('button-variants')
  const [theme, setTheme] = useState('light')
  
  const currentExample = presetExamples[activeExample as keyof typeof presetExamples]

  const handleCopyCode = async () => {
    if (currentExample) {
      try {
        await navigator.clipboard.writeText(currentExample.code)
        // Could add a toast notification here
      } catch (err) {
        console.error('Failed to copy code:', err)
      }
    }
  }

  const handleReset = () => {
    setActiveExample('button-variants')
    setTheme('light')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Interactive Playground</h1>
          <p className="text-lg text-gray-600">
            Experiment with Guru UI components in real-time. Try different combinations and see the results instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-4">
              <h3 className="font-semibold text-gray-900 mb-4">Examples</h3>
              
              <div className="space-y-2">
                {Object.entries(presetExamples).map(([key, example]) => (
                  <button
                    key={key}
                    onClick={() => setActiveExample(key)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors
                      ${activeExample === key
                        ? 'bg-guru-50 text-guru-700 border border-guru-200'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                  >
                    {example.title}
                  </button>
                ))}
              </div>
              
              <hr className="my-4" />
              
              <h4 className="font-medium text-gray-900 mb-3">Theme</h4>
              <div className="space-y-2">
                {['light', 'dark'].map((themeName) => (
                  <button
                    key={themeName}
                    onClick={() => setTheme(themeName)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm capitalize transition-colors
                      ${theme === themeName
                        ? 'bg-guru-50 text-guru-700 border border-guru-200'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                  >
                    {themeName}
                  </button>
                ))}
              </div>
              
              <hr className="my-4" />
              
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={handleCopyCode}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Code
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  fullWidth
                  onClick={handleReset}
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <div className="space-y-6">
              {/* Preview */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">
                    {currentExample?.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Theme: {theme}</span>
                    <div className={`w-3 h-3 rounded-full ${
                      theme === 'light' ? 'bg-yellow-400' : 'bg-blue-400'
                    }`}></div>
                  </div>
                </div>
                
                <div className={`p-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                  <ThemeProvider theme={theme}>
                    {currentExample?.component}
                  </ThemeProvider>
                </div>
              </div>

              {/* Code */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">Code</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopyCode}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </div>
                
                <div className="p-0">
                  {currentExample && (
                    <CodeExample 
                      code={currentExample.code} 
                      language="jsx" 
                      showCopy={false}
                    />
                  )}
                </div>
              </div>

              {/* Tips */}
              <div className="bg-gradient-to-r from-guru-50 to-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">💡 Playground Tips</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Try switching between light and dark themes to see how components adapt</li>
                  <li>• Copy the code and paste it directly into your project</li>
                  <li>• All components are fully accessible and keyboard navigable</li>
                  <li>• Combine different components to create custom interfaces</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
