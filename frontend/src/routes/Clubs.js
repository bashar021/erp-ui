import React from 'react'
import ClubCardData from '../components/ClubCardData.js'
import ClubCard from '../components/ClubCard.js'
import "../components/styles/ClubStyles.css"
import Header from "../components/Header"
import Navbar from "../components/navbar"
import Todaycircular from "../components/Today_circular.js"
function Clubs() {
  return (
  <>
  <Header/>
  <Navbar/>
    <div className="club-container">
        <div className="club-cards-container">
         {
            ClubCardData.map((val)=>{
            return(
                <ClubCard 
                imgsrc={val.imgsrc}
                name={val.name}
                description={val.description}
                />
            )
         })}
        </div>
    </div>
    </>
  )
}

export default Clubs