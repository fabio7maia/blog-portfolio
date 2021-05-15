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
      <Box className="min-h-screen">
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  )
}
