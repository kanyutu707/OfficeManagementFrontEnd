import React from 'react'
import './Admin_Tasks.css'
import Task_List_Container from '../../Components/Task_List_Container/Task_List_Container'
import Task_Form_Add from '../../Components/Task_Form_Add/Task_Form_Add'

const Admin_Tasks = () => {
  return (
    <div className='Admin_Tasks_Container'>
      <Task_List_Container/>
      <Task_Form_Add/>
    </div>
  )
}

export default Admin_Tasks