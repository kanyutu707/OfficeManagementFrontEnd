import React from 'react';
import { FaTasks } from 'react-icons/fa';
import { MdEventSeat, MdRequestPage } from 'react-icons/md';
import { RiDashboardHorizontalLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import './Employee_Sidebar.css';

const Employee_SIdebar = ({ isExpanded = true, toggleSidebar }) => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <div className='EmployeeSideBar'>
      <header>
        {isExpanded ? 'DASHBOARD' : 'DB'}
        {toggleSidebar && (
          <button 
            onClick={toggleSidebar} 
            className="toggle-btn"
            aria-label="Toggle sidebar"
          >
            {isExpanded ? '«' : '»'}
          </button>
        )}
      </header>
      
      <span className="navigations">
        <Link to="/Employee/" className={isActive('/Employee') && location.pathname === '/Employee/' ? 'active' : ''}>
          <RiDashboardHorizontalLine />
          <span>DASHBOARD</span>
        </Link>
        
        <Link to="/Employee/Tasks" className={isActive('/Employee/Tasks') ? 'active' : ''}>
          <FaTasks />
          <span>TASKS</span>
        </Link>
        
        <Link to="/Employee/Events" className={isActive('/Employee/Events') ? 'active' : ''}>
          <MdEventSeat />
          <span>EVENTS</span>
        </Link>
        
        <Link to='/Employee/leave' className={isActive('/Employee/leave') ? 'active' : ''}>
          <MdRequestPage />
          <span>LEAVE</span>
        </Link>
      </span>
    </div>
  );
};

export default Employee_SIdebar;