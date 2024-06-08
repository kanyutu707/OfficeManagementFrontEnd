import React from 'react';
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from './Pages/SignUp/SignUp';
import Admin from './Layouts/Admin/Admin';
import User from './Layouts/User/User';
import Index from './Pages/Index/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompanyRegister from './Pages/CompanyRegister/CompanyRegister';

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
          <Route path='' element={<Index/>}/>
          <Route path='SignIn' element={<SignIn/>}/>
          <Route path='SignUp' element={<SignUp/>}/>
          <Route path='CompanyRegister' element={<CompanyRegister/>}/>
          <Route path='Admin/*' element={<Admin/>}/>
          <Route path='Employee/*' element={<User/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App