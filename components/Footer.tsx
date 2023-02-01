import { Container, Text } from '@nextui-org/react'

const Footer = () => {
  return (
    <Container
      css={{
        padding: "20px 0",
        borderTop: "1px solid #eaeaea",
        textAlign: 'center'
      }}
    >
      <Text
        css={{

        }}
      > Martin Zaklasnik | {new Date().getFullYear()}</Text>
    </Container >
  )
}

export default Footer
