import Head from 'next/head'
import { useState } from 'react'
import { useQuery, useReactiveVar } from '@apollo/client'
import Modal from 'components/Modal'
import UserForm from 'components/UserForm'
import styles from 'styles/Home.module.css'
import { GET_USERS } from 'src/operations/user'
import { searchQueryVar } from 'src/stores'

function HomePage() {
  const [open, setOpen] = useState(false)
  const searchQuery = useReactiveVar(searchQueryVar)
  const { data, loading } = useQuery(GET_USERS, {
    variables: { query: searchQuery }
  })
  // console.log('[Users] data, loading: ', data, loading);
  
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
            placeholder='Search...'
          />
          <button
            className={styles.btn}
            type="button"
            onClick={() => setOpen(true)}
          >
            Add
          </button>
        </section>
        
        <main className={styles.main}>
          {loading ? 'Loading...' : <>
            <div className={styles.grid}>
              {data.users.map(item => (
                <a key={item.id} href="#" className={styles.card}>
                  <h2>{item.name}</h2>
                  <p>E-mail: <span>{item.email}</span></p>
                  <p>Phone: <span>{item.phone}</span></p>
                </a>
              ))}
            </div>
          </>}
        </main>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Add new member"
      >
        <UserForm
          onCancel={() => setOpen(false)}
        />
      </Modal>
    </>
  )
}

export default HomePage
