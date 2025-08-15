import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Button } from '@arnis-lv/guru-ui'

interface CodeExampleProps {
  code: string
  language: string
  title?: string
  showCopy?: boolean
}

export default function CodeExample({ 
  code, 
  language, 
  title, 
  showCopy = true 
}: CodeExampleProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="relative group">
      {title && (
        <div className="mb-2">
          <span className="text-sm font-medium text-gray-700">{title}</span>
        </div>
      )}
      
      <div className="relative rounded-lg bg-slate-900 p-4 overflow-x-auto">
        {showCopy && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-200 hover:bg-slate-800"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        )}
        
        <pre className="text-sm">
          <code className={`language-${language} text-slate-100`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}
