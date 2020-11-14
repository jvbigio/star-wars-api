import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import RenderTable from './components/RenderTable'
import './RenderTable.css'
import SearchTable from './components/SearchTable'
import './SearchTable.css'
import Header from './components/Header'
import './Header.css'
// import UsePagination from './components/UsePagination'
// import Pagination from 'react-bootstrap/Pagination'
// /* eslint-disable no-debugger */
const App = () => {
  const [loading, setLoading] = useState(false)
  const [character, setCharacter] = useState([])
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [search, setSearch] = useState('')
  // const [homeworldName, sethomeworldName] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`)

        for (const character of response.data.results) {
          setCharacter(response.data.results)
          const planet = await axios.get(character.homeworld)
          character.homeworld = planet.data.name
          const species = await axios.get(character.species)

          !species.data.name ? character.species = 'Human' : character.species = species.data.name
        }
        setLoading(false)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
    // empty array for when component mounts for first time only and wont run again
  }, [page])

  const handleChange = e => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  return (
    <div>
      <Header />
      <div className='App galaxy-bg'>
        <div className='d-flex justify-content-center flex-sm-column'>
          <SearchTable loading={loading} search={search} handleChange={handleChange} />
          <RenderTable character={character} loading={loading} />
        </div>
        <div className='vader' />
      </div>
    </div>
  )
}

export default App
