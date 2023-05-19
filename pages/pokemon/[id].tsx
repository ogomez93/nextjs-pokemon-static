import { GetStaticPaths, GetStaticProps } from 'next'

import { getPokemonInfo } from '../../utils'
import { PokemonPage } from '../../components/ui'

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((_value, index) => `${index + 1}`)

  return {
    paths: pokemons151.map(id => ({
      params: { id }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  const pokemon = await getPokemonInfo(id)
  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon
    },
    revalidate: 86400
  }
}

export default PokemonPage
