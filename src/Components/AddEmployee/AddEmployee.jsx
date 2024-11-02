import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { IoCloseCircleOutline } from "react-icons/io5";
import './AddEmployee.css'

const AddEmployee = ({close}) => {
  const BASE_URL=import.meta.env.VITE_APP_BASE_URL;
    const [formData, setFormData] = useState({
        "firstName":"",
        "lastName":"",
        "email": "",
        "password": "",
        "image":"",
        "position":"Employee",
        "status":"Active",
        "company_id":sessionStorage.getItem("companyId")
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
            body: JSON.stringify(formData),
            //credentials:'include'
          })
          if (!response.ok) {
            console.log(response)
            throw new Error('Network response was not ok')
          }
          const data = await response.json();
          console.log(data);
          window.location.href=window.location.href;
    
    
        }
        catch (error) {
          console.error('There was a problem with your fetch operation: ', error)
        }
      }
  return (
    <div className='addEmployeeContainer'>
        
      <form action="" onSubmit={handleSubmit}>
        <header>
            <h3>ADD EMPLOYEE</h3>
            <button onClick={close}>
                <IoCloseCircleOutline />

                </button>
        </header>
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

export default AddEmployee