import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Layout } from '../../components/layouts'
import { pokeApi } from '../../api'
import { Pokemon } from '../../interfaces'
import { Button, Card, Container, Grid, Text } from '@nextui-org/react'
import { PokemonSprite } from '../../components/pokemons'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
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

              <Button color='gradient' ghost>
                Save as favorite
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
