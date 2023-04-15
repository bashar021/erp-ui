import React from 'react'
import "./styles/navbarStyles.css"
import dashboard from './images/dashboard.png'
function navbar() {
  return (
    <div id="navbar-container">
      {/* <p className='navbar_item_child'><img src={dashboard} alt="" /><span></span>Dashboard</p> */}
        {/* <div id='navbar-item-container'> */}

          <button  className='navbar-item navbar_btn'>
            <img src={dashboard}></img>
            <p>Dashboard</p>
          </button>
          <button className='navbar-item navbar_btn'>
            <img src={dashboard}></img>
            <p>Fees</p>
          </button>
          <button className='navbar-item navbar_btn'>
            <img src={dashboard}></img>
            <p>Griveance</p>
          </button>
          <button className='navbar-item navbar_btn'>
            <img src={dashboard}></img>
            <p>Clubs</p>
          </button>
          <button className='navbar-item navbar_btn'>
            <img src={dashboard}></img>
            <p>Alumni</p>
          </button>


          
           {/* <div className='navbar-item'>
            <img src={dashboard}></img>
            
            <p>Dashboard</p>
           </div> */}

           {/* <div className='navbar-item'>
            <img src={dashboard}></img>
            <p>Fees</p>
           </div>

           <div className='navbar-item'>
            <img src={dashboard}></img>
            <p>Griveance</p>
           </div>

           <div className='navbar-item'>
            <img src={dashboard}></img>
            <p>Clubs</p>
           </div>

           <div className='navbar-item'>
            <img src={dashboard}></img>
            <p>Alumni</p>
           </div> */}
        {/* </div>  */}
    </div>
  )
}

export default navbar
