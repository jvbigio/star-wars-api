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

const App = () => {
  const [loading, setLoading] = useState(false)
  const [character, setCharacter] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')

  const processCharacterData = async (characters) => {
    for (const character of characters) {
      const planet = await axios.get(character.homeworld)
      character.homeworld = planet.data.name
      const species = await axios.get(character.species)

      !species.data.name ? character.species = 'Human' : character.species = species.data.name
    }
    return characters
  }

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

  const executeSearch = async (e) => {
    e.preventDefault()
    setLoading(true)
    setCurrentPage(1)
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?search=${search}`)
      const characters = await processCharacterData(response.data.results)
      setCharacter(characters)
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handlePageClick = (e) => {
    e.preventDefault()
    setCurrentPage(e.target.textContent)
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
