/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Table from './components/Table'
import SearchTable from './components/SearchTable'
import Header from './components/Header'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [character, setCharacter] = useState([])

  // async/await using useEffect
  useEffect(() => {
    // setLoading(true)

    const fetchItems = async () => {
      setLoading(true)
      const response = await axios.get('https://swapi.dev/api/people/1')

      setCharacter(response.data)
      setLoading(false)
    }

    fetchItems()
  }, []) // empty array for when component mounts for first time only and wont run again

  const text = loading ? 'loading...' : character.name

  return (
    <div>
      <Header />
      <div className='App galaxy-bg'>
        <Table text={text} />
        <div className='vader' />
      </div>
    </div>
  )
}

export default App
