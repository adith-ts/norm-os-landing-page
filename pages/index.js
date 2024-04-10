// pages/index.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Norm OS</title>
        <meta name="description" content="Norm OS - A sleek Arch Linux-based operating system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContent}>
        <h1 className={styles.title}>
          Welcome to Norm OS
        </h1>

        <p className={styles.description}>
          A sleek Arch Linux-based operating system
        </p>

        <div className={styles.grid}>
          <a href="/download" className={styles.card}>
            <h3>Download &rarr;</h3>
            <p>Get the latest version of Norm OS</p>
          </a>


          <a
            href="https://github.com/adith-ts/norm-os"
            className={styles.card}
          >
            <h3>GitHub &rarr;</h3>
            <p>Find us on GitHub</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <p>Norm OS - Made with ❤️ </p>
      </footer>
    </div>
  )
}

