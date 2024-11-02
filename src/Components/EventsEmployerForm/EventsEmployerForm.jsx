import React, { useState } from 'react';
import "./EventsEmployerForm.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EventsEmployerForm = () => {
    const BASE_URL=import.meta.env.VITE_APP_BASE_URL;
    const [formData, setFormData] = useState({
        "title": "",
        "description": "",
        "startTime": "",
        "endTime": "",
        "companyId":parseInt(sessionStorage.getItem("companyId"))

    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/events/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${sessionStorage.getItem('token')}`
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
           window.location.href=window.location.href;
        }
        catch (error) {
            console.error("There was a problem with your post operation", error)
        }
    }



    return (
        <div className='EventsEmployerForm'>
            <form onSubmit={handleSubmit}>
                <header>NEW EVENTS</header>

                <span className="form_group">
                    <label htmlFor="">TITLE</label>
                    <input type="text" placeholder='TITLE' onChange={handleChange} name='title' value={formData.title} />
                </span>
                <span className='form_group'>
                    <label htmlFor="">DESCRIPTION</label>
                    <textarea rows={5} name='description' onChange={handleChange} value={formData.description}></textarea>
                </span>
                <span className='form_group'>
                    <label htmlFor="">START TIME</label>
                    <input type="datetime-local" onChange={handleChange} name='startTime' value={formData.startTime} />
                </span>
                <span className='form_group'>
                    <label htmlFor="">END TIME</label>
                    <input type="datetime-local" onChange={handleChange} name='endTime' value={formData.endTime} />
                </span>
                <button type='submit'>ADD</button>
            </form>
        </div>
    );
};

export default EventsEmployerForm;
