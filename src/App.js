import React from 'react'
import './App.css'
import axios from 'axios'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  // one version:
  async componentDidMount () {
    this.setState({ loading: true })
    const response = await axios.get('https://swapi.dev/api/people/1')
    // const json = await response.json()
    // const data = response.data.data <-- equivalent to:
    const { data } = response.data
    // const { data } = response.json
    // { character } = response.json
    this.setState({
      loading: false,
      character: data
    })
    console.log(response.data.name) // Luke Skywalker
  }

  render () {
    // console.log(this.state.character);
    // this.state.character.map(elem => console.log(elem))
    // const text = this.state.loading ? 'loading...' : this.state.character
    return (
      <div className='App'>
        <h1>Star Wars API Project</h1>
        {/* <p>{text}</p> */}
      </div>
    )
  }
}

export default App
