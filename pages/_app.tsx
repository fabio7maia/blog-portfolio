import { AppProps } from 'next/app'
import Head from 'next/head'
import { Container, Layout, NavBar } from '@components'
import { CMS_NAME } from '../lib/constants'
import '../styles/index.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>Fábio Maia blog and portfolio with {CMS_NAME}</title>
      </Head>
      <NavBar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </Layout>
  )
}

export default App
