import React, { useEffect, useState } from 'react'
import './Employee_Tasks_Pending.css'


const Employee_Tasks_Pending = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch("http://localhost:8080/smartEmployer/tasks", {
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
    <div className='pending_tasks'>
        <span className="pending_tasks_bar">
                <input type="search" placeholder='search' />
            </span>
            <table>
                <thead>
                    <th>#</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                    <th>ASSIGNED ON</th>
                    <th>EXPIRES ON</th>
                </thead>
                <tbody>
                {
                    tasks.map((task)=>(
                   <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td id='descriptor'>{task.description}</td>
                    <td>{task.created}</td>
                    <td>{task.deadline}</td>
                   </tr>
                   ))
                  }

                </tbody>
            </table>
    </div>
  )
}

export default Employee_Tasks_Pending