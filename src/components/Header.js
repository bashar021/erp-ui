import React from 'react'
import './styles/header.css'
import collegelogo from "./images/collegelogo.png"
import bell from "./images/bell.png"
import leftarrow from "./images/left-arrow.png"
import profilephoto from "./images/profile-photo.png"
import downarrow from "./images/down-arrow.png"
import user_avatar from './images/icons/avatar-40.png'
import drop_down from './images/icons/sort-down-30.png'
import notification_icon from './images/icons/notification-30.png'
import calendar_icon from './images/icons/calendar-30.png'
export default function Header() {
  return (
    <>
    {/* done by arihant  */}

    {/* <div id="header-container">
        <div id="upper-header">
          <div>
           <img src={collegelogo} id="college-logo-image"></img>
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
    </div> */}

    {/* structure made by bashar  */}

    <div id='parent_header_cont'>
      <div id='header_2_cont'>
        <div id='header_user_detail_cont'>
          <div id='user_profile_section'>
            <img src={calendar_icon} alt="calendar" />
            <img src={notification_icon} alt="notification" />
            <img src={user_avatar} alt="user" />
            {/* <img src={drop_down} alt="more" /> */}
          </div>
          <h1>Welcome | <span>Bashar alam</span> </h1>
        </div>

        <div id='student_detail'>
          <div className='student_detail_items'>
            <p>BTech</p>
          </div>
          <div className='student_detail_items'>
            <p>3rd Year</p>
          </div>
          <div className='student_detail_items'>
            <p>6th Semester</p>
          </div>
          <div className='student_detail_items'>
            <p>Computer Science</p>
          </div>


        </div>
      </div>

      <div id='cllg_logo_cont'>
        <img src={collegelogo} alt="" />

      </div>
    </div>
    </>
    
  )
}
