import { Container, Image, Row, Spacer, Text } from '@nextui-org/react'
import type { NextPage } from 'next'

import martin from '../assets/images/martinzaklasnik.png'
import GithubLogo from '../assets/icons/github.png'
import LinkedInLogo from '../assets/icons/linkedin.png'

const ContactPage: NextPage = () => {
  return (
    <Container
      css={{
        textAlign: "center",
        my: 40
      }}
    >
      <Image
        width={100}
        height={100}
        src={martin.src}
        alt="profile picture"
        objectFit="cover"
      />
      <Text
        h4
        css={{
          color: "$primary",
        }}
      >
        Martin Zaklasnik
      </Text>
      <Container
        gap={0}
        css={{
          '@sm': {
            width: 300
          }
        }}
      >
        <Text blockquote>
          <a href='mailto:zaklas.martin@gmail.com'>zaklas.martin@gmail.com</a>
        </Text>
      </Container>
      <Spacer y={1} />
      <Row
        justify='center'
      >
        <a
          href="https://www.linkedin.com/in/zaklasnikm/"
          target="_blank"
        >
          <Image src={LinkedInLogo.src} width={24} height={24} />
        </a>
        <Spacer x={1} />
        <a
          href="https://github.com/zakve"
          target="_blank"
        >
          <Image src={GithubLogo.src} width={24} height={24} />
        </a>
      </Row>
    </Container>
  )
}

export default ContactPage
