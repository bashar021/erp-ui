import React from 'react'
import Header from "../components/Header"
import Navbar from "../components/navbar"
import Todaycircular from "../components/Today_circular.js"
import Attendence_chart from "../components/Attendence_chart.js"
function adt_chart() {
  return (
    <div>
        <Header/>
    <Todaycircular/>
    <Attendence_chart/>
    <Navbar/>
    </div>
  )
}

export default adt_chart