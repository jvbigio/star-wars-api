import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import RenderTable from './components/RenderTable'
import SearchTable from './components/SearchTable'
import Header from './components/Header'
import UsePagination from './components/UsePagination'

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
        const characters = await processCharacterData(response.data.results)

        setCharacter(characters)
        setLoading(false)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [currentPage])

  const processCharacterData = async (characters) => {
    for (const character of characters) {
      const planetURL = character.homeworld.replace('http', 'https')
      const planet = await axios.get(planetURL)

      character.homeworld = planet.data.name

      const speciesURL = character.species.toString().replace('http', 'https')
      const species = await axios.get(speciesURL)
      !species.data.name ? character.species = 'Human' : character.species = species.data.name
    }
    return characters
  }

  const executeSearch = async (e) => {
    e.preventDefault()
    setLoading(true)
    setCurrentPage(1)
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?search=${search}`)
      const characters = await processCharacterData(response.data.results)
      setCharacter(characters)
      setLoading(false)
      setTimeout(() => window.location.reload(1), 5000)
    } catch (err) {
      console.error(err)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handlePageClick = e => {
    if ((e.target.id === 'next' && currentPage !== 9) || (e.target.parentElement.id === 'next' && currentPage !== 9)) {
      setCurrentPage(activePage => activePage + 1)
    } else if ((e.target.id === 'previous' && currentPage !== 1) || (e.target.parentElement.id === 'previous' && currentPage !== 1)) {
      setCurrentPage(activePage => activePage - 1)
    } else {
      setCurrentPage(parseInt(e.target.textContent))
    }
  }

  return (
    <div>
      <Header />
      <div className='App galaxy-bg'>
        <div className='justify-content-center flex-sm-column'>
          <SearchTable loading={loading} handleSearch={handleSearch} executeSearch={executeSearch} />
          <RenderTable character={character} loading={loading} />
          <UsePagination loading={loading} currentPage={currentPage} handlePageClick={handlePageClick} />
        </div>
      </div>
      <div className='vader' />
    </div>
  )
}

export default App
