import { useParams } from 'react-router-dom'
import { Button, Alert, Input, Checkbox, Progress, Avatar, Badge } from '@arnis-lv/guru-ui'
import CodeExample from '../components/CodeExample'
import { useState } from 'react'

const componentExamples = {
  button: {
    title: 'Button',
    description: 'Clickable buttons with multiple variants and sizes',
    examples: [
      {
        title: 'Basic Usage',
        code: `import { Button } from '@arnis-lv/guru-ui'

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`,
        component: (
          <div className="flex gap-2 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        )
      },
      {
        title: 'Sizes',
        code: `<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>`,
        component: (
          <div className="flex gap-2 items-center flex-wrap">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        )
      },
      {
        title: 'States',
        code: `<Button loading>Loading</Button>
<Button disabled>Disabled</Button>
<Button variant="danger">Danger</Button>`,
        component: (
          <div className="flex gap-2 flex-wrap">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button variant="danger">Danger</Button>
          </div>
        )
      }
    ]
  },
  alert: {
    title: 'Alert',
    description: 'Alert messages with different severity levels',
    examples: [
      {
        title: 'Basic Usage',
        code: `import { Alert } from '@arnis-lv/guru-ui'

<Alert variant="info">This is an info alert</Alert>
<Alert variant="success">This is a success alert</Alert>
<Alert variant="warning">This is a warning alert</Alert>
<Alert variant="danger">This is a danger alert</Alert>`,
        component: (
          <div className="space-y-4">
            <Alert variant="info">This is an info alert</Alert>
            <Alert variant="success">This is a success alert</Alert>
            <Alert variant="warning">This is a warning alert</Alert>
            <Alert variant="danger">This is a danger alert</Alert>
          </div>
        )
      }
    ]
  },
  input: {
    title: 'Input',
    description: 'Text input fields with validation and error states',
    examples: [
      {
        title: 'Basic Usage',
        code: `import { Input } from '@arnis-lv/guru-ui'

<Input placeholder="Enter your name" />
<Input variant="error" placeholder="Error state" />
<Input disabled placeholder="Disabled input" />`,
        component: (
          <div className="space-y-4 max-w-sm">
            <Input placeholder="Enter your name" />
            <Input variant="error" placeholder="Error state" />
            <Input disabled placeholder="Disabled input" />
          </div>
        )
      }
    ]
  },
  checkbox: {
    title: 'Checkbox',
    description: 'Checkboxes for boolean selections with indeterminate state',
    examples: [
      {
        title: 'Basic Usage',
        code: `import { Checkbox } from '@arnis-lv/guru-ui'

<Checkbox>Default checkbox</Checkbox>
<Checkbox checked>Checked checkbox</Checkbox>
<Checkbox disabled>Disabled checkbox</Checkbox>`,
        component: (
          <div className="space-y-2">
            <Checkbox>Default checkbox</Checkbox>
            <Checkbox checked readOnly>Checked checkbox</Checkbox>
            <Checkbox disabled>Disabled checkbox</Checkbox>
          </div>
        )
      }
    ]
  },
  progress: {
    title: 'Progress',
    description: 'Progress bars for showing completion status',
    examples: [
      {
        title: 'Basic Usage',
        code: `import { Progress } from '@arnis-lv/guru-ui'

<Progress value={25} />
<Progress value={50} variant="success" />
<Progress value={75} variant="warning" />
<Progress value={100} variant="danger" />`,
        component: (
          <div className="space-y-4">
            <Progress value={25} />
            <Progress value={50} variant="success" />
            <Progress value={75} variant="warning" />
            <Progress value={100} variant="danger" />
          </div>
        )
      }
    ]
  },
  avatar: {
    title: 'Avatar',
    description: 'User avatars with fallbacks and status indicators',
    examples: [
      {
        title: 'Basic Usage',
        code: `import { Avatar } from '@arnis-lv/guru-ui'

<Avatar src="/user.jpg" alt="User" />
<Avatar>JD</Avatar>
<Avatar size="lg">AB</Avatar>`,
        component: (
          <div className="flex gap-4 items-center">
            <Avatar>JD</Avatar>
            <Avatar>AB</Avatar>
            <Avatar size="lg">CD</Avatar>
          </div>
        )
      }
    ]
  },
  badge: {
    title: 'Badge',
    description: 'Small labels and status indicators',
    examples: [
      {
        title: 'Basic Usage',
        code: `import { Badge } from '@arnis-lv/guru-ui'

<Badge>Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>`,
        component: (
          <div className="flex gap-2 flex-wrap">
            <Badge>Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
          </div>
        )
      }
    ]
  }
}

export default function ComponentDetailPage() {
  const { componentName } = useParams<{ componentName: string }>()
  const [activeTab, setActiveTab] = useState('examples')
  
  const component = componentName ? componentExamples[componentName as keyof typeof componentExamples] : null

  if (!component) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Alert variant="warning">
          Component "{componentName}" not found. 
          <a href="/components" className="ml-2 text-guru-600 hover:text-guru-800">
            View all components →
          </a>
        </Alert>
      </div>
    )
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <a href="/components" className="hover:text-guru-600">Components</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{component.title}</span>
        </nav>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{component.title}</h1>
        <p className="text-lg text-gray-600">{component.description}</p>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {['examples', 'api', 'accessibility'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize transition-colors
                  ${activeTab === tab
                    ? 'border-guru-500 text-guru-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'examples' && (
        <div className="space-y-12">
          {component.examples.map((example, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{example.title}</h3>
              
              {/* Live Example */}
              <div className="mb-4 p-6 bg-gray-50 rounded-lg border">
                <div className="mb-2 text-sm font-medium text-gray-700">Preview</div>
                {example.component}
              </div>
              
              {/* Code */}
              <CodeExample code={example.code} language="jsx" />
            </div>
          ))}
        </div>
      )}

      {activeTab === 'api' && (
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">API Reference</h3>
          <p className="text-gray-600 mb-4">
            Complete API documentation for the {component.title} component.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              API documentation is being prepared. Check back soon for detailed prop definitions, 
              TypeScript interfaces, and usage guidelines.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'accessibility' && (
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility</h3>
          
          <div className="space-y-4">
            <Alert variant="success">
              This component follows WCAG 2.1 guidelines and includes proper ARIA attributes.
            </Alert>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Keyboard Navigation</h4>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>All interactive elements are keyboard accessible</li>
                <li>Focus indicators are clearly visible</li>
                <li>Tab order follows logical sequence</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Screen Reader Support</h4>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>Proper semantic HTML structure</li>
                <li>ARIA labels and descriptions</li>
                <li>State changes are announced</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
