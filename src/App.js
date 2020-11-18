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
  const [searchQuery, setSearchQuery] = useState([]) // test

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`)

        const query = await axios.get(`https://swapi.dev/api/people/?search=&page=${currentPage}`)
        // query.search = query.data.results
        // console.log(query.search)

        // test
        for (const filter of query.data.results) {
          setSearchQuery(query.data.results)
        }
        // console.log(query.data.results)
        // setCharacter(query.data.results)
        // new
        // const searchNames = await axios.get(`https://swapi.dev/api/people/?search=${search}`)
        // console.log(`searchNames.data.results${search}`)
        // console.log(search)
        // console.log(searchNames.data, `${search}`) // keep
        // setCharacter(searchNames.data.results.name)
        // setCharacter(search)

        for (const character of response.data.results) {
          setCharacter(response.data.results)
          const planet = await axios.get(character.homeworld)
          character.homeworld = planet.data.name
          const species = await axios.get(character.species)

          !species.data.name ? character.species = 'Human' : character.species = species.data.name

          // const searchNames = await axios.get(`https://swapi.dev/api/people/?search=${search}`)
          // console.log(searchNames.data, `${search}`) // keep
          // console.log(searchNames.data, `${name}`)
          // console.log(searchNames.data.results[0].name) // luke
          // console.log(typeof searchNames.data.results) // array of data
          // for (const query of searchNames.data.results) {
          //   // console.log(query.name) // list of names
          //   // console.log(character.name) // list of names
          //   if (query === search) {
          //     // console.log(true)
          //   }
          // }// console.log(search) // l

          // debugger
        }
        setLoading(false)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [currentPage])

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
          <SearchTable character={character} loading={loading} search={search} handleSearch={handleSearch} />
          <RenderTable character={character} loading={loading} search={search} handleSearch={handleSearch} searchQuery={searchQuery} />
          <UsePagination loading={loading} currentPage={currentPage} handlePageClick={handlePageClick} />
        </div>
      </div>
      <div className='vader' />
    </div>
  )
}

export default App
