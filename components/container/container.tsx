import { Box } from '..'
import { useIsViewport } from '@hooks'

export const Container: React.FC = ({ children }) => {
  const isMobileViewport = !useIsViewport('md')

  return (
    <Box className={`container mx-auto ${isMobileViewport ? 'px-5' : 'px-10'}`}>
      {children}
    </Box>
  )
}
