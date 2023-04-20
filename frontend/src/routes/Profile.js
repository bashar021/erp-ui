import React from 'react'
import Header from "../components/Header"
import Navbar from "../components/navbar"
import "../components/styles/Profile.css"
import alumni2 from '../components/images/Alumni-DataImages/alumni2.jpg'
import Profilebackground from "../components/images/profile.jpg"
import Todaycircular from "../components/Today_circular.js"
function Profile() {
  return (
    <div>
    <Header/>
    <Todaycircular/>
    <Navbar/>
    <div className='profile-container'>
       <img src={Profilebackground} className='profile-image'></img>
       <img src={alumni2} className='profile-front-image'></img>
       <div className='profile-details'>
       <p className='profile-container-content'>Name : Arsh Singhal</p>
       <p className='profile-container-content'>Id : 4001</p>
       <p className='profile-container-content'>Roll No : 2004101010</p>
       <p className='profile-container-content'>Course : Btech</p>
       <p className='profile-container-content'>Branch :Computer Science</p>
       </div>
    </div>
    </div>
)}export default Profile