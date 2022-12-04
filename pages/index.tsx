import type { NextPage } from 'next'
import Head from 'next/head'
import { Card, Text, Navbar, Col, Grid, Badge, Button, Spacer } from "@nextui-org/react";

import Hero from './hero'
import { services } from '../data/services'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer';
import Title from '../components/Title';
import ListItem from '../components/ListItem';

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
          <Title text="How can I help you?" />
          <Grid.Container gap={2} justify="center">
            {
              services?.map((service, i) =>
                <Grid xs={12} sm={4} key={i}>
                  <Card>
                    <Card.Header>
                      <Col>
                        <Text h4>
                          {service.title}
                        </Text>
                      </Col>
                    </Card.Header>
                    <Card.Image
                      src={service.img}
                      objectFit="cover"
                      width="100%"
                      height={240}
                      alt="Service image background"
                    />
                    <Card.Footer
                    // isBlurred
                    // css={{
                    //   position: "absolute",
                    //   bgBlur: "#ffffff66",
                    //   borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    //   bottom: 0,
                    //   zIndex: 1,
                    // }}
                    >
                      <Col>
                        <ul>
                          {
                            service.description?.map((point, i) => <ListItem key={i} text={point} />)
                          }
                        </ul>
                        <Spacer y={1} />
                        <div>
                          {
                            service.badges?.map((badge, i) => <Badge key={i} color="primary" variant="flat">{badge}</Badge>)
                          }
                        </div>
                        <Spacer y={1} />
                        <Button auto ghost color="gradient" size="lg" css={{ margin: 'auto', width: "100%" }}>
                          <Text
                            transform="uppercase"
                          >
                            portfolio
                          </Text>
                        </Button>
                      </Col>
                    </Card.Footer>
                  </Card>
                </Grid>)
            }
          </Grid.Container>
        </section>
        <section>

        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
