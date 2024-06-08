import React from 'react';
import './Topbar.css';
import { FaUser } from "react-icons/fa";
import { IoMdSettings, IoIosNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className='topBarContainer'>
        <span className="topBarWriting">
            <h5>Admin /<h4>Dashboard</h4></h5>
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
        <Link to="/Admin/chats"><IoIosNotifications/></Link>
        <Link to="/Admin/Account"> <IoMdSettings /></Link>
        </section>
    </div>
  )
}

export default Topbar