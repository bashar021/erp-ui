import React from 'react'
import "./navbarStyles.css"
function navbar() {
  return (
    <div id="navbar-container">
        <div id='navbar-item-container'>
           <div className='navbar-item'>
            <img src=""></img>
            <p>Dashboard</p>
           </div>
           <div className='navbar-item'>
            <img src=""></img>
            <p>Fees</p>
           </div>
           <div className='navbar-item'>
            <img src=""></img>
            <p>Griveance</p>
           </div>
           <div className='navbar-item'>
            <img src=""></img>
            <p>Clubs</p>
           </div>
           <div className='navbar-item'>
            <img src=""></img>
            <p>Alumni</p>
           </div>
        </div> 
    </div>
  )
}

export default navbar
