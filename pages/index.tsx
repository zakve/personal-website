import type { NextPage } from 'next'
import Head from 'next/head'
import { Card, Text, Navbar, Col, Grid, Badge, Button, Spacer } from "@nextui-org/react";

import Hero from './hero'
import { services } from '../data/services'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer';
import Title from '../components/Title';
import ServiceCard from '../components/ServiceCard';

const Home: NextPage = () => {
  const scrollToLocation = (hash: string) => {
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Martin Zaklasnik - Frontend Developer</title>
        <meta name="description" content="Martin Zaklasnik - Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav>
          <Navbar>
            <Navbar.Content hideIn="xs">
              <Navbar.Link isActive href="#home" onPress={() => scrollToLocation('#home')}>Home</Navbar.Link>
              <Navbar.Link href="#services" onPress={() => scrollToLocation('#services')}>Services</Navbar.Link>
              <Navbar.Link href="#portfolio" onPress={() => scrollToLocation('#portfolio')}>Portfolio</Navbar.Link>
              <Navbar.Link href="#contact" onPress={() => scrollToLocation('#contact')}>Hire me</Navbar.Link>
            </Navbar.Content>
          </Navbar>
        </nav>
        <section id='#home'>
          <Hero />
        </section>
        <section id='#services'>
          <Title text="How can I help you?" />
          <Grid.Container gap={2} justify="center">
            {
              services?.map((service, i) =>
                <Grid xs={12} sm={4} key={i}>
                  <ServiceCard
                    title={service.title}
                    img={service.img}
                    description={service.description}
                    badges={service.badges}
                  />
                </Grid>)
            }
          </Grid.Container>
        </section>
        <section id='#portfolio'>
          <Title text="Portfolio" />
          <Grid.Container gap={2} justify="center">
          </Grid.Container>
        </section>
        <section id='#contact'>
          <Title text="Contact me" />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
