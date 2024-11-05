import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import CreateAttendance from '../CreateAttendance/CreateAttendance'
import PastAttendance from '../PastAttendance/PastAttendance'
import './Attendance.css'
const Attendance = () => {
  return (
    <div className='attendancecontainer'>
        <span className="buttonsection">
            <button><Link to="/Employee/attendance/">MARK ATTENDANCE</Link></button>
            <button><Link to="/Employee/attendance/past">PAST ATTENDANCE</Link></button>
        </span>
        <section>
            <Routes>
                <Route path='/' element={<CreateAttendance/>}/>
                <Route path='/past' element={<PastAttendance/>}/>
            </Routes>
        </section>
    </div>
  )
}

export default Attendance