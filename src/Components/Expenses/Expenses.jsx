import React, { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";

const Expenses = ({close}) => {
    const [formData, setFormData] = useState({
        "source": "",
        "description": "",
        "amount": "",
        "type":false,
        "company_id":sessionStorage.getItem("companyId")
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/smartEmployer/financials/create", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                },
                credentials: 'include',
                body: JSON.stringify(formData),
            })
            if (!response.ok) {
                console.log(response)
                throw new Error('Network response was not ok')
            }
            const data = await response.json();
            alert("Data submitted successfully");
            window.location.href = window.location.href;
        }
        catch (error) {
            console.error("There was a problem with your post operation", error)
        }
    }
    return (
        <div className='financialFormContainer'>
            <button onClick={close}>
                <IoCloseCircleOutline />

            </button>
            <form className='content' onSubmit={handleSubmit}>
                <section className="form_group">
                    <label htmlFor="">SOURCE</label>
                    <input type="text" placeholder='SOURCE OF THE MONEY' onChange={handleChange} name='source' value={formData.source} />
                </section>
                <section className='form_group'>
                    <label htmlFor="">DESCRIPTION</label>
                    <textarea name="description" id="" rows="10" placeholder='DESCRIPTION OF THE SOURCE' onChange={handleChange} value={formData.description} ></textarea>
                </section>
                <section className="form_group">
                    <label htmlFor="">AMOUNT</label>
                    <input type="number" placeholder='AMOUNT' onChange={handleChange} name='amount' value={formData.amount} />
                </section>
                <button id='submitButton'>SUBMIT</button>
            </form>

        </div>
    )
}

export default Expenses