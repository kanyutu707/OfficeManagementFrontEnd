import React from 'react'
import EventsListEmployer from '../../Components/EventsListEmployer/EventsListEmployer'
import EventsEmployerForm from '../../Components/EventsEmployerForm/EventsEmployerForm'
import './EventsEmployer.css'
const EventsEmployer = () => {
  return (
    <div className='EventsEmployer'>
        <EventsListEmployer/>
        <EventsEmployerForm/>
    </div>
  )
}

export default EventsEmployer