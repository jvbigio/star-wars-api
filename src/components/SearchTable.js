import React from 'react'
import Form from 'react-bootstrap/Form'
import RenderTable from './RenderTable'

function SearchTable ({ loading, character, search, handleChange }) {
  // above is equivalent to:
  // const loading = props.loading
  // const handleChange = props.handleChange
  // const { loading, search, handleChange } = props
  if (loading) {
    return <div />
  }
  // character.map(data => console.log(data))
  // console.log(character.data)
  // for (const data of character) {
  //   console.log(data)
  // }

  // const tableData = character.map(data => console.log(data))
  // character.filter(data => {
  character.filter(data => {
    // console.log(data.name)
    console.log(search)
    if (search === null) {
      return data.name
    } else if (data.name.toLowerCase().includes(search.toLowerCase())) {
      // console.log('yes')
      return data.name
    }
  }).map(data => {
    return (
      data.name
    )
  })

  return (
    <Form className='form-search'>
      <Form.Group controlId='form-search'>
        <Form.Control
          type='text'
          placeholder='Search...'
          value={search}
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>
    </Form>
  )
}

export default SearchTable
