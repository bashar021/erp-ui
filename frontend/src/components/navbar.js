import React from 'react'
import "./styles/navbarStyles.css"
import dashboard from './images/dashboard.png'
import { Link  } from 'react-router-dom'
function navbar() {
  return (
    <div id="navbar-container">

          <Link to="/profile"> 
          <button  className='navbar-item navbar_btn'>
            <img src={dashboard}></img>
            <p>Dashboard</p>
          </button>

          </Link>
          <Link >
          <button className='navbar-item navbar_btn'>
            <img src={dashboard}></img>
            <p>Fees</p>
          </button>
          </Link>
          <Link>
          <button className='navbar-item navbar_btn'>
            <img src={dashboard}></img>
            <p>Griveance</p>
          </button>
          </Link>
          <Link>
          <button className='navbar-item navbar_btn'>
            <img src={dashboard}></img>
            <p>Clubs</p>
          </button>
          </Link>
          <Link>
          <button className='navbar-item navbar_btn'>
            <img src={dashboard}></img>
            <p>Placements</p>
          </button>
          </Link>
          <Link to="/alumni">
          <button className='navbar-item navbar_btn'>
            <img src={dashboard}></img>
            <p>Alumni</p>
          </button>
          </Link>
          
          
          
          
          
    
    </div>
  )
}

export default navbar