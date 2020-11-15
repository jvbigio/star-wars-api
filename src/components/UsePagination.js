import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
// import PageItem from 'react-bootstrap/PageItem'

const UsePagination = (props) => {
  const { loading, currentPage, handlePageClick } = props

  let active = currentPage
  const items = []

  for (let number = 1; number <= 9; number++) {
    items.push(
      <Pagination.Item key={number} active={active === number}>
        {number}
      </Pagination.Item>
    )
    active = parseInt(currentPage)
  }

  if (loading) {
    return <div />
  }
  // console.log(typeof currentPage) // string
  return (
    <div className='page-list pagination-sm'>
      <Pagination className={(currentPage ? active : '') + 'page-item number'} onClick={handlePageClick}>
        <Pagination.Prev />
        {items}
        <Pagination.Next />
      </Pagination>
    </div>
  )
}

export default UsePagination
