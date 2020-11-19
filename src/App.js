import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import RenderTable from './components/RenderTable'
import './RenderTable.css'
import SearchTable from './components/SearchTable'
import './SearchTable.css'
import Header from './components/Header'
import './Header.css'
import UsePagination from './components/UsePagination'
import './UsePagination.css'
import './intro.css'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [character, setCharacter] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`)

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
  }, [currentPage])

  const handleChange = e => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handlePageClick = e => {
    // e.preventDefault()
    // setCurrentPage(e.target.textContent)

    // if (e.target.parentElement.id === 'previous' && currentPage !== 1) {
    if (e.target.parentElement.id === 'previous') {
      console.log('previous clicked')
      setCurrentPage(activePage => activePage - 1)
      setCurrentPage(currentPage - 1)
    }
    // if (e.target.parentElement.id === 'next' && currentPage !== 9) {
    if (e.target.parentElement.id === 'next') {
      console.log('next clicked')
      setCurrentPage(activePage => activePage + 1)
      // setCurrentPage(currentPage + 1)
    }
    setCurrentPage(e.target.textContent)
    // debugger
  }

  return (
    <div>
      <Header />
      <div className='App galaxy-bg'>
        <div className='justify-content-center flex-sm-column'>
          <SearchTable loading={loading} search={search} handleChange={handleChange} />
          <RenderTable character={character} loading={loading} />
          <UsePagination loading={loading} currentPage={currentPage} handlePageClick={handlePageClick} />
        </div>
      </div>
      <div className='vader' />
    </div>
  )
}

export default App
