import React from 'react'
import Form from 'react-bootstrap/Form'

function SearchTable ({ loading, value, handleChange }) {
  if (loading) {
    return <div />
  }

  return (
    <Form className='form-search'>
      <Form.Group controlId='form-search'>
        <Form.Control
          type='text'
          placeholder='Search...'
          onChange={() => handleChange}
        />
      </Form.Group>
    </Form>
  )
}

export default SearchTable
