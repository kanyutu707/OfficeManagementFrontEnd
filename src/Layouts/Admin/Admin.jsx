
import Admin_Dashboard from '../../Pages/Admin_Dashboard/Admin_Dashboard'
import {Routes, Route } from 'react-router-dom'
import Topbar from '../../Components/Topbar/Topbar'
import Admin_Sidebar from '../../Components/Admin_Sidebar/Admin_Sidebar'
import './Admin.css'
import Chats from '../../Pages/Chats/Chats'
import Admin_Employee_View from '../../Pages/Admin_Employee_View/Admin_Employee_View'
import EventsEmployer from '../../Pages/EventsEmployer/EventsEmployer'
import Account from '../../Pages/Account/Account'
import Finances from '../../Pages/Finances/Finances'
import Admin_Tasks from '../../Pages/Admin_Tasks/Admin_Tasks'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
const Admin = () => {
     const navigate=useNavigate()
  const [tokenPresent, setTokenPresent] = useState(false);
  const [userRole, setUserRole]=useState('');

  useEffect(() => {
    const token=sessionStorage.getItem('token');
    const role=sessionStorage.getItem('role');

    if(token){
      setTokenPresent(true);
    }

    if(role){
      setUserRole(role);
    }
  }, [])
  return (
      <>
           
            {tokenPresent && userRole==='Admin'?(
               <>

    <div className='admin_container'>
      <Admin_Sidebar/>
      <section className="admin_right_side">
        <Topbar/>
        <div className="admin_content">
        <Routes>
          
            <Route index element={<Admin_Dashboard/>}/>
            <Route path='/chats/*' element={<Chats/>}/>
            <Route path='/Employee/*' element={<Admin_Employee_View/>}/>
            <Route path='/Financials/*' element={<Finances/>}/>
            <Route path='/Events' element={<EventsEmployer/>}/>
            <Route path='/Account' element={<Account/>}/>
            <Route path='/Tasks' element={<Admin_Tasks/>}></Route>
        </Routes>
        </div>
        </section>
    </div>
       </>
              ):(
            navigate('/SignIn/')
            )

          }
              
        </>    
  
  )
}

export default Admin