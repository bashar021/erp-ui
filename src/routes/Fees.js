import React from 'react'
import Header from "../components/Header"
import Navbar from "../components/navbar"
import Todaycircular from "../components/Today_circular.js"
import "../components/styles/FeesStyles.css"
function Fees() {
  return (
    <div>
    <Header/>
    <Todaycircular/>
    <Navbar/>
    <div className = "fees-main">
      <div className = "fees-text">
        <h3>DETAILS:</h3>
        <p className='nme'>Name:</p>
        <p className='nme'>Course:</p>
        <p className='nme'>Specialization:</p>
        <p className='nme'> Balance Fee Amount:</p>
      </div>
        <div className ="fee-payment">
            <form id='fee_payment' method="post">
            <button id="login_btn1" type="submit">PAY</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Fees
