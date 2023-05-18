import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import { CSSProperties } from 'react'

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
      <Text color='white' h2>P</Text>
      <Text color='white' h3>okemon</Text>

      <Spacer css={{ flex: 1 }} />

      <Text color='white'>Favorites</Text>
    </div>
  )
}
