import * as React from 'react'
import { cn } from '../utils/cn'
import { ChevronRight, ChevronDown, Folder, File } from 'lucide-react'

export type TreeNode = {
  id: string
  label: string
  children?: TreeNode[]
  icon?: React.ReactNode
  disabled?: boolean
}

export type TreeProps = {
  data: TreeNode[]
  expanded?: string[]
  onExpandedChange?: (expanded: string[]) => void
  selected?: string[]
  onSelectionChange?: (selected: string[]) => void
  multiSelect?: boolean
  className?: string
}

export const Tree: React.FC<TreeProps> = ({ 
  data, 
  expanded = [], 
  onExpandedChange,
  selected = [],
  onSelectionChange,
  multiSelect = false,
  className = '' 
}) => {
  const handleToggle = (nodeId: string) => {
    if (!onExpandedChange) return
    
    const newExpanded = expanded.includes(nodeId)
      ? expanded.filter(id => id !== nodeId)
      : [...expanded, nodeId]
    
    onExpandedChange(newExpanded)
  }

  const handleSelect = (nodeId: string) => {
    if (!onSelectionChange) return
    
    let newSelected: string[]
    if (multiSelect) {
      newSelected = selected.includes(nodeId)
        ? selected.filter(id => id !== nodeId)
        : [...selected, nodeId]
    } else {
      newSelected = [nodeId]
    }
    
    onSelectionChange(newSelected)
  }

  const renderNode = (node: TreeNode, level: number = 0): React.ReactNode => {
    const hasChildren = node.children && node.children.length > 0
    const isExpanded = expanded.includes(node.id)
    const isSelected = selected.includes(node.id)
    const isDisabled = node.disabled

    return (
      <div key={node.id} className="select-none">
        <div
          className={cn(
            'flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer transition-colors',
            isSelected && 'bg-[color:var(--guru-accent,#ffffff)]/20',
            !isDisabled && 'hover:bg-white/5',
            isDisabled && 'opacity-50 cursor-not-allowed'
          )}
          style={{ paddingLeft: `${level * 16 + 8}px` }}
        >
          {hasChildren && (
            <button
              onClick={() => handleToggle(node.id)}
              className="flex items-center justify-center w-4 h-4 hover:bg-white/10 rounded transition-colors"
              disabled={isDisabled}
            >
              {isExpanded ? (
                <ChevronDown className="h-3 w-3" />
              ) : (
                <ChevronRight className="h-3 w-3" />
              )}
            </button>
          )}
          
          {!hasChildren && <div className="w-4" />}
          
          {node.icon || (hasChildren ? <Folder className="h-4 w-4 text-blue-400" /> : <File className="h-4 w-4 text-gray-400" />)}
          
          <span
            className={cn(
              'flex-1 text-sm',
              isSelected && 'font-medium'
            )}
            onClick={() => !isDisabled && handleSelect(node.id)}
          >
            {node.label}
          </span>
        </div>
        
        {hasChildren && isExpanded && (
          <div>
            {node.children!.map(child => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={cn('w-full', className)}>
      {data.map(node => renderNode(node))}
    </div>
  )
}

Tree.displayName = 'Tree'
