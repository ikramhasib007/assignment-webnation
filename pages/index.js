import Head from 'next/head'
import styles from '../styles/Home.module.css'

function HomePage() {
  return (
    <>
      <Head>
        <title>Assignment - WebNation</title>
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Yellow Pages</h1>
        </header>

        <section className={styles.searchContainer}>
          <input type="search" placeholder='search...' name="search" id="search" />
          <button type="button">Add</button>
        </section>
        
        <main className={styles.main}>
          <div className={styles.grid}>
            <a href="#" className={styles.card}>
              <h2>John Doe</h2>
              <p>E-mail: <span>ikramhasib007@gmail.com</span></p>
              <p>Phone: +12088034487</p>
            </a>
            <a href="#" className={styles.card}>
              <h2>John Doe</h2>
              <p>E-mail: <span>ikramhasib007@gmail.com</span></p>
              <p>Phone: +12088034487</p>
            </a>
            <a href="#" className={styles.card}>
              <h2>John Doe</h2>
              <p>E-mail: <span>ikramhasib007@gmail.com</span></p>
              <p>Phone: +12088034487</p>
            </a>

            <a href="#" className={styles.card}>
              <h2>John Doe</h2>
              <p>E-mail: <span>ikramhasib007@gmail.com</span></p>
              <p>Phone: +12088034487</p>
            </a>

            <a href="#" className={styles.card}>
              <h2>John Doe</h2>
              <p>E-mail: <span>ikramhasib007@gmail.com</span></p>
              <p>Phone: +12088034487</p>
            </a>
          </div>
        </main>
      </div>
    </>
  )
}

export default HomePage
