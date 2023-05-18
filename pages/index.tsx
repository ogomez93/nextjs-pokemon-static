import { NextPage, GetStaticProps } from 'next'

import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { PokemonList } from '../components/pokemons';

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Pokemons list'>
      <PokemonList pokemons={pokemons} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => {
    const id = i + 1
    return {
      ...pokemon,
      id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    }
  })

  return {
    props: {
      pokemons
    }
  }
}

export default Home
