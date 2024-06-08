import React from 'react'
import './Assets_Folder.css'
import { Link } from 'react-router-dom'


const Assets_Folder = () => {
    return (
        <div className='Assets_View_Controller_Container'>
        <Link to="/Admin/Financials/">INCOMES</Link>
        <Link to="/Admin/Financials/Expenses">EXPENSES</Link>
        </div>
    )
}

export default Assets_Folder