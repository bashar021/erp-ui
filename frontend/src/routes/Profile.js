import React from 'react'
import Header from "../components/Header"
import Navbar from "../components/navbar"
import "../components/styles/Profile.css"
import alumni1 from '../components/images/Alumni-DataImages/alumni1.jpg'
import Todaycircular from "../components/Today_circular.js"
function Profile() {
  return (
    <div>
    <Header/>
    <Todaycircular/>
    <Navbar/>
    <div className='profile-container'>
       <img src={alumni1} className='profile-image'></img>
       <div className='profile-details'>
       <p>Name : Arsh Singhal</p>
       <p>Id : 4001</p>
       <p>Roll No : 2004101010</p>
       <p>Course : Btech</p>
       <p>Branch :Computer Science</p>
       </div>
    </div>
    </div>
)}export default Profile