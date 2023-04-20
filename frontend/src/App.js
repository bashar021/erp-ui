import logo from './logo.svg';
// import {Routes,Route} from "react-router-dom"
import Signup from "./routes/Signup"
import Alumni from "./routes/Alumni"
import Fees from "./routes/Fees"
import Review from "./routes/Review"
import Placement from "./routes/Placement"
import Profile from "./routes/Profile"
import Clubs from "./routes/Clubs.js"
import Navbar from './components/navbar';
import React from 'react';
import './App.css';
// import {Route,BrowserRouter as Router ,Routes} from "react-router-dom"
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Today_circular from './components/Today_circular.js'
import Header from './components/Header.js'
import Attendence_chart from './components/Attendence_chart';
import Login_signup from './components/Login_signup';


function App() {
  return (
    <Router>
      <div>
       <Routes>
        <Route path='/' element={<Signup></Signup>}></Route>
        <Route path='/alumni' element={<Alumni></Alumni>}></Route>
        <Route path='/fees' element={<Fees></Fees>}></Route>
        <Route path='/placement' element={<Placement></Placement>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/clubs' element={<Clubs></Clubs>}></Route>
       </Routes>
      </div>
    </Router>
    
  );
}

export default App;
