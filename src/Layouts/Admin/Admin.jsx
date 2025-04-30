import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Admin_Dashboard from '../../Pages/Admin_Dashboard/Admin_Dashboard';
import Chats from '../../Pages/Chats/Chats';
import Admin_Employee_View from '../../Pages/Admin_Employee_View/Admin_Employee_View';
import EventsEmployer from '../../Pages/EventsEmployer/EventsEmployer';
import Account from '../../Pages/Account/Account';
import Finances from '../../Pages/Finances/Finances';
import Admin_Tasks from '../../Pages/Admin_Tasks/Admin_Tasks';
import Topbar from '../../Components/Topbar/Topbar';
import Admin_Sidebar from '../../Components/Admin_Sidebar/Admin_Sidebar';
import './Admin.css';

const Admin = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  useEffect(() => {
    const role = sessionStorage.getItem('role');
    if (role !== 'Admin') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className={`admin_container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
      <Admin_Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      <div className="admin_right_side">
        <Topbar />
        <div className="admin_content">
          <Routes>
            <Route index element={<Admin_Dashboard />} />
            <Route path="/chats/*" element={<Chats />} />
            <Route path="/Employee/*" element={<Admin_Employee_View />} />
            <Route path="/Financials/*" element={<Finances />} />
            <Route path="/Events" element={<EventsEmployer />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Tasks" element={<Admin_Tasks />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
