import React, { useEffect, useState } from 'react'

const PastLeaves = () => {
    const BASE_URL=import.meta.env.VITE_APP_BASE_URL;
    const [leaves, setLeaveData]=useState([]);
    useEffect(() => {
        const fetchData = async () => {
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
                const userId=parseInt(sessionStorage.getItem('loggedIn'));
                const filtereddata=data.filter(singledata=>(singledata.userId===userId ));
                setLeaveData(filtereddata);
            } catch (error) {
                console.error("There was a problem fetching the data:", error);
            }
        };

        fetchData();
    }, []);
  return (
    <div className='pastattendancecontainer'>
    <table>
        <caption>
            <span>PAST LEAVES</span>
            <input type="search" placeholder='input search items'/>
        </caption>
        <thead>
            <th>ID</th>
            <th>START DATE</th>
            <th>END DATE</th>
            <th>STATUS</th>
        </thead>
        <tbody>
            {leaves.map((leave)=>(
                <tr key={leave.id}>
                <td>{leave.id}</td>
                <td>{leave.startDate}</td>
                <td>{leave.endDate}</td>
                <td>{leave.status}</td>
            </tr>
            ))}
            
            
        </tbody>
    </table>
</div>
  )
}

export default PastLeaves