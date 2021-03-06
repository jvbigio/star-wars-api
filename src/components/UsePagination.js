import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import '../UsePagination.css'

const UsePagination = (props) => {
  const { loading, currentPage, handlePageClick } = props

  let active = currentPage
  const items = []

  for (let number = 1; number <= 9; number++) {
    items.push(
      <Pagination.Item id='pagination' key={number} active={active === number}>
        {number}
      </Pagination.Item>

    )
    active = parseInt(currentPage)
  }

  if (loading) {
    return <div />
  }
  return (
    <div className='page-list pagination'>
      <Pagination onClick={(e) => handlePageClick(e)}>
        <Pagination.Prev style={currentPage > 1 ? { display: 'block' } : { display: 'none' }} id='previous' />
        {items}
        <Pagination.Next style={currentPage < 9 ? { display: 'block' } : { display: 'none' }} id='next' />
      </Pagination>
    </div>
  )
}

export default UsePagination
