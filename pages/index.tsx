import type { NextPage } from 'next'
import Head from 'next/head'
import { Card, Text, Navbar, Col, Grid } from "@nextui-org/react";

import Hero from './hero'
import { services } from '../data/services'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Martin Zaklasnik - Frontend Developer</title>
        <meta name="description" content="Martin Zaklasnik - Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav>
          <Navbar shouldHideOnScroll>
            <Navbar.Content hideIn="xs">
              <Navbar.Link href="#">Home</Navbar.Link>
              <Navbar.Link isActive href="#">Services</Navbar.Link>
              <Navbar.Link href="#">Portfolio</Navbar.Link>
              <Navbar.Link href="#">Hire me</Navbar.Link>
            </Navbar.Content>
          </Navbar>
        </nav>
        <Hero />
        <section
          className={styles.services}
        >
          <h2>How can I help you?</h2>
          <Grid.Container gap={2} justify="center">
            {
              services?.map((service, i) =>
                <Grid xs={4} key={i}>
                  <Card>
                    <Card.Header>
                      <Col>
                        <Text h4 color="white">
                          {service.title}
                        </Text>
                      </Col>
                    </Card.Header>
                    <Card.Image
                      src={service.img}
                      objectFit="cover"
                      width="100%"
                      height={140}
                      alt="Card image background"
                    />
                  </Card>
                </Grid>)
            }
          </Grid.Container>
        </section>
      </main>

      <footer className={styles.footer}>
        <span> Martin Zaklasnik | {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}

export default Home
