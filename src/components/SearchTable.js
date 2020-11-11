import React from 'react'
import Form from 'react-bootstrap/Form'

function SearchTable ({ loading }) {
  if (loading) {
    return <div />
  }
  return (
    <Form className='formSearch'>
      <Form.Group controlId='formSeach'>
        <Form.Control type='text' placeholder='Search...' />
      </Form.Group>
    </Form>
  )
}

export default SearchTable
