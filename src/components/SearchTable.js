import React from 'react'
import Form from 'react-bootstrap/Form'

function SearchTable ({ loading, search, handleChange }) {
  // above is equivalent to:
  // const loading = props.loading
  // const handleChange = props.handleChange
  // const { loading, search, handleChange } = props
  if (loading) {
    return <div />
  }

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
