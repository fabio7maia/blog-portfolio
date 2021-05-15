import React from 'react'

type BoxProps = {
  as?: 'div' | 'section'
  row?: boolean
  className?: string
}

export const Box: React.FC<BoxProps> = ({
  as = 'div',
  className,
  row = false,
  children,
}) => {
  return React.createElement(
    as,
    {
      className: `flex ${row ? 'flex-row' : 'flex-col'} ${className}`,
    },
    children
  )
}
