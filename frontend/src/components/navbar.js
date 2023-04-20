import React from 'react'
import "./styles/navbarStyles.css"
import dashboard from './images/dashboard.png'
import { Link  } from 'react-router-dom'
function navbar() {
  return (
    <div id="navbar-container">
          <Link to="/dashboard"> 
          <button  className='navbar-item navbar_btn'>
            <img src={dashboard}></img>
            <p>Dashboard</p>
          </button>

          </Link>
          <Link to="/profile"> 
          <button  className='navbar-item navbar_btn'>
            <img src={dashboard}></img>
            <p>Profile</p>
          </button>

          </Link>
          <Link to="/clubs"> 
          <button className='navbar-item navbar_btn'>
            <img src={dashboard}></img>
            <p>Clubs</p>
          </button>
          </Link>
          <Link to="/placement">
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
          <Link to="/assesment">
          <button className='navbar-item navbar_btn'>
            <img src={dashboard}></img>
            <p>Assesment</p>
          </button>
          </Link>
          
          
          
    
    </div>
  )
}

export default navbar
