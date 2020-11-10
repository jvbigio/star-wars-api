import React from 'react'
import RenderTable from './RenderTable'
import Table from 'react-bootstrap/Table'

const RenderCharacters = ({ character, loading }) => {
// const RenderCharacters = (props) => {
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <div>
      {character.map((entity, index) => (
        <tr key={entity.index}>
          <td>{entity.name}</td>
          <td>{entity.birth_year}</td>
          <td>{entity.height}</td>
          <td>{entity.mass}</td>
          <td>{entity.homeworld}</td>
          <td>{entity.species}</td>
        </tr>
      ))}
    </div>
  )
}

export default RenderCharacters
