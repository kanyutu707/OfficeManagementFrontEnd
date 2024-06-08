import React from 'react'
import { Link } from 'react-router-dom'
import "./Admin_Employee_View_Controller.css"

const Admin_Employee_View_Controller = () => {
  return (
    <div className='Admin_Employee_View_Controller_Container'>
        <Link to="/Admin/Employee/">ALL</Link>
        <Link to="/Admin/Employee/Present">PRESENT</Link>
        <Link to="/Admin/Employee/Leave">LEAVE REQUESTS</Link>
        <Link to="/Admin/Employee/Leaderboard">LEADERBOARD</Link>
    </div>
  )
}

export default Admin_Employee_View_Controller