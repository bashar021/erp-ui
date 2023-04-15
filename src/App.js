import logo from './logo.svg';
// import {Routes,Route} from "react-router-dom"
import Signup from "./routes/Signup"
import Alumni from "./routes/Alumni"
import Fees from "./routes/Fees"
import Placements from "./routes/Placement"
import Profile from "./routes/Profile"
import Navbar from './components/navbar';
import React from 'react';
import './App.css';

import Today_circular from './components/Today_circular.js'
import Header from './components/Header.js'
function App() {
  return (
    <>
    {/* <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/alumni" element={<Alumni />}/>
      <Route path="/fees" element={<Fees />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/placement" element={< Placements/>}/>
    </Routes> */}
    <Header></Header>
    <Today_circular></Today_circular>
    <Navbar/>
   
    </>
  );
}

export default App;
