import { useEffect } from "react"
import { useReactiveVar } from "@apollo/client"
import { searchQueryVar } from "src/stores"

function Search() {
  const searchQuery = useReactiveVar(searchQueryVar)

  useEffect(() => {

    return function cleanup() {
      searchQueryVar('')
    }
  }, [])

  return (
    <input
      type="search"
      name="search"
      id="search"
      placeholder='Search...'
      value={searchQuery}
      onChange={e => searchQueryVar(e.target.value)}
    />
  )
}

export default Search