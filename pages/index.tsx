import React from 'react'
import { useRouter } from 'next/router'

export const Home: React.FC = () => {
  const router = useRouter()

  React.useEffect(() => {
    router.push('/portfolio')
  }, [])

  return <></>
}

export default Home
