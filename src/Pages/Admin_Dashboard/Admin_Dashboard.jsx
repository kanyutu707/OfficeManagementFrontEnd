import React from 'react'
import './Admin_Dashboard.css'
import Admin_Sidebar from '../../Components/Admin_Sidebar/Admin_Sidebar'
import Topbar from '../../Components/Topbar/Topbar'
import AdminTopDashCards from '../../Components/AdminTopDashCards/AdminTopDashCards'
import Admin_Notifications from '../../Components/Notifications/Admin_Notifications'
import Employee_Productivity from '../../Components/Employee_Productivity/Employee_Productivity'
import BestPerfomance from '../../Components/BestPerfomance/BestPerfomance'

const Admin_Dashboard = () => {

  return (

  <>

                  <AdminTopDashCards/>
                <Admin_Notifications/>
                <Employee_Productivity/>
                <BestPerfomance/>
                </>
             
  )
}

export default Admin_Dashboard