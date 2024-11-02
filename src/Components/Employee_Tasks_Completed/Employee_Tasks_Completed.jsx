import React, { useEffect, useState } from 'react'
import './Employee_Tasks_Completed.css'

const Employee_Tasks_Completed = () => {
    const BASE_URL=import.meta.env.VITE_APP_BASE_URL;
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
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
              const userId = parseInt(sessionStorage.getItem('userId')); // Parse companyId to integer
              const filteredTasks = data.filter(singleTask => singleTask.assigned_to === userId);
              setTasks(filteredTasks.reverse());
          } catch (error) {
              console.error("There was a problem fetching the data:", error);
          }
      };

      fetchData();
  }, []);
  return (
    <div className='completed_tasks'>
        <span className="completed_tasks_bar">
                <input type="search" placeholder='search' />
            </span>
            <table>
                <thead>
                    <th>#</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                    <th>ASSIGNED ON</th>
                    <th>STATUS</th>
                </thead>
                <tbody>
                  {
                    tasks.map((task)=>(
                   <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td id='descriptor'>{task.description}</td>
                    <td>{task.created}</td>
                    <td>{task.title}</td>
                   </tr>
                   ))
                  }
                   
                </tbody>
            </table>
    </div>
  )
}

export default Employee_Tasks_Completed