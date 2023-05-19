import { FC, useEffect, useState } from 'react'

import { Layout } from '../../components/layouts'
import { FavoritePokemons, NoFavorites } from '../../components/ui'

import { localFavorites } from '../../utils'

const Favorites: FC = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])
  

  return (
    <Layout title='Favorite pokemons'>
      { favoritePokemons.length === 0
          ? <NoFavorites />
          : <FavoritePokemons pokemons={favoritePokemons} />
      }
    </Layout>
  )
}

export default Favorites