import React, { useEffect, useState } from 'react'
import './EventsListEmployer.css'
import useSWR from 'swr'

const EventsListEmployer = () => {
    const BASE_URL=import.meta.env.VITE_APP_BASE_URL;
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/events/`, {
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
                setEvents(filteredEvents.reverse());
            } catch (error) {
                console.error("There was a problem fetching the data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='EventsListEmployer'>
            <header>EVENTS</header>
            <section>
                {
                    events.map((event) => (
                        <span key={event.id}>

                            <h1>{event.title}</h1>
                            <h4>{event.description}</h4>
                            <div className="time">
                                <h3><h4>START TIME</h4>:{event.startTime}</h3>
                                <h3><h4>END TIME</h4>:{event.endTime}</h3>
                            </div>

                        </span>
                    ))}
                

            </section>
        </div>
    )
}

export default EventsListEmployer