import React,{useEffect} from 'react'
import { useNavigate } from 'react-router'
import { useDispatch,useSelector } from 'react-redux'
import SaleChart from '../../Components/AdminDashboardScreenComponents/SaleChart'
import GenralDisplayInfo from '../../Components/AdminDashboardScreenComponents/GenralDisplayInfo'
import OvierViewSection from '../../Components/AdminDashboardScreenComponents/OvierViewSection'
import ProductsTable from '../../Components/AdminDashboardScreenComponents/ProductsTable'
import { logout } from '../../Store/Reducers/AuthenticationSlice'
import Sidebar from '../../Components/Sidebar'

const AdminDashboardScreen = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch= useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    // wo sab data jo mujy is home page pay show krwana hai wo main isi useEffect main dispatch kru ga takey reload pay bhi koi issue nhi ho mujy
    if(user === 'user')
    {
      alert('we are about to move to the home page');
      navigate('/')
    }
  },[user])
  return (
    <div className='conatiner-fluid w-100 m-0 p-0 border border-0 border-warning'>
      <Sidebar></Sidebar>
      <SaleChart></SaleChart>
      <GenralDisplayInfo></GenralDisplayInfo>
      <OvierViewSection></OvierViewSection>
      <ProductsTable></ProductsTable>
    </div>
  )
}

export default AdminDashboardScreen