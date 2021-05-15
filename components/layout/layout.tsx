import { Box } from '../box'
import { Footer } from '../footer'
import { Meta } from '../meta'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <Box className="dark:bg-gray-700 dark:text-white min-h-screen">
        <main>{children}</main>
        <Footer />
      </Box>
    </>
  )
}
