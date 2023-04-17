import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Today_circular from './components/Today_circular';
import Attendence_chart from './components/Attendence_chart';
// import Alumni from './routes/Alumni';
// import Alumni from './components/'
import Alumni from "./routes/Alumni"
import Navbar from './components/navbar';


export default function Dashaboard() {
  return (
    
    <div>
    {/* <Router> */}
      {/* <Dashaboard></Dashaboard> */}

      <Header></Header>
      <Today_circular></Today_circular>
     <Routes>
      {/* <Route path='/' element={<Login_signup></Login_signup>}></Route> */}
      <Route path='/' element={<Attendence_chart></Attendence_chart>}></Route>
      {/* <Route path='/alumni' element={<Alumni/>}></Route> */}
     </Routes>

     <Navbar/>
     {/* <Alumni/> */}
    {/* </Router> */}
    </div>


  )
}
