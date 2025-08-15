import * as React from 'react'
import { AvatarCore, type AvatarCoreOptions } from '../core/AvatarCore'

export type AvatarProps = AvatarCoreOptions & {
  src?: string
  name?: string
  fallback?: string
}

export const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  name = '', 
  fallback,
  size = 'md',
  shape = 'circle',
  status,
  ring = false,
  ringColor = 'accent'
}) => {
  const avatarOptions = { size, shape, status: status || 'online', ring, ringColor }
  const accessibilityProps = AvatarCore.getAccessibilityProps(avatarOptions)
  
  const initials = name
    .split(' ')
    .filter(Boolean)
    .map((s) => s[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div
      className={AvatarCore.getClasses(avatarOptions)}
      {...(accessibilityProps as React.HTMLAttributes<HTMLDivElement>)}
      aria-label={name}
    >
      {src ? (
        <img 
          src={src} 
          alt={name} 
          className={AvatarCore.getImageClasses(avatarOptions)} 
        />
      ) : (
        <div className={AvatarCore.getFallbackClasses(avatarOptions)}>
          <span className="text-xs font-semibold">{fallback || initials || '?'}</span>
        </div>
      )}
      {status && (
        <span className={AvatarCore.getStatusClasses(avatarOptions)} />
      )}
    </div>
  )
}


