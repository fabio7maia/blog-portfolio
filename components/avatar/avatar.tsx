import { Box } from '../box'
import { Typography } from '../typography'
import { useIsViewport } from '@hooks'

type AvatarProps = {
  className?: string
  image: string
  name: React.ReactNode
  position: React.ReactNode
}

export const Avatar: React.FC<AvatarProps> = ({
  className,
  children,
  image,
  name,
  position,
}) => {
  const isMobileViewport = !useIsViewport('md')

  return (
    <Box row={!isMobileViewport} className={`items-center ${className}`}>
      <Box className="w-auto h-full justify-center items-center">
        <img src={image} className="md:w-60 w-32 rounded-full" alt="avatar" />
      </Box>
      <Box className={isMobileViewport ? 'mt-4' : 'ml-4'}>
        <Typography
          className={`${isMobileViewport && 'text-center'} text-xl font-bold`}
        >
          {name}
        </Typography>
        <Typography className={`${isMobileViewport && 'text-center'} text-xs`}>
          {position}
        </Typography>
        <Box className="mt-4">{children}</Box>
      </Box>
    </Box>
  )
}
