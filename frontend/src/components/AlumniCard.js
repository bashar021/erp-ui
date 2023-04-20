import React from 'react'
import "./styles/AlumniCardStyles.css"



const AlumniCard=(props)=> {
  
    return (
      <div className="alumni-card">
              <img src={props.imgsrc} alt="image" className="alumni-card-image"></img>
              <div className="alumni-card-name-position-container">
              <p className="alumni-card-name">{props.name}</p>
              <p className="alumni-card-companyname">{props.companyname}</p>
              </div>
              <p className="alumni-card-review">{props.review}</p>
      </div>
    )
  }

export default AlumniCard
