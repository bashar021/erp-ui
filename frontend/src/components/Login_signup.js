import React, { useContext,useState } from 'react'
import './styles/Login_signup.css'
import logingif  from './images/business _ presentation, graph, chart, project, analytics, statistics, woman, people.svg'
import { StudentContext } from '../Context';
import { useNavigate } from "react-router-dom";

export default function Login_signup() {
  const navigate  = useNavigate()
  const [userid,setUserid] = useState("");
  const [userpassword,setUserPassword] = useState("");
  const {data,setAuthenticatedUser,setIsAuth} = useContext(StudentContext);
  const [incorrectPassword,setIncorrectPassword] = useState(false);

  const handleSubmit = (e) =>{
   console.log(data)
    e.preventDefault();
    
   const account = data.find((user,key) => user.student_id === Number(userid));
   setAuthenticatedUser(account.student_name)
  if(account && account.password === userpassword) {
      navigate("/profile");
      setIsAuth(true)
  }else{
    setIncorrectPassword(true)
  }
  
  }

  return (
    <>
    <div id="login_cont">
    <div className='login_conts' id='gif_cont'>
        <img src={logingif} id='gif_img' alt=""></img>
      </div>
 
      <div className='login_conts' id="form_cont">
        <h2>Login</h2>
        <p>Ready</p>
        <div id="form_cont_box">
          <form id='login_form' onSubmit={handleSubmit} >
            <input id="erp_id" type="text" placeholder="ERP ID" onChange={(e)=>setUserid(e.target.value)}/><br/>
            <input id="password" type="text" placeholder="Password" onChange={(e)=>setUserPassword(e.target.value)}/><br/>
            {incorrectPassword && alert("incorrect password")}
            <input type="submit" value="Submit" />
          </form>

        </div>
      </div>
     
    </div>
    </>

  )
}
