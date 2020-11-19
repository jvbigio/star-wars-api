import React from 'react'
import Vader from '../images/vader.png'
// try React Router DOM to implement pages.. this is bonus feature
function Header ({ handleButtonClick }) {
  return (
    <div className='nav fixed-top'>
      <div className='logo'>
        <span><i className='fas fa-jedi' /></span>Star Wars <img className='vader-logo' src={Vader} alt='darth vader' />
      </div>
    </div>
  )
}

export default Header
