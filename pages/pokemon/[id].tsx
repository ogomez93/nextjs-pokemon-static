import { useRouter } from 'next/router'

import { Layout } from '../../components/layouts'

export const PokemonPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout title='Some pokemon'>
      <div>PokemonPage - id: {id}</div>
    </Layout>
  )
}

export default PokemonPage
