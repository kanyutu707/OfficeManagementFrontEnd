import React, { useState } from 'react'
import './CreateLeave.css'

const CreateLeave = () => {
const BASE_URL=import.meta.env.VITE_APP_BASE_URL;
const [formData, setFormData]=useState({
    startDate:null,
    endDate:null,
    status:"Applied",
    companyId:parseInt(sessionStorage.getItem('companyId')),
    userId:parseInt(sessionStorage.getItem('loggedIn'))
});
const handleChange=(e)=>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
}
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/leaves/`, {
        method: 'POST',
        headers: {
        'Authorization': `${sessionStorage.getItem('token')}`,
          'Content-Type': 'application/json'
           
        },
        credentials:'include',
        body: JSON.stringify(formData),
      })
      console.log(formData);
      if (!response.ok) {
        console.log(response)
        throw new Error('Network response was not ok')
      }
      const data = await response.json();
      console.log(data);
      window.alert("LEAVE REQUEST SUBMITTED SUCCESSFULLY");
      window.location.href=window.location.href;
    }
    catch (error) {
      console.error('There was a problem with your fetch operation: ', error)
    }
  }
  return (
    <div className='createleavecontainer'>
        <form onSubmit={handleSubmit}>
            <header>LEAVE APPLICATION FORM</header>
            <span className="input_group">
                <label htmlFor="">START DATE</label>
                <input type="date" onChange={handleChange} value={formData.startDate} name='startDate'/>
            </span>
            <span className="input_group">
                <label htmlFor="">END DATE</label>
                <input type="date" onChange={handleChange} value={formData.endDate} name='endDate'/>
            </span>
            <button>SUBMIT</button>
        </form>
    </div>
  )
}

export default CreateLeave