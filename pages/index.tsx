import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'

const Home: NextPage = () => {
  return (
    <Layout title='Pokemons list'>
      <Button color='gradient'>Hello World</Button>
    </Layout>
  )
}

export default Home
