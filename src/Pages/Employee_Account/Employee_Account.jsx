import React, { useEffect, useState } from 'react'

const Employee_Account = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(`http://localhost:3000/user/get/${encodeURIComponent(sessionStorage.getItem('userId'))}`, {
                  headers: {
                      'Authorization': `${sessionStorage.getItem('token')}`,
                      'Content-Type': 'application/json'
                  }
              });
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setUser(data);
          } catch (error) {
              console.error("There was a problem fetching the data:", error);
          }
      };

      fetchData();
  }, []);
  return (
    
    <div className='AccountContainer'>
        <img src="data:image/jpeg;base64,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" alt="" srcset="" />
        {
            
        <section className="userDetails" key={user.id}>
          

           
            <span><h3>FIRST NAME</h3> {user.firstName}</span>
            <span><h3>LAST NAME NAME</h3> {user.lastName}</span>
            <span><h3>EMPLOYEE NUMBER</h3> {user.employeeNumber}</span>
            <span><h3>EMAIL</h3> {user.email}</span>
            <span><h3>AGE</h3> {user.position}</span>
            <span><h3>PHONE NUMBER</h3> {user.image}</span>
        </section>
     
    }
    </div>
  )
}

export default Employee_Account