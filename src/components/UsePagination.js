import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
// import PageItem from 'react-bootstrap/PageItem'

const active = 1
const itemsPerPage = []
for (let number = 1; number <= 9; number++) {
  itemsPerPage.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  )
}

const UsePagination = (props) => {
  const { loading } = props

  if (loading) {
    return <div />
  }
  return (
    <Pagination className='pagination'>
      <Pagination.Prev />
      {itemsPerPage}
      <Pagination.Next />
    </Pagination>
  )
}

export default UsePagination
