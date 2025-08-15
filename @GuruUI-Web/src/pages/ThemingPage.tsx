import { useState } from 'react'
import { Button, Alert, ThemeProvider } from '@arnis-lv/guru-ui'
import { Palette, Sun, Moon, Sparkles } from 'lucide-react'
import CodeExample from '../components/CodeExample'

const themeProviderExample = `import { ThemeProvider } from '@arnis-lv/guru-ui'

function App() {
  return (
    <ThemeProvider theme="dark">
      <YourComponents />
    </ThemeProvider>
  )
}`

const customThemeExample = `const customTheme = {
  accent: '#3b82f6',
  background: '#ffffff',
  heading: '#1f2937',
  body: '#6b7280',
  muted: '#f3f4f6'
}

<ThemeProvider theme={customTheme}>
  <YourComponents />
</ThemeProvider>`

const cssVariablesExample = `:root {
  --guru-accent: #3b82f6;
  --guru-background: #ffffff;
  --guru-heading: #1f2937;
  --guru-body: #6b7280;
  --guru-muted: #f3f4f6;
}`

const themes = {
  light: {
    accent: '#0ea5e9',
    background: '#ffffff',
    heading: '#1f2937',
    body: '#6b7280',
    muted: '#f3f4f6'
  },
  dark: {
    accent: '#38bdf8',
    background: '#1f2937',
    heading: '#f9fafb',
    body: '#e5e7eb',
    muted: '#374151'
  },
  ocean: {
    accent: '#0891b2',
    background: '#f0f9ff',
    heading: '#0c4a6e',
    body: '#0369a1',
    muted: '#e0f2fe'
  },
  forest: {
    accent: '#059669',
    background: '#f0fdf4',
    heading: '#064e3b',
    body: '#047857',
    muted: '#dcfce7'
  }
}

export default function ThemingPage() {
  const [currentTheme, setCurrentTheme] = useState('light')

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Theming</h1>
        <p className="text-lg text-gray-600">
          Customize the look and feel of Guru UI components with powerful theming options.
        </p>
      </div>

      {/* Theme Preview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
          <Palette className="mr-3 h-6 w-6 text-guru-600" />
          Theme Preview
        </h2>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(themes).map(([name, theme]) => (
              <button
                key={name}
                onClick={() => setCurrentTheme(name)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors
                  ${currentTheme === name
                    ? 'bg-guru-100 text-guru-800 border-2 border-guru-300'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                  }`}
              >
                {name}
              </button>
            ))}
          </div>
          
          <ThemeProvider theme={themes[currentTheme as keyof typeof themes]}>
            <div className="space-y-4 p-6 rounded-lg" style={{
              backgroundColor: themes[currentTheme as keyof typeof themes].background,
              color: themes[currentTheme as keyof typeof themes].body
            }}>
              <h3 className="text-xl font-semibold" style={{
                color: themes[currentTheme as keyof typeof themes].heading
              }}>
                Theme Preview
              </h3>
              
              <p>This is how your components will look with the {currentTheme} theme.</p>
              
              <div className="flex gap-2 flex-wrap">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
              </div>
              
              <Alert variant="info">
                <Sparkles className="h-4 w-4" />
                This is an example alert with the current theme applied.
              </Alert>
            </div>
          </ThemeProvider>
        </div>
      </section>

      {/* Theme Provider */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Using ThemeProvider</h2>
        
        <p className="text-gray-600 mb-4">
          Wrap your application with the ThemeProvider to apply themes to all Guru UI components.
        </p>
        
        <CodeExample code={themeProviderExample} language="jsx" />
      </section>

      {/* Built-in Themes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Built-in Themes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center mb-2">
              <Sun className="h-5 w-5 text-yellow-500 mr-2" />
              <h3 className="font-semibold">Light Theme</h3>
            </div>
            <p className="text-sm text-gray-600">Clean and bright for daytime use</p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg bg-gray-900 text-white">
            <div className="flex items-center mb-2">
              <Moon className="h-5 w-5 text-blue-400 mr-2" />
              <h3 className="font-semibold">Dark Theme</h3>
            </div>
            <p className="text-sm text-gray-300">Easy on the eyes for night work</p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg bg-blue-50">
            <div className="flex items-center mb-2">
              <div className="w-5 h-5 bg-blue-500 rounded mr-2"></div>
              <h3 className="font-semibold text-blue-900">Ocean Theme</h3>
            </div>
            <p className="text-sm text-blue-700">Calming blue tones</p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg bg-green-50">
            <div className="flex items-center mb-2">
              <div className="w-5 h-5 bg-green-500 rounded mr-2"></div>
              <h3 className="font-semibold text-green-900">Forest Theme</h3>
            </div>
            <p className="text-sm text-green-700">Natural green palette</p>
          </div>
        </div>
      </section>

      {/* Custom Themes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Custom Themes</h2>
        
        <p className="text-gray-600 mb-4">
          Create your own custom themes by defining color values for the theme object.
        </p>
        
        <CodeExample code={customThemeExample} language="jsx" />
      </section>

      {/* CSS Variables */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">CSS Variables</h2>
        
        <p className="text-gray-600 mb-4">
          You can also customize themes using CSS variables for more control.
        </p>
        
        <CodeExample code={cssVariablesExample} language="css" />
        
        <div className="mt-6 bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-4">Available CSS Variables</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-mono text-gray-800">--guru-accent</div>
              <div className="text-xs text-gray-600">Primary accent color</div>
            </div>
            <div>
              <div className="text-sm font-mono text-gray-800">--guru-background</div>
              <div className="text-xs text-gray-600">Background color</div>
            </div>
            <div>
              <div className="text-sm font-mono text-gray-800">--guru-heading</div>
              <div className="text-xs text-gray-600">Heading text color</div>
            </div>
            <div>
              <div className="text-sm font-mono text-gray-800">--guru-body</div>
              <div className="text-xs text-gray-600">Body text color</div>
            </div>
            <div>
              <div className="text-sm font-mono text-gray-800">--guru-muted</div>
              <div className="text-xs text-gray-600">Muted/subtle color</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Theming */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Dynamic Theming</h2>
        
        <Alert variant="info" className="mb-4">
          <Sparkles className="h-4 w-4" />
          Pro tip: You can change themes dynamically by updating the ThemeProvider's theme prop.
        </Alert>
        
        <p className="text-gray-600">
          Build theme switchers, respect user preferences, or change themes based on time of day. 
          The ThemeProvider will automatically update all components when the theme changes.
        </p>
      </section>
    </div>
  )
}
