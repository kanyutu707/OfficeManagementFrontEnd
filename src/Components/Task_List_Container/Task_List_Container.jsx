import React, { useEffect, useState } from 'react'
import './Task_List_Container.css'
import { RiRoadMapLine } from "react-icons/ri";



const Task_List_Container = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:80800/smartEmployer/tasks/get_all", {
                    headers: {
                        'Authorization': `${sessionStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTasks(data.reverse());
            } catch (error) {
                console.error("There was a problem fetching the data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='Task_List_Container'>
            <header>TASKS</header>
            <section>
                {
                    tasks.map((task) => (
                        <span key={task.id}>
                            <h1>
                                <h1>{task.title}</h1>
                                <button><RiRoadMapLine /></button>
                            </h1>
                            <h4>{task.description}</h4>
                            <div className="taskDets">
                                <h3><h4>STATUS</h4>: {task.status}</h3>
                                <h3><h4>CREATED ON</h4>:{task.created}</h3>
                                <h3><h4>COMPLETE BY</h4>:{task.deadline}</h3>
                                <h3><h4>ASSIGNED TO </h4>: {task.assigned_to}</h3>
                            </div>

                        </span>
                    )
                    )
                }


            </section>
        </div>
    )
}

export default Task_List_Container