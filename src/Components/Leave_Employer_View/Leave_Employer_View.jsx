import React, { useEffect, useState } from 'react'
import './Leave_Employer_View.css'

const Leave_Employer_View = () => {
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
                const companyId=parseInt(sessionStorage.getItem('companyId'));
                const filtereddata=data.filter(singledata=>(singledata.companyId===companyId && singledata.status==="Applied"));
                setLeaveData(filtereddata);
            } catch (error) {
                console.error("There was a problem fetching the data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='leaveEmployerContainer'>
            <span className="leaveEmployerBar">
                <input type="search" placeholder='Search by employee name or number' />
            </span>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>FULL NAME</th>
                            <th>EMPLOYEE NUMBER</th>
                            <th>APPLICATION DATE</th>
                            <th>START DATE</th>
                            <th>END DATE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaves.map((leave, index)=>(
                            <tr key={leave.id}>
                                <td>{index + 1}</td>
                                <td>JOHN OLOO</td>
                                <td>332VVW</td>
                                <td>{leave.startDate}</td>
                                <td>{leave.endDate}</td>
                                <td>15/4/2020</td>
                                <td className="action-buttons">
                                    <button className="accept-btn">ACCEPT</button>
                                    <button className="reject-btn">REJECT</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leave_Employer_View