import React, { useEffect, useState } from 'react'
import './Income.css'
import Popup from 'reactjs-popup'
import FinancialForm from '../FinancialForm/FinancialForm'


const Income = () => {
    const [financials, setFinancials] = useState([]);
    const BASE_URL=import.meta.env.VITE_APP_BASE_URL;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/finance/`, {
                    headers: {
                        'Authorization': `${sessionStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data)
                const companyId=parseInt(sessionStorage.getItem('companyId'));
                const filtereddata=data.filter(singledata=>(singledata.type.data==1 && singledata.company_id===companyId));
                setFinancials(filtereddata);
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