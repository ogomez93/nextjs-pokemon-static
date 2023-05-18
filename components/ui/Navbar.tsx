import { CSSProperties } from 'react'

import Image from 'next/image'
import NextLink from 'next/link'

import { Link, Spacer, Text, useTheme } from '@nextui-org/react'

const style: CSSProperties = {
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'start',
  padding: '0 20px',
  backgroundColor: 'red'
}

export const Navbar = () => {
  const { theme } = useTheme()

  return (
    <div style={{ ...style, backgroundColor: theme?.colors.gray900.value }}>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='Pokemon icon'
        width={70}
        height={70}
      />
      <NextLink href='/' passHref>
        <Link style={{ display: 'inherit' }}>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okemon</Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href='/favorites' passHref>
        <Link>
          <Text color='white'>Favorites</Text>
        </Link>
      </NextLink>
    </div>
  )
}
