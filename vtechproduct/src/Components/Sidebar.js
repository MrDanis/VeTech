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
const Sidebar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [isHumbergerVisible,setisHumbergerVisible]= useState('visible');
  useEffect(()=>{},[])
  return (
    <div className='container-fluid border border-0 border-success'>

    <nav className="navbar navbar-expand-lg navbar-light py-3 border border-0 border-success">
    <div className="container-fluid">
    <button className="btn d-block d-md-none shadow border border-danger" onClick={()=>{setisHumbergerVisible('hidden')}} style={{visibility:isHumbergerVisible}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-none d-md-inline-flex flex-row " style={{cursor:'pointer'}}>
        {/* <li className="nav-item mx-2">
          <Link to={'/'} className="nav-link active" aria-current="page" >Dashboard</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to={'/conatct'} className="nav-link">Products</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to={'/conatct'} className="nav-link">Orders</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to={'/conatct'} className="nav-link">Stores</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to={'/conatct'} className="nav-link">Profile</Link>
        </li>
      */}
        <li className="nav-item mx-2">
          <Link to={'/conatct'} className="nav-link"> 
          <ThemeButton btnBgColor={styles.lightTheme.btnColor} btnText="Add Products">

          </ThemeButton>
            
            </Link>
        </li> 
        {
         !user?
       <li className="nav-item mx-2" onClick={()=>{dispatch(login())}} style={{cursor:'pointer'}}>
         <span className="nav-link" >SignIn</span>
       </li>:
      
       <li className="nav-item mx-0 d-flex align-items-center justify-content-center" style={{cursor:'pointer'}}>
            
       <div className="dropdown position-relative">
         <button className="btn shadow" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'none',outline:'none'}}>
           {/* <img className='img-fluid' style={{width:'25px',height:'25px'}} src={FiLogIn} alt=''></img> */}
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
     <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
 <div className="offcanvas-header">
   <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
   <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>{setisHumbergerVisible('visible')}} ></button>
 </div>
 <div className="offcanvas-body">
 <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       <li className="nav-item py-2" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>{setisHumbergerVisible('visible')}}>
          <Link to={'/'}>
            Home
          </Link>
       </li>
       <li className="nav-item py-2" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>{setisHumbergerVisible('visible')}}>
          <Link to={'/Shope'}>
           Shope
          </Link>
       </li>
       <li className="nav-item py-2" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>{setisHumbergerVisible('visible')}}>
          <Link to={'/Login'}>
           Login
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