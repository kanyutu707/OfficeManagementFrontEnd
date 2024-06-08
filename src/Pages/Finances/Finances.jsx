import React from 'react'
import "./Finances.css"
import Assets_Folder from '../../Components/Assets_Folder/Assets_Folder'
import { Route, Routes } from 'react-router-dom'

import Expenses_Folder from '../../Components/Expenses_Folder/Expenses_Folder'
import Income from '../../Components/Income/Income'

const Finances = () => {
  return (
    <div className='FinancesContainer'>
      <Assets_Folder/>
      <section>
        <Routes>
          
          <Route index element={<Income/>}/>
          <Route path='/Expenses' element={<Expenses_Folder/>}/>
          
      </Routes>
        </section>
    </div>
  )
}

export default Finances