import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {BrowserRouter as Router,Routes,Route,Navigate,useNavigate} from 'react-router-dom'
import Authentication from '../Screens/Punblic/Authentication'
import AdminDashboardScreen from '../Screens/Admin/AdminDashboardScreen'
import NotAllowed from '../CommonComponents/NotAllowed'
const Index = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className='container-fluid m-0 p-0 border border-0 border-dark d-flex align-items-center justify-content-center' style={{minHeight:'100vh'}}>
     
      {
       
          <Router>
            <Routes>
              <Route path='/' element={<Authentication componentType='singUp'></Authentication>}></Route>
              <Route path='/Login' element={<Authentication componentType='login'></Authentication>}></Route>
              <Route path='/Verification' element={<Authentication componentType='verification'></Authentication>}></Route>
               <Route path='/admindashboard' element={<NotAllowed role={user}>
                <AdminDashboardScreen></AdminDashboardScreen>
               </NotAllowed>}></Route>
             </Routes>
            </Router>
     
      }
    </div>
  )
}

export default Index