import * as React from 'react'
import { cn } from '../utils/cn'

export type UploadProps = {
  onFiles?: (files: File[]) => void
  accept?: string
  multiple?: boolean
  className?: string
  label?: React.ReactNode
}

export const Upload: React.FC<UploadProps> = ({ onFiles, accept, multiple = true, className = '', label = 'Drag & drop files or click to upload' }) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [dragOver, setDragOver] = React.useState(false)

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
    const files = Array.from(e.dataTransfer.files)
    if (files.length) onFiles?.(files)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? [])
    if (files.length) onFiles?.(files)
  }

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
      onDragLeave={() => setDragOver(false)}
      onDrop={onDrop}
      onClick={() => inputRef.current?.click()}
      className={cn('cursor-pointer rounded-lg border border-dashed border-white/15 bg-white/5 px-6 py-10 text-center hover:bg-white/10', dragOver && 'bg-white/10', className)}
    >
      <div className="text-[color:var(--arnis-heading,#ffffff)]">{label}</div>
      <div className="mt-1 text-sm text-[color:var(--arnis-body,#b3b3b3)]">{accept ? `Accepted: ${accept}` : 'Any file'}</div>
      <input ref={inputRef} type="file" accept={accept} multiple={multiple} className="hidden" onChange={onChange} />
    </div>
  )
}

Upload.displayName = 'Upload'


