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
  const [planet, setPlanets] = useState([]) // test
  const [species, setSpecies] = useState([]) // test
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

  const executeSearch = async (e) => {
    e.preventDefault()
    setCurrentPage(1)
    try {
      const res = await axios.get(`https://swapi.dev/api/people/?search=${search}`)
      for (const query of res.data.results) {
        const homeworld = await axios.get(query.homeworld)
        query.homeworld = homeworld.data.name
        const race = await axios.get(query.species)
        !race.data.name ? query.species = 'Human' : query.species = race.data.name
      }
      setCharacter(res.data.results)
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

  // for intro theme
  // const handleButtonClick = () => {
  //   console.log('clicked')
  // }

  return (
    <div>
      {/* <Header handleButtonClick={handleButtonClick} /> */}
      <Header />
      <div className='App galaxy-bg'>
        <div className='justify-content-center flex-sm-column'>
          <SearchTable character={character} loading={loading} search={search} handleSearch={handleSearch} executeSearch={executeSearch} />
          <RenderTable character={character} loading={loading} search={search} handleSearch={handleSearch} />
          <UsePagination loading={loading} currentPage={currentPage} handlePageClick={handlePageClick} />
        </div>
      </div>
      <div className='vader' />
    </div>
  )
}

export default App
