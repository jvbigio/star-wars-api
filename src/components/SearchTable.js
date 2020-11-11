import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

function SearchTable ({ loading }) {
  const [value, setValue] = useState('')

  if (loading) {
    return <div />
  }
  const handleChange = e => {
    e.preventDefault()
    setValue(e.target.value)
  }

  return (
    <Form className='formSearch'>
      <Form.Group controlId='formSeach'>
        <Form.Control
          type='text'
          placeholder='Search...'
          value={value}
          // onChange={handleChange}
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>
    </Form>
  )
}

export default SearchTable
