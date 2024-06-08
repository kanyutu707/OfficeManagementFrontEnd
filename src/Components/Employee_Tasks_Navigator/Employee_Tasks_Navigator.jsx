import React from 'react'
import { Link } from 'react-router-dom'
import './Employee_Tasks_Navigator.css'

const Employee_Tasks_Navigator = () => {
  return (
    <div className='employee_navigator'>
    <Link to="/Employee/Tasks/">PENDING</Link>
    <Link to="/Employee/Tasks/Completed">PAST</Link>
    
</div>
  )
}

export default Employee_Tasks_Navigator