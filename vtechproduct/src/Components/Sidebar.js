import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { login,logout } from '../Store/Reducers/AuthenticationSlice';
import { BsPower,BsWindows,BsFillPersonFill,BsFillLayersFill } from "react-icons/bs";
import { styles } from '../Assets/StylesGlobal';
import {FiLogIn} from "react-icons/fi"
import {AiOutlineSetting} from "react-icons/ai"
import { TbBuildingStore } from "react-icons/tb";
import {MdOutlineStorefront,MdProductionQuantityLimits} from "react-icons/md"
import ThemeButton from '../CommonComponents/ThemeButton';
import mainLogo from '../Assets/images/MainLogo.png'
const Sidebar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [isHumbergerVisible,setisHumbergerVisible]= useState('visible');
  useEffect(()=>{},[])
  return (
    <div className='container-fluid border border-0 border-success shadow position-sticky' style={{height:'100vh'}}>

    <nav className="navbar navbar-expand-lg navbar-light pt-0 py-3 border border-0 border-success" >
    <div className="container-fluid m-0 p-0 px-0 border border-0 border-danger">
    <button className="btn d-block d-md-none shadow border border-0 border-danger" onClick={()=>{setisHumbergerVisible('hidden')}} style={{visibility:isHumbergerVisible}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="w-100 navbar-nav ms-auto mb-2 mb-lg-0 d-none d-md-flex flex-column align-items-center justify-content-center border border-0 border-success" style={{cursor:'pointer'}}>
        <li className="nav-item mt-2 mx-2">
          <img className='img-fluid mt-2 m-0 p-0'  src={mainLogo} alt='text'></img>
        </li>
        <li className="nav-item mt-2 mx-2">
          {/* <Link to={'/'} className="nav-link active" aria-current="page" >Dashboard</Link> */}
          <Link to={'/admindashboard'} className={window.location.pathname.includes('dashboard')?'nav-link fw-bold':'nav-link'} aria-current="page" >Dashboard</Link>
        </li>
        <li className="nav-item mt-2 mx-2">
          <Link to={'/admin/products'} className={window.location.pathname.includes('products')?'nav-link fw-bold':'nav-link'}>Products</Link>
        </li>
        <li className="nav-item mt-2 mx-2">
          <Link to={'/admin/orders'} className={window.location.pathname.includes('orders')?'nav-link fw-bold':'nav-link'}>Orders</Link>
        </li>
        <li className="nav-item mt-2 mx-2">
          <Link to={'/admin/stores'} className={window.location.pathname.includes('stores')?'nav-link fw-bold':'nav-link'}>Stores</Link>
        </li>
        <li className="nav-item mt-2 mx-2">
          <Link to={'/admin/profile'} className={window.location.pathname.includes('profile')?'nav-link fw-bold':'nav-link'}>Profile</Link>
        </li>
        <li className="nav-item mt-2 mx-2">
          <Link to={'/admin/settings'} className={window.location.pathname.includes('settings')?'nav-link fw-bold':'nav-link'}>Settings</Link>
        </li>
     
        {/* <li className="nav-item mx-2">
          <Link to={'/conatct'} className="nav-link"> 
          <ThemeButton btnBgColor={styles.lightTheme.btnColor} btnText="Add Products">

          </ThemeButton>
            
            </Link>
        </li>  */}
        {
         !user?
       <li className="nav-item mx-2" onClick={()=>{dispatch(login())}} style={{cursor:'pointer'}}>
         <span className="nav-link" >SignIn</span>
       </li>:
      
       <li className="d-none nav-item mx-0 d-flex align-items-center justify-content-center " style={{cursor:'pointer'}}>            
       <div className="dropdown position-relative">
         <button className="btn shadow" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'none',outline:'none'}}>
           <FiLogIn></FiLogIn>
         </button>
         <ul className="dropdown-menu shadow py-2 px-3" aria-labelledby="dropdownMenuButton1" style={{marginLeft:'-100px',marginTop:'.5rem',border:'none'}}>
           <li className='mb-1 m-0 p-0'>
           <Link to={'/'} className='m-0 p-0 d-flex align-items-center justify-content-start border-0 text-decoration-none text-dark'>
            <small ><BsWindows/></small><samll className="mx-2" style={{fontSize:'.85rem'}}>Dashboard</samll>
           </Link>
           </li>
           <li className='mb-1 m-0 p-0'>
           <Link to={'/'} className='m-0 p-0 d-flex align-items-center justify-content-start border-0 text-decoration-none text-dark'>
            <small ><MdProductionQuantityLimits/></small><samll className="mx-2" style={{fontSize:'.85rem'}}>Products</samll>
           </Link>
           </li>
           <li className='mb-1 m-0 p-0'>
           <Link to={'/'} className='m-0 p-0 d-flex align-items-center justify-content-start border-0 text-decoration-none text-dark'>
            <small ><MdOutlineStorefront/></small><samll className="mx-2" style={{fontSize:'.85rem'}}>Orders</samll>
           </Link>
           </li>
           <li className='mb-1 m-0 p-0'>
           <Link to={'/'} className='m-0 p-0 d-flex align-items-center justify-content-start border-0 text-decoration-none text-dark'>
            <small ><TbBuildingStore/></small><samll className="mx-2" style={{fontSize:'.85rem'}}>Stores</samll>
           </Link>
           </li>
           <li className='mb-1 m-0 p-0'>
           <Link to={'/'} className='m-0 p-0 d-flex align-items-center justify-content-start border-0 text-decoration-none text-dark'>
            <small ><BsFillLayersFill/></small><samll className="mx-2" style={{fontSize:'.85rem'}}>Profile</samll>
           </Link>
           </li>
           <li className='mb-1 m-0 p-0'>
           <Link to={'/'} className='m-0 p-0 d-flex align-items-center justify-content-start border-0 text-decoration-none text-dark'>
            <small ><AiOutlineSetting/></small><samll className="mx-2" style={{fontSize:'.85rem'}}>Settings</samll>
           </Link>
           </li>
           <li className='m-0 p-0' onClick={()=>{dispatch(logout())}}>
           <Link to={'/'} className='m-0 p-0 d-flex align-items-center justify-content-start border-0 text-decoration-none text-dark'>
            <small ><BsPower/></small><samll className="mx-2" style={{fontSize:'.85rem'}}>Logout</samll>
           </Link>
           </li>
         </ul>
       </div>
     </li>
       }
    </ul>
     {/*User menu in mobile*/}
     <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{width:'50%'}}>
 <div className="offcanvas-header d-flex justify-content-end">
   <h5 className="offcanvas-title d-none" id="offcanvasExampleLabel">Offcanvas</h5>
   <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>{setisHumbergerVisible('visible')}} ></button>
 </div>
 <div className="offcanvas-body">
 <ul className="navbar-nav ms-auto mb-2 mb-lg-0 border border-0 border-success">
  <li>
    <img className='img-fluid m-0 p-0' style={{height:'10rem'}} src={mainLogo} alt='text'></img>
  </li>
           <li className='mb-3 m-0 p-0 fs-2'>
           <Link to={'/'} className='m-0 p-0 d-flex align-items-center justify-content-start border-0 text-decoration-none text-dark'>
            <small ><BsWindows/></small><samll className="mx-2" style={{fontSize:'1.2rem'}}>Dashboard</samll>
           </Link>
           </li>
           <li className='mb-3 m-0 p-0 fs-2'>
           <Link to={'/'} className='m-0 p-0 d-flex align-items-center justify-content-start border-0 text-decoration-none text-dark'>
            <small ><MdProductionQuantityLimits/></small><samll className="mx-2" style={{fontSize:'1.2rem'}}>Products</samll>
           </Link>
           </li>
           <li className='mb-3 m-0 p-0 fs-2'>
           <Link to={'/'} className='m-0 p-0 d-flex align-items-center justify-content-start border-0 text-decoration-none text-dark'>
            <small ><MdOutlineStorefront/></small><samll className="mx-2" style={{fontSize:'1.2rem'}}>Orders</samll>
           </Link>
           </li>
           <li className='mb-3 m-0 p-0 fs-2'>
           <Link to={'/'} className='m-0 p-0 d-flex align-items-center justify-content-start border-0 text-decoration-none text-dark'>
            <small ><TbBuildingStore/></small><samll className="mx-2" style={{fontSize:'1.2rem'}}>Stores</samll>
           </Link>
           </li>
           <li className='mb-3 m-0 p-0 fs-2'>
           <Link to={'/'} className='m-0 p-0 d-flex align-items-center justify-content-start border-0 text-decoration-none text-dark'>
            <small ><BsFillLayersFill/></small><samll className="mx-2" style={{fontSize:'1.2rem'}}>Profile</samll>
           </Link>
           </li>
           <li className='mb-3 m-0 p-0 fs-2'>
           <Link to={'/'} className='m-0 p-0 d-flex align-items-center justify-content-start border-0 text-decoration-none text-dark'>
            <small ><AiOutlineSetting/></small><samll className="mx-2" style={{fontSize:'1.2rem'}}>Settings</samll>
           </Link>
           </li>
           <li className='fs-2 m-0 p-0' onClick={()=>{dispatch(logout())}}>
           <Link to={'/'} className='m-0 p-0 d-flex align-items-center justify-content-start border-0 text-decoration-none text-dark'>
            <small ><BsPower/></small><samll className="mx-2" style={{fontSize:'1.2rem'}}>Logout</samll>
           </Link>
           </li>
  </ul>
 </div>
</div>
    </div>
  </nav>
    </div>
  )
}

export default Sidebar