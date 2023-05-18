import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Layout } from '../../components/layouts'
import { pokeApi } from '../../api'
import { Pokemon } from '../../interfaces'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title='Some pokemon'>
      <div>{ pokemon.name }</div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((_value, index) => `${index + 1}`)

  return {
    paths: pokemons151.map(id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage
