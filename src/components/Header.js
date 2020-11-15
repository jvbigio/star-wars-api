import React from 'react'
import Vader from '../images/vader.png'

function Header ({ handleButtonClick }) {
  return (
    <div className='nav fixed-top'>
      {/* <span><a onClick={handleButtonClick} href='intro.html' className='nerd-button'>Click</a></span> */}
      <div className='logo'>
        <span><i className='fas fa-jedi' /></span>Star Wars <img className='vader-logo' src={Vader} alt='darth vader' />
      </div>
    </div>
  )
}

export default Header
