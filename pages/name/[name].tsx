import { GetStaticPaths, GetStaticProps } from 'next'

import { pokeApi } from '../../api'
import { PokemonListResponse } from '../../interfaces'
import { getPokemonInfo } from '../../utils'

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
  
  return {
    props: {
      pokemon: await getPokemonInfo(name)
    }
  }
}

export default PokemonPage
