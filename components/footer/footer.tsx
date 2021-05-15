import { Box } from '../box'
import { Typography } from '../typography'

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <Box className="bg-gray-200 w-full items-center mt-10 py-2">
      <a href="https://github.com/fabio7maia" target="_blank" rel="noreferrer">
        <img
          src="https://img.icons8.com/windows/96/000000/github.png"
          className="w-10"
          alt="github"
        />
      </a>
      <Typography className="text-black text-center font-bold py-2">
        Construído usando Tailwind CSS @ {year}
      </Typography>
    </Box>
  )
}
