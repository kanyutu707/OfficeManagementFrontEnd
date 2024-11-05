import React, { useEffect, useState } from 'react'
import "./Contacts.css"

const Contacts = () => {
    const BASE_URL=import.meta.env.VITE_APP_BASE_URL;
    const [employees, setEmployees]=useState([]);

    useEffect(() => {
        const fetchData=async()=>{
           try{
            const response=await fetch(`${BASE_URL}/user/get_all`, {
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
               const loggedIn=parseInt(sessionStorage.getItem('loggedIn'));
            const filteredEmployees = data.filter(singleEmployee => (singleEmployee.company_id === companyId && singleEmployee.id!==loggedIn));
            setEmployees(filteredEmployees.reverse());
                
            }catch(error){
                console.error("There was a problem fetching the data: ", error);
        
           } 
        };
        fetchData();
    }, []);
  return (
    <div className='ContactsContainer'>
        {employees.map((employee)=>(
             <span className="contactContainer">
             <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="" />
             <h3>{employee.firstName}</h3>
         </span>
        ))}
       
    </div>
  )
}

export default Contacts