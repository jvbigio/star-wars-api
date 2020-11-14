import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
// import PageItem from 'react-bootstrap/PageItem'

const UsePagination = (props) => {
  const { loading, currentPage, handlePageClick } = props

  const active = { currentPage }
  const items = []
  
  for (let number = 1; number <= 9; number++) {
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
    <div className='page-list pagination-sm bg-dark-gray'>
      <Pagination onClick={handlePageClick}>
        <Pagination.Prev />
        {items}
        <Pagination.Next />
      </Pagination>
    </div>
  )
}

// return (
//     <div className='page-list'>
//       <Pagination onClick={handlePageClick}>
//         <Pagination.Prev />
//         {items}
//         <Pagination.Next />
//       </Pagination>

//     </div>
//   )

//  <nav aria-label='Page navigation'>
//       <ul className='pagination pagination-sm flex-row' onClick={handlePageClick}>
//         <li className='page-item'><a class='page-link' href='#' tabIndex='-1'>Previous</a></li>
//         <li className='page-item'><a className='page-link' href='#'>1 <span className='sr-only'>(current)</span></a></li>
//         <li className='page-item'><a className='page-link' href='#'>2</a></li>
//         <li className='page-item'><a className='page-link' href='#'>3</a></li>
//         <li className='page-item'><a className='page-link' href='#'>4</a></li>
//         <li className='page-item'><a className='page-link' href='#'>5</a></li>
//         <li className='page-item'><a className='page-link' href='#'>6</a></li>
//         <li className='page-item'><a className='page-link' href='#'>7</a></li>
//         <li className='page-item'><a className='page-link' href='#'>8</a></li>
//         <li className='page-item'><a className='page-link' href='#'>9</a></li>
//         <li className='page-item'><a className='page-link' href='#'>Next</a></li>
//       </ul>
//     </nav>

export default UsePagination
