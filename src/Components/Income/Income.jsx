import React, { useEffect, useState } from 'react'
import './Income.css'
import Popup from 'reactjs-popup'
import FinancialForm from '../FinancialForm/FinancialForm'


const Income = () => {
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

        <div className='All_Assets'>
            <span className="all_assets_bar">
                <input type="search" placeholder='search' />
                <button onClick={openModal}>ADD</button>
                <Popup open={isOpen} onClose={closeModal} modal nested>
                    <FinancialForm close={closeModal} />
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
                        financial.type ? (
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

export default Income