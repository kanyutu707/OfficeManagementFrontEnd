import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import './Employee_Productivity.css';

const Employee_Productivity = () => {
    return (
        <div className='Employee_Productivity_Container'>
            {/* BarChart */}
            <section className='Employee_Productivity_Employee'>
                <BarChart
                    series={[
                        { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Series A1' },
                        { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
                        { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
                        { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
                        { data: [10, 6, 5, 8, 9], label: 'Series C1' },
                    ]}
                    width="100%" // Ensure it's responsive to the container
                    height={300} // Set a height to see the chart
                />
                <span className="keyMap">
                    <div id="keyMap">
                        Attended 
                    </div>
                    <div id="keyMap">
                        Not Attended
                    </div>
                </span>
            </section>

            {/* LineChart */}
            <section className='Employee_Productivity_Productivity'>
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                        },
                    ]}
                    width="100%" // Ensure it's responsive to the container
                    height={300} // Set a height to see the chart
                />
            </section>
        </div>
    );
};

export default Employee_Productivity;
