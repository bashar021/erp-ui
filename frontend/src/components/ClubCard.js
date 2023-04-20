import React from 'react'
import "../components/styles/ClubCardStyles.css"
const ClubCard=(props)=> {
  return (
    <div className="club-card">
    <img src={props.imgsrc} alt="image" className='club-image'></img>
    <div  className="club-card-details">
    <h2 className="club-title">{props.name}</h2>
      <p className="club-description">{props.description}</p>
      </div>
      </div>
  )
}

export default ClubCard
