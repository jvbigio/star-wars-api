/* eslint-disable no-undef */
<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Table from './components/Table'
import SearchTable from './components/SearchTable'
=======
import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import RenderTable from './components/RenderTable'
import './RenderTable.css'
import SearchTable from './components/SearchTable'
import './SearchTable.css'
>>>>>>> table
import Header from './components/Header'
import './Header.css'
// import UsePagination from './components/UsePagination'
// import Pagination from 'react-bootstrap/Pagination'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [character, setCharacter] = useState([])
<<<<<<< HEAD

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true)
      const response = await axios.get('https://swapi.dev/api/people/1')

      setCharacter(response.data)
      setLoading(false)
    }

    fetchItems()
  }, []) // empty array for when component mounts for first time only and wont run again

  const text = loading ? 'loading...' : character.name

=======
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`)

        // console.log(`People: ${Object.entries(response.data.results).length}`) // 10
        setCharacter(response.data.results) // throwing error
        setLoading(false)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
    // empty array for when component mounts for first time only and wont run again
  }, [page])

  // const renderCharacter = loading ? 'loading...' : character
>>>>>>> table
  return (
    <div>
      <Header />
      <div className='App galaxy-bg'>
<<<<<<< HEAD
        <Table text={text} />
=======
        <SearchTable />
        <RenderTable character={character} loading={loading} />
>>>>>>> table
        <div className='vader' />
      </div>
    </div>
  )
}

export default App
