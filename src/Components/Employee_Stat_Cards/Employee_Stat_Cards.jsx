import React from 'react'
import './Employee_Stat_Cards.css'
import { BsPeopleFill } from "react-icons/bs";
import { FcVoicePresentation } from "react-icons/fc";
import { MdLeaderboard } from "react-icons/md";
import { FcLeave } from "react-icons/fc";

const Employee_Stat_Cards = () => {
  return (
    <div className='EmployeeTopDashCards'>
    <section className="EmployeeTopDashCard">
            <span className='EmployeeTopDashDetails'>
                <h3>UPCOMING EVENTS</h3>
                <h2>20</h2>
            </span>
            <span className="EmployeeTopDashIcons">
            <BsPeopleFill  className='custom_icon'/>
            </span>
    </section>
    <section className="EmployeeTopDashCard">
    <span className='EmployeeTopDashDetails'>
                <h3>AVERAGE RATING</h3>
                <h2>10</h2>
            </span>
            <span className="EmployeeTopDashIcons">
            <FcVoicePresentation className='custom_icon'/>
            </span>
    </section>
    <section className="EmployeeTopDashCard">
    <span className='EmployeeTopDashDetails'>
                <h3>ATTENDANCE RATING</h3>
                <h2>20</h2>
            </span>
            <span className="EmployeeTopDashIcons">
            <FcLeave  className='custom_icon'/>
            </span>
    </section>
    <section className="EmployeeTopDashCard">
    <span className='EmployeeTopDashDetails'>
                <h3>TASK RATING</h3>
                <h2>30%</h2>
            </span>
            <span className="EmployeeTopDashIcons">
            <MdLeaderboard  className='custom_icon'/>
            </span>
    </section>
</div>
  )
}

export default Employee_Stat_Cards