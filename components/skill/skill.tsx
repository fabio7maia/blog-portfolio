import { Box } from '../box'
import { Typography } from '../typography'

export type SkillProps = {
  children: string
  color: string
  image: string
  percent: '50' | '75' | '90' | '100'
  yearStart: number
  yearEnd?: number
}

export const Skill: React.FC<SkillProps> = ({
  children,
  color,
  image,
  percent,
}) => {
  let width = 'w-full'

  switch (percent) {
    case '50':
      width = 'w-1/2'
      break
    case '75':
      width = 'w-3/4'
      break
      break
    case '90':
      width = 'w-11/12'
      break
    default:
      width = 'w-full'
  }

  return (
    <Box row className="w-full my-1 relative">
      <Box className="mx-2 items-center">
        <img src={image} className="w-16 h-16" alt={children} />
      </Box>
      <Box className="w-full">
        <Typography className="text-center mb-1">{children}</Typography>
        <Box
          className={`w-full overflow-hidden h-2 text-xs flex rounded bg-${color}-200`}
        >
          <Box
            className={`${width} shadow-none h-2 flex flex-col text-center whitespace-nowrap text-white justify-center bg-${color}-500 animate-shim`}
          />
        </Box>
      </Box>
    </Box>
  )
}
