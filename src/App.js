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
