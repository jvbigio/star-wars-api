import React from 'react'
import Table from 'react-bootstrap/Table'
// import UsePagination from './UsePagination'

const RenderTable = ({ character, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }
  const getData = character.map(entity => {
    return (
      <tr key={entity.name}>
        <td>{entity.name}</td>
        <td>{entity.birth_year}</td>
        <td>{entity.height}</td>
        <td>{entity.mass}</td>
        <td>{entity.homeworld}</td>
        <td>{entity.species}</td>
      </tr>
    )
  })

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
      <tbody>{getData}</tbody>
    </Table>
  )
}

export default RenderTable
