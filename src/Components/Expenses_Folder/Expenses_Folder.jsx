import React, { useEffect, useState } from 'react'
import './Expenses_Folder.css';
import Expenses from '../Expenses/Expenses';
import Popup from 'reactjs-popup'


const Expenses_Folder = () => {
    const [financials, setFinancials] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/smartEmployer/financials/get_all", {
                    headers: {
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                
                setFinancials(data);
            } catch (error) {
                console.error("There was a problem fetching the data:", error);
            }
        };

        fetchData();
    }, []);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <div className='All_Expenses'>
            <span className="all_expenses_bar">
                <input type="search" placeholder='search' />
                
                <button onClick={openModal}>ADD</button>
                <Popup open={isOpen} onClose={closeModal} modal nested>
                    <Expenses close={closeModal} />
                </Popup>
            </span>

            <table>

                <thead>
                    <th>#</th>

                    <th>SOURCE</th>
                    <th>DESCRIPTION</th>
                    <th>AMOUNT</th>

                    <th>ACTION</th>
                </thead>
                <tbody>
                    {financials.map((financial) =>
                        !financial.type ? (
                            <tr key={financial.id}>
                                <td>{financial.id}</td>
                                <td>{financial.source}</td>
                                <td>{financial.description}</td>
                                <td>{financial.amount}</td>
                                <td>hello</td>
                            </tr>
                        ) : null
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Expenses_Folder