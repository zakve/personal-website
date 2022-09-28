import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Card, Row, Text, Navbar, Image } from "@nextui-org/react";

import Hero from './hero'
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
        <Navbar shouldHideOnScroll>
          <Navbar.Content hideIn="xs">
            <Navbar.Link href="#">Home</Navbar.Link>
            <Navbar.Link isActive href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Portfolio</Navbar.Link>
            <Navbar.Link href="#">Hire me</Navbar.Link>
          </Navbar.Content>
        </Navbar>
        <Hero />
        <section
          className={styles.services}
        >
          <h2>Services</h2>
        </section>
      </main>

      <footer className={styles.footer}>
        <span> Martin Zaklasnik | {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}

export default Home
