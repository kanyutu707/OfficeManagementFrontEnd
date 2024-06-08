import React from 'react'
import { Link } from 'react-router-dom'
import "./Admin_Sidebar.css"
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";

import { MdEventSeat } from "react-icons/md";


const Admin_Sidebar = () => {
  return (
    <div className='sideBar'>
      <header>HELLO</header>
      <span className="navigations">
        <Link to="/Admin/"><RiDashboardHorizontalLine /> DASHBOARD</Link>
        <Link to="/Admin/Employee"><FaPeopleGroup /> EMPLOYEES</Link>
        <Link to="/Admin/Financials"><FaHandHoldingDollar />FINANCIALS</Link>
        <Link to="/Admin/Tasks"><FaTasks />TASKS</Link>
        <Link to="/Admin/Events"><MdEventSeat /> EVENTS</Link>
      </span>
    </div>
  )
}

export default Admin_Sidebar