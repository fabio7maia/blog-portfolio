import { AppProps } from 'next/app'
import Head from 'next/head'
import Container from '../components/container'
import { NavBar } from '../components'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
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
