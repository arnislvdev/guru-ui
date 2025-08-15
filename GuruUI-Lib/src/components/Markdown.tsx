import * as React from 'react'
import { cn } from '../utils/cn'

export type MarkdownProps = {
  content: string
  className?: string
}

export const Markdown: React.FC<MarkdownProps> = ({ 
  content, 
  className = '' 
}) => {
  const parseMarkdown = (text: string): React.ReactNode[] => {
    const lines = text.split('\n')
    const elements: React.ReactNode[] = []
    
    let inCodeBlock = false
    let codeBlockContent: string[] = []
    let codeBlockLanguage = ''
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      
      // Code block detection
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true
          codeBlockLanguage = line.slice(3).trim()
          codeBlockContent = []
        } else {
          inCodeBlock = false
          elements.push(
            <pre key={`code-${i}`} className="bg-[#0f0f0f] border border-white/10 rounded-lg p-4 overflow-x-auto">
              <code className={cn(
                'text-sm',
                codeBlockLanguage && `language-${codeBlockLanguage}`
              )}>
                {codeBlockContent.join('\n')}
              </code>
            </pre>
          )
          continue
        }
      }
      
      if (inCodeBlock) {
        codeBlockContent.push(line)
        continue
      }
      
      // Headings
      if (line.startsWith('#')) {
        const level = line.match(/^#+/)?.[0].length || 1
        const text = line.replace(/^#+\s*/, '')
        const Tag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements
        
        elements.push(
          <Tag 
            key={`heading-${i}`} 
            className={cn(
              'font-bold text-[color:var(--arnis-heading,#ffffff)] mb-2',
              level === 1 && 'text-3xl',
              level === 2 && 'text-2xl',
              level === 3 && 'text-xl',
              level === 4 && 'text-lg',
              level >= 5 && 'text-base'
            )}
          >
            {text}
          </Tag>
        )
        continue
      }
      
      // Bold and italic
      let processedLine = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code className="bg-white/10 px-1 py-0.5 rounded text-sm">$1</code>')
      
      // Links
      processedLine = processedLine.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" className="text-[color:var(--arnis-accent,#ffffff)] hover:underline">$1</a>')
      
      // Lists
      if (line.match(/^[\s]*[-*+]\s/)) {
        const text = line.replace(/^[\s]*[-*+]\s/, '')
        elements.push(
          <li key={`list-${i}`} className="ml-4 text-[color:var(--arnis-body,#b3b3b3)]">
            <span dangerouslySetInnerHTML={{ __html: processedLine.replace(/^[\s]*[-*+]\s/, '') }} />
          </li>
        )
        continue
      }
      
      // Numbered lists
      if (line.match(/^[\s]*\d+\.\s/)) {
        const text = line.replace(/^[\s]*\d+\.\s/, '')
        elements.push(
          <li key={`list-${i}`} className="ml-4 text-[color:var(--arnis-body,#b3b3b3)]">
            <span dangerouslySetInnerHTML={{ __html: processedLine.replace(/^[\s]*\d+\.\s/, '') }} />
          </li>
        )
        continue
      }
      
      // Blockquotes
      if (line.startsWith('>')) {
        const text = line.replace(/^>\s*/, '')
        elements.push(
          <blockquote 
            key={`quote-${i}`} 
            className="border-l-4 border-[color:var(--arnis-accent,#ffffff)] pl-4 italic text-[color:var(--arnis-body,#b3b3b3)] my-2"
          >
            {text}
          </blockquote>
        )
        continue
      }
      
      // Horizontal rules
      if (line.match(/^[-*_]{3,}$/)) {
        elements.push(
          <hr key={`hr-${i}`} className="border-white/10 my-4" />
        )
        continue
      }
      
      // Empty lines
      if (line.trim() === '') {
        elements.push(<br key={`br-${i}`} />)
        continue
      }
      
      // Regular paragraphs
      if (line.trim()) {
        elements.push(
          <p 
            key={`p-${i}`} 
            className="text-[color:var(--arnis-body,#b3b3b3)] mb-2 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: processedLine }}
          />
        )
      }
    }
    
    return elements
  }

  return (
    <div className={cn('prose prose-invert max-w-none', className)}>
      {parseMarkdown(content)}
    </div>
  )
}

Markdown.displayName = 'Markdown'
