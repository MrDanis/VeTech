import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {BrowserRouter as Router,Routes,Route,Navigate,useNavigate} from 'react-router-dom'
import Authentication from '../Screens/Punblic/Authentication'
import AdminDashboardScreen from '../Screens/Admin/AdminDashboardScreen'
import NotAllowed from '../CommonComponents/NotAllowed'
import AdminMainView from '../Views/AdminMainView'
const Index = () => {
  const user = useSelector((state) => state.auth.user);
  return ( 
    <div className='container-fluid m-0 p-0 border border-0 border-dark d-flex align-items-center justify-content-center' >
     
      {
       
          <Router>
            <Routes>
              {/* Public Routes without Auth */}
              <Route path='/' element={<Authentication componentType='singUp'></Authentication>}></Route>
              <Route path='/Login' element={<Authentication componentType='login'></Authentication>}></Route>
              <Route path='/Verification' element={<Authentication componentType='verification'></Authentication>}></Route>
               {/* Admin Routes with auth Start */}
               <Route path='/admindashboard' element={<NotAllowed role={user}>
                <AdminMainView component='dahsboard'></AdminMainView>
               </NotAllowed>}></Route>
               <Route path='/admin/products' element={<NotAllowed role={user}>
                <AdminMainView component='products'></AdminMainView>
               </NotAllowed>}></Route>
               <Route path='/admin/orders' element={<NotAllowed role={user}>
                <AdminMainView component='orders'></AdminMainView>
               </NotAllowed>}></Route>
               <Route path='/admin/orders/pending' element={<NotAllowed role={user}>
                <AdminMainView component='orders'></AdminMainView>
               </NotAllowed>}></Route>
               <Route path='/admin/stores' element={<NotAllowed role={user}>
                <AdminMainView component='stores'></AdminMainView>
               </NotAllowed>}></Route>
               <Route path='/admin/stores/add' element={<NotAllowed role={user}>
                <AdminMainView component='stores'></AdminMainView>
               </NotAllowed>}></Route>
               <Route path='/admin/stores/edit' element={<NotAllowed role={user}>
                <AdminMainView component='stores'></AdminMainView>
               </NotAllowed>}></Route>
               <Route path='/admin/profile' element={<NotAllowed role={user}>
                <AdminMainView component='profile'></AdminMainView>
               </NotAllowed>}></Route>
               <Route path='/admin/settings' element={<NotAllowed role={user}>
                <AdminMainView component='settings'></AdminMainView>
               </NotAllowed>}></Route>
               <Route path='/admin/addproduct' element={<NotAllowed role={user}>
                <AdminMainView component='Add Products'></AdminMainView>
               </NotAllowed>}></Route>
               {/* Admin Routes with auth Ends */}
             </Routes>
            </Router>
     
      }
    </div>
  )
}

export default Index