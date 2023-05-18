import { CSSProperties, FC } from 'react'

import Head from 'next/head'

import { Navbar } from '../ui'

interface Props {
  title?: string
}

const mainStyle: CSSProperties = {
  padding: '0 20px'
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name='author' content='Oswaldo Gomez' />
        <meta name='description' content={`Information about pokemon ${title}`} />
        <meta name='keywords' content={`pokemon, ${title}, pokedex`} />
      </Head>

      <Navbar />

      <main style={mainStyle}>
        { children }
      </main>
    </>
  )
}
