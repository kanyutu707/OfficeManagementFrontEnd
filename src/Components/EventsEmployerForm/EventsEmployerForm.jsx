import React, { useState } from 'react';
import "./EventsEmployerForm.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EventsEmployerForm = () => {
    const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
    
    const [formData, setFormData] = useState({
        "title": "",
        "description": "",
        "startTime": "",
        "endTime": "",
        "companyId": parseInt(sessionStorage.getItem("companyId"))
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Create a copy of form data to modify
        const submissionData = { ...formData };
        
        // Convert datetime format from "yyyy-MM-ddThh:mm" to "yyyy-MM-dd hh:mm"
        if (submissionData.startTime) {
            submissionData.startTime = submissionData.startTime.replace('T', ' ');
        }
        
        if (submissionData.endTime) {
            submissionData.endTime = submissionData.endTime.replace('T', ' ');
        }
        
        try {
            const response = await fetch(`${BASE_URL}/events/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${sessionStorage.getItem('token')}`
                },
                credentials: 'include',
                body: JSON.stringify(submissionData),
            });
            
            if (!response.ok) {
                console.log(response);
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            alert("Data submitted successfully");
            window.location.href = window.location.href;
        }
        catch (error) {
            console.error("There was a problem with your post operation", error);
        }
    };

    return (
        <div className='EventsEmployerForm'>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <header>NEW EVENTS</header>
                
                <span className="form_group">
                    <label htmlFor="title">TITLE</label>
                    <input 
                        type="text" 
                        id="title"
                        placeholder='TITLE' 
                        onChange={handleChange} 
                        name='title' 
                        value={formData.title} 
                        required
                    />
                </span>
                
                <span className='form_group'>
                    <label htmlFor="description">DESCRIPTION</label>
                    <textarea 
                        id="description"
                        rows={5} 
                        name='description' 
                        onChange={handleChange} 
                        value={formData.description}
                        required
                    ></textarea>
                </span>
                
                <span className='form_group'>
                    <label htmlFor="startTime">START TIME</label>
                    <input 
                        type="datetime-local" 
                        id="startTime"
                        onChange={handleChange} 
                        name='startTime' 
                        value={formData.startTime} 
                        required
                    />
                </span>
                
                <span className='form_group'>
                    <label htmlFor="endTime">END TIME</label>
                    <input 
                        type="datetime-local" 
                        id="endTime"
                        onChange={handleChange} 
                        name='endTime' 
                        value={formData.endTime} 
                        required
                    />
                </span>
                
                <button type='submit'>ADD</button>
            </form>
        </div>
    );
};

export default EventsEmployerForm;