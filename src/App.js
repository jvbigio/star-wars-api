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
    const fetchItems = async () => {
      setLoading(true)
      const response = await axios.get('https://swapi.dev/api/people/1')

      setCharacter(response.data)
      // setLoading(false)
    }
    // console.log(loading)

    fetchItems()
  })

  // async componentDidMount () {
  //   this.setState({ loading: true })
  //   // works, but figure how to grab ALL data and place in object
  //   const response = await axios.get('https://swapi.dev/api/people/1')
  //   // const response = await axios.get('https://swapi.dev/api/')

  //   // const data = response.data.data <-- equivalent to:
  //   // const { data } = response.data // keep
  //   // const name = response.data.name:
  //   const { name } = response.data
  //   this.setState({
  //     loading: false,
  //     character: name
  //   })
  //   // console.log(this.state.character) // luke skywalker
  //   // console.log(response.data.name) // Luke Skywalker
  //   // console.log(this.state.character)
  // }

  // const text = this.state.loading ? 'loading...' : this.state.character
  // const text = loading ? 'loading...' : character
  const text = loading ? 'loading...' : character
  // console.log(character)
  // console.log(loading)
  // console.log(text)

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
