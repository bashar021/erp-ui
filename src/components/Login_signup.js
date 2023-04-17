import React from 'react'
import './styles/Login_signup.css'
import logingif  from './images/business _ presentation, graph, chart, project, analytics, statistics, woman, people.svg'

export default function Login_signup() {
  return (
    <>
    <div id="login_cont">
      <div className='login_conts' id="form_cont">
        <h2>Login</h2>
        <p>Ready</p>
        <div id="form_cont_box">
          <form id='login_form' method="post">
            <input id="erp_id" type="text" placeholder="ERP ID"/><br/>
            <input id="password" type="text" placeholder="Password"/><br/>
            <button id="login_btn" type="submit">Submit</button>
          </form>

        </div>
      </div>
      <div className='login_conts' id='gif_cont'>
        <img src={logingif} alt=""></img>
      </div>
 
    </div>
    </>

  )
}
