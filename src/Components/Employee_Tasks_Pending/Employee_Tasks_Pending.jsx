import React, { useEffect, useState } from 'react';
import './Employee_Tasks_Pending.css';

const Employee_Tasks_Pending = () => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/task`, {
          headers: {
            'Authorization': `${sessionStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        const userId = parseInt(sessionStorage.getItem('userId'));
        const filteredTasks = data.filter(singleTask => singleTask.assigned_to === userId);
        setTasks(filteredTasks.reverse());
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
  
  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
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
    <div className='pending_tasks'>
      <span className="pending_tasks_bar">
        <input 
          type="search" 
          placeholder='Search tasks...' 
          value={searchTerm}
          onChange={handleSearch}
        />
      </span>
      
      {isLoading ? (
        <div className="tasks-loading">Loading tasks...</div>
      ) : error ? (
        <div className="no-tasks-message">Error: {error}</div>
      ) : filteredTasks.length === 0 ? (
        <div className="no-tasks-message">
          {searchTerm ? 'No tasks match your search' : 'No pending tasks found'}
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>ASSIGNED ON</th>
              <th>EXPIRES ON</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td id='descriptor'>{task.description}</td>
                <td>{formatDate(task.created)}</td>
                <td>{formatDate(task.deadline)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Employee_Tasks_Pending;