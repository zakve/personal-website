import { Button, Col, Image, Grid, Row, Spacer, Text } from '@nextui-org/react'
import type { NextPage } from 'next'

import { scrollToContact } from "../utils/utils";
import React from '../assets/icons/react.png';
import Typescript from '../assets/icons/typescript.jpg'
import Figma from '../assets/icons/figma.png'
import Photoshop from '../assets/icons/ps.png'

const HeroPage: NextPage = () => {
  return (
    <Grid.Container
      gap={2}
      justify="center"
      css={{
        py: 100,
        // background: `url(${Bg.src})`,
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        mt: 20
      }}
    >
      <Grid xs={12} sm={6}>
        <Row>
          <Col>
            <Text
              h1
              size={60}
              css={{
                textGradient: "45deg, $pink600 -20%, $blue600 50%",
              }}
            >
              Hi, I'm Martin
            </Text>
            <Text h2>
              I am a creative person with over 7 years of design and programming experience who enjoys discovering and learning new things.
            </Text>
            <Spacer y={1} />
            <Row align='center'>
              <Image
                width={48}
                src={React.src}
                alt='React'
                containerCss={{ mx: 20 }}
              />
              <Image
                width={48}
                src={Typescript.src}
                alt='Typescript'
                containerCss={{ mx: 20 }}
              />
              <Image
                width={48}
                src={Figma.src}
                alt='Figma'
                containerCss={{ mx: 20 }}
              />
              <Image
                width={48}
                src={Photoshop.src}
                alt='Photoshop'
                containerCss={{ mx: 20 }}
              />
            </Row>
            <Spacer y={3} />
            <Button
              auto
              color="gradient"
              size="lg"
              onPress={scrollToContact}
            >
              CONTACT ME
            </Button>
          </Col>
        </Row>
      </Grid >
      {/* <Grid xs={0} sm={6}>
        <Image src={Martin.src} height={400} />
      </Grid> */}
    </Grid.Container >
  )
}

export default HeroPage
