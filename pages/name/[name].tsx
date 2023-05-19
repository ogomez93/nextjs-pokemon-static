import { GetStaticPaths, GetStaticProps } from 'next'

import { pokeApi } from '../../api'
import { Pokemon, PokemonListResponse } from '../../interfaces'

import { PokemonPage } from '../../components/ui'

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const names: string[] = data.results.map(({ name }) => name)

  return {
    paths: names.map(name => ({
      params: { name }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`)

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage
