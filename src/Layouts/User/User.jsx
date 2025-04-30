import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Employee_SIdebar from '../../Components/Employee_SIdebar/Employee_SIdebar';
import Chats from '../../Pages/Chats/Chats';
import './User.css';
import Account from '../../Pages/Account/Account';
import Employee_Dashboard from '../../Pages/Employee_Dashboard/Employee_Dashboard';
import Employee_Tasks from '../../Pages/Employee_Tasks/Employee_Tasks';
import Employee_Events from '../../Pages/Employee_Events/Employee_Events';
import Employee_Chat from '../../Pages/Employee_Chat/Employee_Chat';
import Employee_TopBar from '../../Components/Employee_TopBar/Employee_TopBar';
import Attendance from '../../Pages/Attendance/Attendance';
import Leave from '../../Pages/Leave/Leave';

const User = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  useEffect(() => {
    const role = sessionStorage.getItem('role');
    if (role !== 'Employee') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className={`Employee_Container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
      <Employee_SIdebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      <div className="Employee_right_Side">
        <Employee_TopBar />
        <div className="Employee_content">
          <Routes>
            <Route index element={<Employee_Dashboard />} />
            <Route path="/chats/*" element={<Chats />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/attendance/*" element={<Attendance />} />
            <Route path="/leave/*" element={<Leave />} />
            <Route path="/Tasks/*" element={<Employee_Tasks />} />
            <Route path="/Events" element={<Employee_Events />} />
            <Route path="/Employee/chats" element={<Employee_Chat />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default User;