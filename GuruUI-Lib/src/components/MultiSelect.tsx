import * as React from 'react'
import { cn } from '../utils/cn'
import { ChevronDown, X, Check } from 'lucide-react'
import { Tag } from './Tag'

export type MultiSelectOption = {
  value: string
  label: string
  disabled?: boolean
}

export type MultiSelectProps = {
  options: MultiSelectOption[]
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const MultiSelect: React.FC<MultiSelectProps> = ({ 
  options, 
  value, 
  onChange, 
  placeholder = 'Select options...',
  disabled = false,
  size = 'md',
  className = '' 
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [searchTerm, setSearchTerm] = React.useState('')
  const containerRef = React.useRef<HTMLDivElement>(null)

  const sizes = {
    sm: 'min-h-8 px-2 py-1 text-sm',
    md: 'min-h-10 px-3 py-2 text-base',
    lg: 'min-h-12 px-4 py-3 text-lg'
  }

  const filteredOptions = options.filter(option => 
    option.label.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !value.includes(option.value)
  )

  const selectedOptions = options.filter(option => value.includes(option.value))

  const handleToggle = (optionValue: string) => {
    if (disabled) return
    
    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue]
    
    onChange(newValue)
  }

  const handleRemove = (optionValue: string) => {
    if (disabled) return
    onChange(value.filter(v => v !== optionValue))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && filteredOptions.length > 0) {
      e.preventDefault()
      handleToggle(filteredOptions[0]?.value || '')
      setSearchTerm('')
    } else if (e.key === 'Escape') {
      setIsOpen(false)
      setSearchTerm('')
    }
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchTerm('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <div
        className={cn(
          'border border-white/10 bg-white/5 rounded-md cursor-pointer transition-colors focus-within:ring-2 focus-within:ring-[color:var(--guru-accent,#ffffff)]/60',
          sizes[size],
          disabled && 'opacity-50 cursor-not-allowed',
          isOpen && 'ring-2 ring-[color:var(--guru-accent,#ffffff)]/60'
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="flex flex-wrap gap-1 items-center">
          {selectedOptions.length > 0 ? (
            selectedOptions.map(option => (
              <Tag
                key={option.value}
                variant="subtle"
                size={size === 'lg' ? 'md' : size === 'md' ? 'sm' : 'sm'}
                onRemove={() => handleRemove(option.value)}
              >
                {option.label}
              </Tag>
            ))
          ) : (
            <span className="text-[color:var(--guru-body,#b3b3b3)]">{placeholder}</span>
          )}
        </div>
        
        <ChevronDown 
          className={cn(
            'absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-[color:var(--guru-body,#b3b3b3)] transition-transform',
            isOpen && 'rotate-180'
          )} 
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-[#0f0f0f] border border-white/10 rounded-md shadow-lg max-h-60 overflow-auto">
          <div className="p-2 border-b border-white/10">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search options..."
              className="w-full px-2 py-1 text-sm bg-white/5 border border-white/10 rounded text-[color:var(--guru-heading,#ffffff)] placeholder-[color:var(--guru-body,#b3b3b3)] focus:outline-none focus:ring-2 focus:ring-[color:var(--guru-accent,#ffffff)]/60"
              autoFocus
            />
          </div>
          
          <div className="max-h-48 overflow-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map(option => (
                <div
                  key={option.value}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white/5 transition-colors',
                    option.disabled && 'opacity-50 cursor-not-allowed'
                  )}
                  onClick={() => !option.disabled && handleToggle(option.value)}
                >
                  <div className="w-4 h-4 border border-white/20 rounded flex items-center justify-center">
                    {value.includes(option.value) && (
                      <Check className="h-3 w-3 text-[color:var(--guru-accent,#ffffff)]" />
                    )}
                  </div>
                  <span className="text-sm text-[color:var(--guru-heading,#ffffff)]">{option.label}</span>
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-[color:var(--guru-body,#b3b3b3)]">
                No options found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

MultiSelect.displayName = 'MultiSelect'
