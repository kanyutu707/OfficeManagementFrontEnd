import React, { useState } from 'react'
import './SignIn.css'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'


const SignIn = () => {
  const [user, setUser]=useState([])
  const navigate=useNavigate()
  const [formData, setFormData]=useState({
    "email":"",
    "password":""
  });
  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response=await fetch("http://localhost:8080/authenticate/login", {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData),
        credentials:'include'
      })
      if(!response.ok){
        console.log(response)
        throw new Error('Network response was not ok')
      }
      const data=await response.json();
      const jwtToken =data.token
      const parts = jwtToken.split('.');

  
        const payload = JSON.parse(atob(parts[1]));
          console.log(payload);
     
        sessionStorage.setItem('email', payload.user.email)
        sessionStorage.setItem('token', jwtToken)
        sessionStorage.setItem('role', payload.user.position)
        sessionStorage.setItem('userId', payload.user.id);
        sessionStorage.setItem('companyId', payload.user.company_id);
        if(payload.user.position==='Admin'){
          navigate('/Admin/');
        }else if(payload.user.position==='Employee'){
          navigate('/Employee/');
        }
        else{
           alert("USER NOT FOUND")
        }
     

      
    }
    catch(error){
       alert("CREDENTIALS NOT FOUND")
      console.error('There was a problem with your fetch operation: ', error)
    }
  }
  
  return (
    <div className='signInContainer'>
      <form action="" onSubmit={handleSubmit}>
        <header>SIGN IN</header>
        <span className="form_group">
          <label htmlFor="">EMAIL</label>
          <input type="text" placeholder='email' onChange={handleChange}  name='email' value={formData.email}/>
        </span>
        <span className="form_group">
          <label htmlFor="">PASSWORD</label>
          <input type="password" placeholder='password' onChange={handleChange}  name='password' value={formData.password}/>
        </span>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default SignIn