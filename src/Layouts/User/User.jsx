import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Employee_SIdebar from '../../Components/Employee_SIdebar/Employee_SIdebar'
import Chats from '../../Pages/Chats/Chats'
import './User.css'
import { useNavigate } from 'react-router-dom';
import Account from '../../Pages/Account/Account'
import Employee_Dashboard from '../../Pages/Employee_Dashboard/Employee_Dashboard'
import Employee_Tasks from '../../Pages/Employee_Tasks/Employee_Tasks'
import Employee_Events from '../../Pages/Employee_Events/Employee_Events'
import Employee_Chat from '../../Pages/Employee_Chat/Employee_Chat'
import Employee_TopBar from '../../Components/Employee_TopBar/Employee_TopBar'
const User = () => {
  
  return (
      
    <>
      {sessionStorage.getItem('role')==='Employee'?(
        <div className='Employee_Container'>
      
        <Employee_SIdebar/>
        <section className="Employee_right_Side">
          <Employee_TopBar/>
          <div className="Employee_content">
          <Routes>
            <Route index element={<Employee_Dashboard/>}/>
            <Route path='/chats/*' element={<Chats/>}/>
            <Route path='/Account' element={<Account/>}/>
            <Route path='/Tasks/*' element={<Employee_Tasks/>}/>
            <Route path='/Events' element={<Employee_Events/>}/>
            <Route path='/Employee/chats' element={<Employee_Chat/>}/>
  
          </Routes>
          </div>
        </section>
      </div>
      ):
      window.location.href='/'
      }
    </>
    
    
  )
}

export default User