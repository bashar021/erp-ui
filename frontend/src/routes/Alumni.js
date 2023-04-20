import React from 'react'
import AlumniCardData from '../components/AlumniCardData.js'
import AlumniCard from '../components/AlumniCard.js'
import "../components/styles/AlumniStyles.css"
import Header from "../components/Header"
import Navbar from "../components/navbar"
import Todaycircular from "../components/Today_circular.js"
function Alumni() {
  return (
  <>
  <Header/>
  <Todaycircular/>
  <Navbar/>
    <div className="alumni-container">
        <div className="alumni-cards-container">
         {
            AlumniCardData.map((val)=>{
            return(
                <AlumniCard 
                imgsrc={val.imgsrc}
                name={val.name}
                review={val.review}
                companyname={val.companyname}
                />
            )
         })}
        </div>
    </div>
    </>
  )
}

export default Alumni
