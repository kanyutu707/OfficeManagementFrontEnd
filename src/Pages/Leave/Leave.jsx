import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './Leave.css';
import CreateLeave from '../CreateLeave/CreateLeave';
import PastLeaves from '../PastLeaves/PastLeaves';

const Leave = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className="leave-container">
      <div className="nav-tabs">
        <Link 
          to="/Employee/leave" 
          className={currentPath === "/Employee/leave" ? "active" : ""}
        >
          Apply for Leave
        </Link>
        <Link 
          to="/Employee/leave/past" 
          className={currentPath === "/Employee/leave/past" ? "active" : ""}
        >
          Leave History
        </Link>
      </div>
      
      <section className="content-section">
        <Routes>
          <Route path="/" element={<CreateLeave />} />
          <Route path="/past" element={<PastLeaves />} />
        </Routes>
      </section>
    </div>
  );
};

export default Leave;