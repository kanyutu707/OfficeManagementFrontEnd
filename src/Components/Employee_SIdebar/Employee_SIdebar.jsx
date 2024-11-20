import React from 'react'
import { FaClock, FaTasks } from 'react-icons/fa'
import { MdEventSeat, MdRequestPage } from 'react-icons/md'
import { RiDashboardHorizontalLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './Employee_Sidebar.css'


const Employee_SIdebar = () => {
  return (
    <div className='EmployeeSideBar'>
      <header>HELLO</header>
      <span className="navigations">
        <Link to="/Employee/"><RiDashboardHorizontalLine /> DASHBOARD</Link>
        <Link to="/Employee/Tasks"><FaTasks />TASKS</Link>
        <Link to="/Employee/Events"><MdEventSeat /> EVENTS</Link>
        
        <Link to='/Employee/leave'><MdRequestPage/> LEAVE</Link>
      </span>
    </div>
  )
}

export default Employee_SIdebar