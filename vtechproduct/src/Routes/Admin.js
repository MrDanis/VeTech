import React,{useEffect} from 'react'
import AdminDashboardScreen from '../Screens/Admin/AdminDashboardScreen'
import {BrowserRouter as Router,Routes,Route,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
const Admin = () => {
  const user = useSelector((state) => state.auth.user)
  const navigate = useNavigate();
  useEffect(()=>{
    console.log('user is ',user)
    // navigate('/admindashboard')
  },[user])
  return (
      <Router>
        <Routes>
          <Route path='/admindashboard' element={<AdminDashboardScreen></AdminDashboardScreen>}></Route>
        </Routes>
     </Router>
   
  )
}

export default Admin