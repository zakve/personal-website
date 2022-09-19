import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Card, Row, Text, Navbar, Image } from "@nextui-org/react";

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
            <Navbar.Link isActive href="#">What can I help with</Navbar.Link>
            <Navbar.Link href="#">Portfolio</Navbar.Link>
            <Navbar.Link href="#">Hire me</Navbar.Link>
          </Navbar.Content>
        </Navbar>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
