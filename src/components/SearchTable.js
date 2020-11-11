// to search for each star wars character

import React from 'react'
import Form from 'react-bootstrap/Form'

function SearchTable () {
  return (
    <div className='search-form'>
      <input className='form-control' type='text' placeholder='Search...' />
    </div>
  )
}

//  return (
//     <Form className='formSearch'>
//       <Form.Group controlId='formSeach'>
//         <Form.Control type='text' placeholder='Search...' />
//       </Form.Group>
//     </Form>
//   )

export default SearchTable
