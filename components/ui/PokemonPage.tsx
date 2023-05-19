import { useState } from 'react'

import { NextPage } from 'next'

import { Button, Card, Container, Grid, Text } from '@nextui-org/react'

import confetti from 'canvas-confetti'

import { Layout } from '../../components/layouts'
import { PokemonSprite } from '../../components/pokemons'
import { Pokemon } from '../../interfaces'
import { localFavorites } from '../../utils'

interface Props {
  pokemon: Pokemon
}

export const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existsInFavorites(pokemon.id))

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)
    if (isInFavorites) return

    confetti({
      zIndex: 999,
      particleCount: 200,
      spread: 160,
      angle: -100,
      origin: { x: 1, y: 0 }
    })
  }

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{ pokemon.name }</Text>

              <Button color='gradient' ghost={!isInFavorites} onClick={onToggleFavorite}>
                { isInFavorites ? 'Remove from favorites' : 'Save as favorite' }
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display='flex' direction='row'>
                <PokemonSprite pokemon={pokemon} imgKey='front_default' />
                <PokemonSprite pokemon={pokemon} imgKey='back_default' />
                <PokemonSprite pokemon={pokemon} imgKey='front_shiny' />
                <PokemonSprite pokemon={pokemon} imgKey='back_shiny' />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}
