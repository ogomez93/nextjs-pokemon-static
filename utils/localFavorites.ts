import { FAVORITES_KEY } from '../constants'

const pokemons = (): number[] =>
  JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]')

const toggleFavorite = (id: number) => {
  let favorites: number[] = pokemons()
  if (favorites.includes(id)) {
    favorites = favorites.filter(pokeId => pokeId !== id)
  } else {
    favorites = [...favorites, id]
  }
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}

const existsInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false
  const favorites: number[] = pokemons()
  return favorites.includes(id)
}

const defaultExport = {
  pokemons,
  toggleFavorite,
  existsInFavorites
}
export default defaultExport
