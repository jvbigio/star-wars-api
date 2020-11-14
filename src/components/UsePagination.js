import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import '../UsePagination.css'

const active = 1
// const items = []
const itemsPerPage = []
for (let number = 1; number <= 9; number++) {
// for (let page = 1; page <= 9; page++) {
  // items.push(
  itemsPerPage.push(
    // <Pagination.Item key={number} active={number === active}>
    //   {number}
    <Pagination.Item className='pagination text-warning' key={number} active={number === active}>
      {number}
    </Pagination.Item>
  )
}
const UsePagination = (props) => {
// const UsePagination = ({ loading, itemsPerPage, page, number }) => {
  const { loading } = props

  if (loading) {
    return <div />
  }
  return (
    <div>
      {/* <Pagination>{items}</Pagination> */}
      <Pagination>{itemsPerPage}</Pagination>
    </div>

  )
}

export default UsePagination
