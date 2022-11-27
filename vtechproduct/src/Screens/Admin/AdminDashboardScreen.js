import React,{useEffect} from 'react'
import { useNavigate } from 'react-router'
import { useDispatch,useSelector } from 'react-redux'
import { logout } from '../../Store/Reducers/AuthenticationSlice'

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
    <div className='conatiner-fluid m-0 p-0 border border-2 border-warning'>
        <h1>This is the admin dashboard screen</h1>
        <button onClick={()=>{dispatch(logout())}}>Logout</button>
    </div>
  )
}

export default AdminDashboardScreen