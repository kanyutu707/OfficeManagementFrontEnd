import React, { useState } from 'react'
import './SignUp.css'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'



const SignUp = () => {
  const BASE_URL=import.meta.env.VITE_APP_BASE_URL;
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    "firstName":"",
    "lastName":"",
    "email": "",
    "password": "",
    "image":"",
    "position":"Admin",
    "status":"Active",
    "company_id":parseInt(sessionStorage.getItem('company_id'))
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        console.log(response)
        throw new Error('Network response was not ok')
      }
      const data = await response.json();
      console.log(data)
      navigate('/SignIn');
      sessionStorage.clear();
      sessionStorage.removeItem("company_id")


    }
    catch (error) {
      console.error('There was a problem with your fetch operation: ', error)
    }
  }
  return (
    <div className='signUpContainer'>
      <form action="" onSubmit={handleSubmit}>
        <header>SIGN IN</header>
        <span className="name_group">
          <span className="form_group">
            <label htmlFor="">FIRST NAME</label>
            <input type="text" placeholder='FIRST NAME' onChange={handleChange} name='firstName' value={formData.firstName} />
          </span>
          <span className="form_group">
            <label htmlFor="">LAST NAME</label>
            <input type="text" placeholder='LAST NAME' onChange={handleChange} name='lastName' value={formData.lastName} />
          </span>
        </span>
        <span className="form_group">
          <label htmlFor="">EMAIL</label>
          <input type="text" placeholder='email' onChange={handleChange} name='email' value={formData.email} />
        </span>
        <span className="form_group">
          <label htmlFor="">PASSWORD</label>
          <input type="password" placeholder='password' onChange={handleChange} name='password' value={formData.password} />
        </span>
        <span className="form_group">
          <label htmlFor="">IMAGE</label>
          <input type="text" placeholder='IMAGE' onChange={handleChange} name='image' value={formData.image} />
        </span>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default SignUp