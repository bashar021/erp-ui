import logo from './logo.svg';
import {Routes,Route} from "react-router-dom"
import Signup from "../erp-ui/src/routes/Signup"
import Alumni from "../erp-ui/src/routes/Alumni"
import Fees from "../erp-ui/src/routes/Fees"
import Placements from "../erp-ui/src/routes/Placement"
import Profile from "../erp-ui/src/routes/Profile"
import Navbar from '../erp-ui/src/components/navbar';
import React from 'react';
import './App.css';
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
    <Navbar/>
    </>
  );
}

export default App;
