import React from 'react'
import "../components/styles/ClubCardStyles.css"
const ClubCard=(props)=> {
  return (
    <div className="club-card">
              <img src={props.imgsrc} alt="image" className="club-card-image"></img>
              <p className='club-card-name'>{props.name}</p>
              <p className='club-card-description'>{props.description}</p>
      </div>
  )
}

export default ClubCard
