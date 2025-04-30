import React, { useEffect, useState } from 'react';
import './PastLeaves.css';

const PastLeaves = () => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const [leaves, setLeaveData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/leaves`, {
          headers: {
            'Authorization': `${sessionStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        const userId = parseInt(sessionStorage.getItem('loggedIn'));
        const filteredData = data.filter(singleData => singleData.userId === userId);
        setLeaveData(filteredData);
        setError(null);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [BASE_URL]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredLeaves = leaves.filter(leave => 
    leave.status?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    leave.startDate?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    leave.endDate?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className='past-leaves-container'>
      <div className="search-header">
        <h2>Past Leaves</h2>
        <div className="search-wrapper">
          <input 
            type="search" 
            placeholder="Search leaves..." 
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {isLoading ? (
        <div className="loading-message">Loading leaves history...</div>
      ) : error ? (
        <div className="error-message">Error: {error}</div>
      ) : filteredLeaves.length === 0 ? (
        <div className="no-leaves-message">
          {searchTerm ? 'No leaves match your search' : 'No leave history found'}
        </div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeaves.map((leave) => (
                <tr key={leave.id}>
                  <td>{leave.id}</td>
                  <td>{formatDate(leave.startDate)}</td>
                  <td>{formatDate(leave.endDate)}</td>
                  <td>
                    <span className={`status-badge ${leave.status?.toLowerCase()}`}>
                      {leave.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PastLeaves;