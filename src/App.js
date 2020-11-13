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

const App = () => {
  const [loading, setLoading] = useState(false)
  const [character, setCharacter] = useState([])
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [search, setSearch] = useState('')
  const [homeworldName, sethomeworldName] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`)

        setCharacter(response.data.results)
        setLoading(false)
      } catch (err) {
        console.error(err)
      }
      try {
        for (let i = 0; i < character.length; i++) {
          const res = await axios.get(`https://swapi.dev/api/planets/?page=${page}`)
          console.log(res.data.results[i].residents)
          // console.log(character[i].homeworld)
          // console.log(character.homeworld)
          if (character[i].homeworld === res.data.results[i].residents) {
            console.log('found')
          }
          // sethomeworldName(res.data.results.residents)
          // console.log(homeworldName)
        }
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
          <RenderTable character={character} loading={loading} homeworldName={homeworldName} />
        </div>
        <div className='vader' />
      </div>
    </div>
  )
}

export default App
