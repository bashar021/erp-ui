import React from 'react'
import AlumniCardData from '../components/AlumniCardData'
import AlumniCard from '../components/AlumniCard'
import "../components/styles/AlumniStyles.css"
function Alumni() {
  return (
    <div className="alumni-container">
      <h1 className="alumni-heading">Our Recent Alumni</h1>
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
  )
}

export default Alumni
