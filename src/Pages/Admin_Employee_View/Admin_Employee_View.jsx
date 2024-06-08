import React from 'react'
import Admin_Employee_View_Controller from '../../Components/Admin_Employee_View_Controller/Admin_Employee_View_Controller'
import { Route, Routes } from 'react-router-dom'
import All_Employees from '../../Components/All_Employees/All_Employees'
import Present_Employees from '../../Components/Present_Employees/Present_Employees'
import Admin_Employee_Leaderboard from '../../Components/Admin_Employee_Leaderboard/Admin_Employee_Leaderboard'
import Leave_Employer_View from '../../Components/Leave_Employer_View/Leave_Employer_View'


const Admin_Employee_View = () => {
  return (
    <div>
        <Admin_Employee_View_Controller/>
        <section>
        <Routes>
          
          <Route index element={<All_Employees/>}/>
          <Route path='/Present' element={<Present_Employees/>}/>
          <Route path='/Leaderboard' element={<Admin_Employee_Leaderboard/>}/>
          <Route path='/Leave' element={<Leave_Employer_View/>}/>
      </Routes>
        </section>
    </div>
  )
}

export default Admin_Employee_View