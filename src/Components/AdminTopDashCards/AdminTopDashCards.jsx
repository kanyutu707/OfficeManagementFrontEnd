import React, { useEffect, useState } from 'react';
import './AdminTopDashCards.css';
import { BsPeopleFill } from "react-icons/bs";
import { FcVoicePresentation } from "react-icons/fc";
import { MdLeaderboard } from "react-icons/md";
import { FcLeave } from "react-icons/fc";

const AdminTopDashCards = () => {
  const [data, setData] = useState([]);
  const [rowCount, setRowCount] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
      const response=await fetch("http://localhost:3000/smartEmployer/user/get_all",{
        headers: {
          'Authorization': `${sessionStorage.getItem('token')}` 
        }, 
      credentials:'include'
      });
      if (!response.ok){
        throw new Error('Network response was not ok');
      }
  
      const jsonData = await response.json();
      const companyId = parseInt(sessionStorage.getItem('companyId'));
      const filteredData = jsonData.filter(singleCompany => singleCompany.company_id === companyId);
      setData(filteredData);
      
      setRowCount(jsonData.length); 
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  return (
    <div className='AdminTopDashCards'>
        <section className="AdminTopDashCard">
                <span className='AdminTopDashDetails'>
                    <h3>TOTAL EMPLOYEES</h3>
                    <h2>{rowCount}</h2>
                </span>
                <span className="AdminTopDashIcons">
                <BsPeopleFill  className='custom_icon'/>
                </span>
        </section>
        <section className="AdminTopDashCard">
        <span className='AdminTopDashDetails'>
                    <h3>PRESENT</h3>
                    <h2>10</h2>
                </span>
                <span className="AdminTopDashIcons">
                <FcVoicePresentation className='custom_icon'/>
                </span>
        </section>
        <section className="AdminTopDashCard">
        <span className='AdminTopDashDetails'>
                    <h3>LEAVE REQUESTS</h3>
                    <h2>20</h2>
                </span>
                <span className="AdminTopDashIcons">
                <FcLeave  className='custom_icon'/>
                </span>
        </section>
        <section className="AdminTopDashCard">
        <span className='AdminTopDashDetails'>
                    <h3>LEADERBOARD</h3>
                    <h2>30%</h2>
                </span>
                <span className="AdminTopDashIcons">
                <MdLeaderboard  className='custom_icon'/>
                </span>
        </section>
    </div>
  )
}

export default AdminTopDashCards