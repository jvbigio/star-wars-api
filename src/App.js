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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`)

        // new
        const searchNames = await axios.get(`https://swapi.dev/api/people/?search=${search}`)
        // console.log(`searchNames.data.results${search}`)
        // console.log(search)
        console.log(searchNames.data, `${search}`)
        // setCharacter(searchNames.data.results.name)
        // setCharacter(search)

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
  }, [currentPage, search])

  const handleSearch = async (e) => {
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
          <SearchTable character={character} loading={loading} search={search} handleSearch={handleSearch} />
          <RenderTable character={character} loading={loading} search={search} handleSearch={handleSearch} />
          <UsePagination loading={loading} currentPage={currentPage} handlePageClick={handlePageClick} />
        </div>
      </div>
      <div className='vader' />
    </div>
  )
}

export default App
