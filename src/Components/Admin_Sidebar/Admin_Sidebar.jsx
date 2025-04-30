import { Link } from 'react-router-dom';
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { FaBars, FaPeopleGroup } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { MdEventSeat } from "react-icons/md";
import { useState } from 'react';
import "./Admin_Sidebar.css";

const Admin_Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'expanded' : 'collapsed'}`}>
      <header>
        <FaBars onClick={toggle} className="toggle-icon" />
      </header>
      <div className="navigations">
        <Link to="/Admin/" className="nav-link">
          <RiDashboardHorizontalLine className="nav-icon" />
          {isOpen && <span className="nav-text">DASHBOARD</span>}
        </Link>
        <Link to="/Admin/Employee" className="nav-link">
          <FaPeopleGroup className="nav-icon" />
          {isOpen && <span className="nav-text">EMPLOYEES</span>}
        </Link>
        <Link to="/Admin/Financials" className="nav-link">
          <FaHandHoldingDollar className="nav-icon" />
          {isOpen && <span className="nav-text">FINANCIALS</span>}
        </Link>
        <Link to="/Admin/Tasks" className="nav-link">
          <FaTasks className="nav-icon" />
          {isOpen && <span className="nav-text">TASKS</span>}
        </Link>
        <Link to="/Admin/Events" className="nav-link">
          <MdEventSeat className="nav-icon" />
          {isOpen && <span className="nav-text">EVENTS</span>}
        </Link>
      </div>
    </div>
  );
};

export default Admin_Sidebar;