import React, { useEffect, useState } from 'react'
import './CompanyRegister.css'
import { useNavigate } from 'react-router-dom'

const CompanyRegister = () => {
    const BASE_URL=import.meta.env.VITE_APP_BASE_URL;
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    "name": "",
  
})
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`${BASE_URL}/company/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(formData),
        })
        if (!response.ok) {
            console.log(response)
            throw new Error('Network response was not ok')
        }
        const data = await response.json();
        alert("Data submitted successfully");
        console.log(data)
        sessionStorage.setItem('company_id', data.id);
        navigate('/SignUp/');
    }
    catch (error) {
        console.error("There was a problem with your post operation", error)
    }
}
  return (
    <div className='CompanyRegisterContainer'>
        <form onSubmit={handleSubmit}>
            <section className="form_group">
               <input type="text" placeholder='COMPANY NAME' onChange={handleChange} name='name' value={formData.name} />
               <button>SUBMIT</button>
            </section>
        </form>
    </div>
  )
}

export default CompanyRegister