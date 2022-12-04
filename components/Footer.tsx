import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span> Martin Zaklasnik | {new Date().getFullYear()}</span>
    </footer>
  )
}

export default Footer
