import React from 'react'
import './App.css'
// import axios from 'axios'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  // one version:
  componentDidMount () {
    this.setState({ loading: true })
    fetch('https://swapi.dev/api/people/1')
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        })
      })
  }

  render () {
    const text = this.state.loading ? 'loading...' : this.state.character.name
    return (
      <div className='App'>
        <h1>Star Wars API Project</h1>
        <p>{text}</p>
      </div>
    )
  }
}

export default App
