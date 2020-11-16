import React from 'react'
import { Table } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import RenderTable from './RenderTable'
// import { useFilters } from 'react-table'

function SearchTable ({ loading, character, search, handleSearch }) {
  // above is equivalent to:
  // const loading = props.loading
  // const handleChange = props.handleChange
  // const { loading, search, handleChange } = props
  if (loading) {
    return <div />
  }

  // TEST 1
  character.filter(person => {
    if (!search) {
      return person
    } else if (person.name.toLowerCase().includes(search.toLowerCase())) {
      return person.name
    }
  })

  // TEST 2
  // const tableData = character.filter(data => {
  //   // console.log(data)
  //   if (!search) {
  //     // console.log(search)
  //     return data
  //   } else if (data.name.toLowerCase().includes(search.toLowerCase())) {
  //     // console.log('yes')
  //     console.log(data.name.search)
  //     // debugger
  //     // return data.name(search)
  //     console.log(search)
  //     return search
  //   } else {
  //     <td style={{ display: 'none' }} />
  //   }
  // // }).map(data => {
  // //   return (
  // //     data
  // //   )
  // })

  return (
    <Form className='form-search'>
      <Form.Group controlId='form-search'>
        <Form.Control
          type='text'
          placeholder='Search...'
          value={search || ''}
          onChange={(e) => handleSearch(e)}
        />
      </Form.Group>
    </Form>
  )
}

export default SearchTable
