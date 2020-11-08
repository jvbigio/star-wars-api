import React from 'react'
import './App.css'
import axios from 'axios'
import Table from './components/Table'
// import SearchTable from './components/SearchTable'
import Header from './components/Header'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      loading: false,
      character: [] // doesn't work if empty object vs array
    }
  }

  // one version:
  async componentDidMount () {
    this.setState({ loading: true })
    // works, but figure how to grab ALL data and place in object
    const response = await axios.get('https://swapi.dev/api/people/1')
    // const response = await axios.get('https://swapi.dev/api/')
    /*
    Destructuring example:
    const name     = hero.name;
    const realName = hero.realName;
    Is equivalent to:
    const { name, realName } = hero;

     const {name, value} = event.target <-- equivalent to:
     const name = event.target.name
     const value = event.target.value
    */

    // const data = response.data.data <-- equivalent to:
    // const { data } = response.data // keep
    // const name = response.data.name:
    const { name } = response.data
    this.setState({
      loading: false,
      character: name
    })
    // console.log(this.state.character) // luke skywalker
    // console.log(response.data.name) // Luke Skywalker
  }

  render () {
    const text = this.state.loading ? 'loading...' : this.state.character // works
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
}

export default App

// <p className='test-api'>{text}</p>
