import React from 'react'
import './styles/header.css'
import collegelogo from "./images/collegelogo.png"
import bell from "./images/bell.png"
import leftarrow from "./images/left-arrow.png"
import profilephoto from "./images/profile-photo.png"
import downarrow from "./images/down-arrow.png"
export default function Header() {
  return (
    <>
    <div id="header-container">
        <div id="upper-header">
          <div>
          <img src={leftarrow} id="left-arrow-image">
           </img>
           <img src={collegelogo} id="college-logo-image">
           </img>
           </div>
           <div id='upper-header-rightside'>
              <div id='upper-header-date-container'>
                <p>20/4/23</p>
              </div>
              <img id="bell-icon" src={bell}></img>
              <div id='upper-header-rightside-name-container'>
                 <p>Arihant</p>
                 <p>Jain</p>
              </div>
              <img src={profilephoto} id="header-profile-photo"></img>
              <img src={downarrow} id="header-down-arrow"></img>
           </div>
        </div>
        <div id="lower-header">
          <p id="header-intro-name">Welcome Arihant</p>
          <div id='header-details-container'>
             <p>Course Btech</p>
             <p>Semester 6th</p>
             <p>College </p>
          </div>
        </div>
    </div>
    </>
    
  )
}
