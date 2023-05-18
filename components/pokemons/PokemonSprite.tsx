import { FC } from 'react'

import { Image } from '@nextui-org/react'

import { Pokemon } from '../../interfaces'

interface ImageProps {
  pokemon: Pokemon
  imgKey: 'front_default' | 'back_default' | 'front_shiny' | 'back_shiny'
}

export const PokemonSprite: FC<ImageProps> = ({ pokemon, imgKey }) => (
  <Image
    src={pokemon.sprites[imgKey]}
    alt={pokemon.name}
    width={100}
    height={100}
  />
)
