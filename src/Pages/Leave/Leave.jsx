import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './Leave.css'
import CreateLeave from '../CreateLeave/CreateLeave'
import PastLeaves from '../PastLeaves/PastLeaves'

const Leave = () => {
  return (
    <div className='leavecontainer'>
        <span className="buttonsection">
        <Link to="/Employee/leave">APPLY</Link>
        <Link to="/Employee/leave/past">PAST</Link>
        </span>
        <section>
            <Routes>
                <Route path='/' element={<CreateLeave/>}/>
                <Route path='/past' element={<PastLeaves/>}/>
            </Routes>
        </section>
    </div>
  )
}

export default Leave