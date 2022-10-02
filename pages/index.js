import Head from 'next/head'
import { useState } from 'react'
import Modal from '../src/components/Modal'
import styles from '../styles/Home.module.css'

function HomePage() {
  const [open, setOpen] = useState(false)
  
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
          <input
            type="search"
            name="search"
            id="search"
            placeholder='search...'
          />
          <button
            type="button"
            onClick={() => setOpen(true)}
          >
            Add
          </button>
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

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, veniam.</p>
      </Modal>
    </>
  )
}

export default HomePage
