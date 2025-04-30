import React, { useState } from 'react';
import './CreateLeave.css';

const CreateLeave = () => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    status: "Applied",
    companyId: parseInt(sessionStorage.getItem('companyId')),
    userId: parseInt(sessionStorage.getItem('loggedIn'))
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/leaves/`, {
        method: 'POST',
        headers: {
          'Authorization': `${sessionStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit leave request');
      }

      const data = await response.json();
      window.alert("Leave request submitted successfully");
      window.location.href = window.location.href;
    } catch (error) {
      console.error('There was a problem with your fetch operation: ', error);
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='create-leave-container'>
      <form onSubmit={handleSubmit}>
        <header>Leave Application Form</header>
        
        <div className="input-group">
          <label htmlFor="startDate">Start Date</label>
          <input 
            type="date" 
            id="startDate"
            name="startDate"
            value={formData.startDate} 
            onChange={handleChange} 
            required
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="endDate">End Date</label>
          <input 
            type="date" 
            id="endDate"
            name="endDate"
            value={formData.endDate} 
            onChange={handleChange} 
            required
          />
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </form>
    </div>
  );
};

export default CreateLeave;