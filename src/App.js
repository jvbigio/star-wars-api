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
  // const [searchQuery, setSearchQuery] = useState([]) // test

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

  // pass that as a prop to SearchTable.js and call the function when the <form> is submitted (see screenshot 2).
  const executeSearch = (e) => {
    // set page number to 1
    // make http request to ap/people/?search={search-term-goes-here}
    // update state with result of the http request
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    setSearch(e.target.value)
    setSearchQuery(e.target.value)
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
