import React from 'react'
import Employee_Tasks_Navigator from '../../Components/Employee_Tasks_Navigator/Employee_Tasks_Navigator'
import { Routes, Route } from 'react-router-dom'
import Employee_Tasks_Pending from '../../Components/Employee_Tasks_Pending/Employee_Tasks_Pending'
import Employee_Tasks_Completed from '../../Components/Employee_Tasks_Completed/Employee_Tasks_Completed'

const Employee_Tasks = () => {
  return (
    <div>
        <Employee_Tasks_Navigator/>
        <Routes>
            <Route path='/' element={<Employee_Tasks_Pending/>}/>
            <Route path='/Completed' element={<Employee_Tasks_Completed/>}/>
        </Routes>
    </div>
  )
}

export default Employee_Tasks