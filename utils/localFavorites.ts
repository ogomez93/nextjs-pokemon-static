import { FAVORITES_KEY } from '../constants'

const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]')
  if (favorites.includes(id)) {
    favorites = favorites.filter(pokeId => pokeId !== id)
  } else {
    favorites = [...favorites, id]
  }
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}

const defaultExport = {
  toggleFavorite
}
export default defaultExport
