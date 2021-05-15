import React from 'react'

type TypographyProps = {
  as?: 'span' | 'label'
  className?: string
}

export const Typography: React.FC<TypographyProps> = ({
  as = 'span',
  className,
  children,
}) => {
  return React.createElement(
    as,
    {
      className,
    },
    children
  )
}
