import React from 'react'
import Form from 'react-bootstrap/Form'
import '../SearchTable.css'

function SearchTable ({ loading, handleSearch, executeSearch }) {
  if (loading) {
    return <div />
  }

  return (
    <Form className='form-search' autoComplete='off' onSubmit={executeSearch}>
      <Form.Group controlId='form-search'>
        <Form.Control
          type='text'
          placeholder='Search a character by name, then press enter...'
          onChange={(e) => handleSearch(e)}
        />
      </Form.Group>
    </Form>
  )
}

export default SearchTable
