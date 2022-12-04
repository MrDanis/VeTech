import React,{useEffect} from 'react'
import { useNavigate } from 'react-router'
import { useDispatch,useSelector } from 'react-redux'
import { logout } from '../../Store/Reducers/AuthenticationSlice'
import Sidebar from '../../Components/Sidebar'
const AdminDashboardScreen = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch= useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    if(user === 'user')
    {
      alert('we are about to move to the home page');
      navigate('/')
    }
  },[user])
  return (
    <div className='conatiner-fluid w-100 m-0 p-0 border border-2 border-warning'>
      <Sidebar></Sidebar>
        
        <button onClick={()=>{dispatch(logout())}}>Logout</button>
    </div>
  )
}

export default AdminDashboardScreen