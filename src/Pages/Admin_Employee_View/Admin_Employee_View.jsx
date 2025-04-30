import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin_Employee_View_Controller from '../../Components/Admin_Employee_View_Controller/Admin_Employee_View_Controller'
import All_Employees from '../../Components/All_Employees/All_Employees'
import Present_Employees from '../../Components/Present_Employees/Present_Employees'
import Leave_Employer_View from '../../Components/Leave_Employer_View/Leave_Employer_View'
import './Admin_Employee_View.css'

const Admin_Employee_View = () => {
  return (
    <div className="adminEmployeeContainer">
      <Admin_Employee_View_Controller/>
      <section className="adminEmployeeContent">
        <Routes>
          <Route index element={<All_Employees/>}/>
          <Route path='/Leave' element={<Leave_Employer_View/>}/>
        </Routes>
      </section>
    </div>
  )
}

export default Admin_Employee_View