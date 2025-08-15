import * as React from 'react'

export type SeparatorProps = React.HTMLAttributes<HTMLHRElement>

export const Separator: React.FC<SeparatorProps> = ({ className = '', ...props }) => (
  <hr className={`my-6 border-white/10 ${className}`.trim()} {...props} />
)


