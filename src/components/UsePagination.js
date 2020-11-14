import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
// import PageItem from 'react-bootstrap/PageItem'

const UsePagination = (props) => {
  const { loading } = props

  const active = 1
  const items = []
  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    )
  }

  if (loading) {
    return <div />
  }
  return (
    <Pagination className='pagination'>
      <Pagination.Prev />
      {items}
      <Pagination.Next />
    </Pagination>
  )
}

export default UsePagination
