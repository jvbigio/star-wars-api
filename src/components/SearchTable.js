import React from 'react'
import Form from 'react-bootstrap/Form'

function SearchTable ({ loading, handleSearch, executeSearch }) {
  if (loading) {
    return <div />
  }

  return (
    <Form className='form-search' autoComplete='off' onSubmit={executeSearch}>
      <Form.Group controlId='form-search'>
        <Form.Control
          type='text'
          placeholder='Search...'
          // value={search || ''}
          onChange={(e) => handleSearch(e)}
        />
      </Form.Group>
    </Form>
  )
}

export default SearchTable
