import React from 'react'
import { FaUser } from "react-icons/fa";
import './BestPerfomance.css';

const BestPerfomance = () => {
  return (
    <div className='BestPerfomanceContainer'>
        <section className="BestPerfomanceTable">

            <table>
                <caption>BEST PERFORMERS</caption>
                <thead>
                    <th>NAME</th>
                    <th>ICON</th>
                    <th>POSITION</th>
                    <th>RATINGS</th>
                </thead>
                <tbody>
                    <tr>
                        <td>JOHN OLOO</td>
                        <td><FaUser/></td>
                        <td>C.E.O</td>
                        <td>50%</td>
                    </tr>
                    <tr>
                        <td>JOHN OLOO</td>
                        <td><FaUser/></td>
                        <td>C.E.O</td>
                        <td>50%</td>
                    </tr>
                    <tr>
                        <td>JOHN OLOO</td>
                        <td><FaUser/></td>
                        <td>C.E.O</td>
                        <td>50%</td>
                    </tr>
                    <tr>
                        <td>JOHN OLOO</td>
                        <td><FaUser/></td>
                        <td>C.E.O</td>
                        <td>50%</td>
                    </tr>
                    <tr>
                        <td>JOHN OLOO</td>
                        <td><FaUser/></td>
                        <td>C.E.O</td>
                        <td>50%</td>
                    </tr>
                </tbody>
            </table>

        </section>
        <section className="siteSummary">
            <header>SUMMARY</header>
            <div className="summaries">
                <span className='summary'>
                <h3>$3000, LoggedIn</h3>
                <h4>22 DEC 7:14PM</h4>
                </span>
                <span className='summary'>
                <h3>$3000, Recorded</h3>
                <h4>22 DEC 7:14PM</h4>
                </span>
                <span className='summary'>
                <h3>$3000, LoggedIn</h3>
                <h4>22 DEC 7:14PM</h4>
                </span>
                <span className='summary'>
                <h3>$3000, Recorded</h3>
                <h4>22 DEC 7:14PM</h4>
                </span>
                <span className='summary'>
                <h3>$3000, LoggedIn</h3>
                <h4>22 DEC 7:14PM</h4>
                </span>
            </div>
        </section>
    </div>
  )
}

export default BestPerfomance