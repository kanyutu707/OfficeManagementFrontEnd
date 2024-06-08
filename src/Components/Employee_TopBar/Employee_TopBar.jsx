import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoIosNotifications, IoMdSettings } from 'react-icons/io'
import { Link } from 'react-router-dom'


const Employee_TopBar = () => {
  return (
    <div className='topBarContainer'>
        <span className="topBarWriting">
            <h5>Employee /<h4>Dashboard</h4></h5>
            <h3>Dashboard</h3>
        </span>
        <section className="topBarControls">
        <span className="topBarSearch">
            <input type="search" placeholder='search...' />
        </span>
        <Link to="/SignIn"><span className="topBarPerson">
        <FaUser />
        <h3>Sign Out</h3>
        </span></Link>
        <Link to="/Employee/chats"><IoIosNotifications/></Link>
        <Link to="/Employee/Account"> <IoMdSettings /></Link>
        </section>
    </div>
  )
}

export default Employee_TopBar