import React from 'react'

type UseIsViewportProps = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export const useIsViewport = (dimension: UseIsViewportProps) => {
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', () => {
      updateWidth()
    })
    updateWidth()
  }, [])

  switch (dimension) {
    case 'sm':
      return width >= 640
    case 'md':
      return width >= 768
    case 'lg':
      return width >= 1024
    case 'xl':
      return width >= 1280
    case '2xl':
      return width >= 1536
    default:
      return false
  }
}
