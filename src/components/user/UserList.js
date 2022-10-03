import { GET_USERS } from "@/src/operations/user"
import { searchQueryVar } from "@/src/stores"
import { useQuery, useReactiveVar } from "@apollo/client"
import styles from '@/styles/UserList.module.css'

function UserList() {
  const searchQuery = useReactiveVar(searchQueryVar)
  const { data, loading } = useQuery(GET_USERS, {
    variables: { query: searchQuery }
  })

  if (loading) return <span>Loading...</span>

  if (!data?.users.length) return <span>No data</span>

  return (
    <div className={styles.grid}>
      {data.users.map(item => (
        <a key={item.id} href="#" className={styles.card}>
          <h2>{item.name}</h2>
          <p>E-mail: <span>{item.email}</span></p>
          <p>Phone: <span>{item.phone}</span></p>
        </a>
      ))}
    </div>
  )
}

export default UserList