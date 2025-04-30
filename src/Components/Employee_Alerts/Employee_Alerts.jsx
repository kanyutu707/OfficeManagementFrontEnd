import React, { useEffect, useState } from 'react';
import './Employee_Alerts.css';

const Employee_Alerts = () => {
  const [events, setEvents] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:8080/smartEmployer/events/", {
          headers: {
            'Authorization': `${sessionStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        const companyId = parseInt(sessionStorage.getItem('companyId'));
        const filteredEvents = data.filter(singleEvent => singleEvent.companyId === companyId);
        
        if (filteredEvents.length > 0) {
          setEvents(filteredEvents[filteredEvents.length-1]);
        }
        
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='Employee_Notifications_Container'>
      <section className='Employee_Notifications_Message'>
        <h3>JOHN OLOO</h3>
        <h2>MESSAGE FOR DEVELOPERS</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, omnis, dolorum exercitationem illum quos sunt dicta minus maxime tempora aperiam saepe quas impedit amet iste?</h3>
      </section>
      
      <section className='Employee_Notifications_Event'>
        {isLoading ? (
          <h3>Loading event information...</h3>
        ) : error ? (
          <h3>Error loading events: {error}</h3>
        ) : events ? (
          <>
            <h3 id='eventHeader'>{events.title}</h3>
            <h3>{events.description}</h3>
          </>
        ) : (
          <h3>No events available</h3>
        )}
      </section>
    </div>
  );
};

export default Employee_Alerts;