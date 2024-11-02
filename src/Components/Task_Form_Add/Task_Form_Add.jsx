import React, { useEffect, useState } from 'react';
import './Task_Form_Add.css';

const Task_Form_Add = () => {
    const [employees, setEmployees] = useState([]);
    const BASE_URL=import.meta.env.VITE_APP_BASE_URL;
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        assigned_to: "",
        created:new Date().toISOString().slice(0, 19).replace('T', ' '),
        deadline: "",
        company_id:parseInt(sessionStorage.getItem("companyId")),
        createdby:parseInt(sessionStorage.getItem('loggedIn'))
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/user/get_all`, {
                    headers: {
                        'Authorization': sessionStorage.getItem('token'),
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch employees');
                }
                const data = await response.json();
                const companyId = parseInt(sessionStorage.getItem('companyId'));
                const filteredEmployees = data.filter(singleEmployee => (singleEmployee.company_id === companyId && singleEmployee.email!==sessionStorage.getItem('email')));
                setEmployees(filteredEmployees.reverse());
            } catch (error) {
                console.error("Error fetching employees: ", error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/task`, {
                method: 'POST',
                headers: {
                    'Authorization': sessionStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to add task');
            }
            const data = await response.json();
            console.log(data);
            alert("Data submitted successfully");
            window.location.href=window.location.href;
        } catch (error) {
            console.error("Error adding task: ", error);
            alert("Failed to add task. Please try again.");
        }
    };

    return (
        <div className='taskFormContainer'>
            <form onSubmit={handleSubmit}>
                <header>NEW TASK</header>
                <span className="form_group">
                    <label htmlFor="title">TITLE</label>
                    <input type="text" id="title" placeholder='TITLE' onChange={handleChange} name='title' value={formData.title} required />
                </span>
                <span className='form_group'>
                    <label htmlFor="description">DESCRIPTION</label>
                    <textarea id="description" rows={5} onChange={handleChange} name='description' value={formData.description} required></textarea>
                </span>
                <span className='form_group'>
                    <label htmlFor="assigned_to">ASSIGN TO</label>
                    <select id="assigned_to" onChange={handleChange} name='assigned_to' value={formData.assigned_to} required>
                        <option value="">Select Employee</option>
                        {employees.map(employee => (
                            <option key={employee.id} value={employee.id}>{employee.firstName + " " + employee.lastName}</option>
                        ))}
                    </select>
                </span>
                <span className='form_group'>
                    <label htmlFor="deadline">COMPLETE BY</label>
                    <input type="datetime-local" id="deadline" onChange={handleChange} name='deadline' value={formData.deadline} required />
                </span>
                <button type='submit'>ADD</button>
            </form>
        </div>
    );
}

export default Task_Form_Add;
