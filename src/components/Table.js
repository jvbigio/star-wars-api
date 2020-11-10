/*
for starWars table data

Each row should contain the characters:
Name, birth date, height, mass, home-world, species
*/
import React from 'react'

const Table = (props) => {
  /* add spinner:
  // return loading ? ( <Spinner /> ) : ( // code here ...)
  */
  return (
    <table className='response-data'>
      {/* <h2>{props.person}</h2> */}
      <thead>
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
        <tr>
          <td>{props.name}</td>
          <td>{props.birth_year}</td>
          <td>{props.height}</td>
          <td>{props.mass}</td>
          <td>{props.homeworld}</td>
          <td>{props.species}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
