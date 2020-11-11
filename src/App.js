/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import RenderTable from './components/RenderTable'
// import SearchTable from './components/SearchTable'
import Header from './components/Header'
// import UsePagination from './components/UsePagination'
// import Pagination from 'react-bootstrap/Pagination'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [character, setCharacter] = useState([])
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
  return (
    <div>
      <Header />
      <div className='App galaxy-bg'>
        <RenderTable character={character} loading={loading} />
        <div className='vader' />
      </div>
    </div>
  )
}

export default App
