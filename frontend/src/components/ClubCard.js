import React from 'react'
import "../components/styles/ClubCardStyles.css"
const ClubCard=(props)=> {
  return (
  //   <div className="project-card">
  //   <img src={props.imgsrc} alt="image"></img>
  //   <h2 className="project-title">{props.name}</h2>
  //   <h3 className="techused">Technologies-{props.tech}</h3>
  //   <div className="pro-details">
  //      <p className="project-text">{props.text}</p>
  //      <div className="pro-btns">
  //       <a href={props.view} rel="noppener" className="btn">View</a>
  //       <a href={props.source} rel="noppener" className="btn">Source</a>
  //      </div>
  //     </div>
  //  </div>
  <div className='bg-image'>
      <img src={props.imgsrc} className='img-fluid' alt='Sample' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white mb-0'>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ClubCard
