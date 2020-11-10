/*
for starWars table data

Each row should contain the characters:
Name, birth date, height, mass, home-world, species
*/
import React from 'react'
import Table from 'react-bootstrap/Table'
// import UsePagination from './UsePagination'
import RenderCharacters from './RenderCharacters'

const RenderTable = (props) => {
  return (
    <Table className='table table-dark response-data table-hover' responsive='sm' bordered='true'>
      <thead className='thead-light'>
        <tr>
          <th>Name</th>
          <th>Birth Date</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Homeworld</th>
          <th>Species</th>
        </tr>
      </thead>
      <tbody>
        {/* <RenderCharacters /> */}
      </tbody>
    </Table>
  )
}

export default RenderTable
