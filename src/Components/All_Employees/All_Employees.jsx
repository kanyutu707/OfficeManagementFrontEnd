import React, {useEffect, useState } from 'react'
import { CiUnread } from 'react-icons/ci'
import './All_Employees.css'
import Popup from 'reactjs-popup'

import AddEmployee from '../AddEmployee/AddEmployee';

const All_Employees = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [employees, setEmployees]=useState([]);

    useEffect(() => {
        const fetchData=async()=>{
           try{
            const response=await fetch("http://localhost:8080/smartEmployer/user/get_all", {
                headers:{
                    'Authorization':`${sessionStorage.getItem('token')}`,
                    'Content-Type':'application/json'
                }
            });
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                const data=await response.json();
                console.log(data)
               const companyId = parseInt(sessionStorage.getItem('companyId')); // Parse companyId to integer
            const filteredEmployees = data.filter(singleEmployee => singleEmployee.company_id === companyId);
            setEmployees(filteredEmployees.reverse());
                
            }catch(error){
                console.error("There was a problem fetching the data: ", error);
        
           } 
        };
        fetchData();
    }, []);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <div className='All_Employees'>
            <span className="all_employees_bar">
                <input type="search" placeholder='search' />
                <button onClick={openModal}>ADD</button>
                <Popup open={isOpen} onClose={closeModal} modal nested>
                    <AddEmployee close={closeModal} />
                </Popup>
            </span>

            <table>

                <thead>
                    <th>#</th>
                    <th>EMPLOYEE NUMBER</th>
                    <th>IMAGE</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>POSITION</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                </thead>
                <tbody>
                {employees.map((employee)=>(
                          <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.employeeNumber}</td>
                        <td></td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        
                        <td>{employee.position}</td>
                        <td>{employee.status}</td>
                        <td>
                            <CiUnread />
                        </td>
                    </tr>


                    ))}
                  
                   
                </tbody>
            </table>
        </div>
    )
}

export default All_Employees