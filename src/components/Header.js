import React from 'react'

function Header () {
  return (
    <div className='nav fixed-top'>
      <div className='logo'>
        <span><i className='fas fa-jedi' /></span>Star Wars <img className='vader-logo' src='https://i.postimg.cc/B6MRV4jG/vader.png' alt='darth vader' />
      </div>
    </div>
  )
}

export default Header
