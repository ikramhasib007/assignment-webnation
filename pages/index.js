import Head from 'next/head'
import { useState } from 'react'
import Modal from '@/components/modal'
import CreateUser from '@/components/user/Create'
import styles from '@/styles/Home.module.css'
import Search from '@/components/Search'
import UserList from '@/src/components/user/UserList'

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
          <Search />
          <button
            className={styles.btn}
            type="button"
            onClick={() => setOpen(true)}
          >
            Add
          </button>
        </section>
        
        <main className={styles.main}>
          <UserList />
        </main>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Add new member"
      >
        <CreateUser
          onClose={() => setOpen(false)}
        />
      </Modal>
    </>
  )
}

export default HomePage
