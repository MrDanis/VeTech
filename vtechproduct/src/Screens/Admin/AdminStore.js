import React from 'react';
import { styles } from '../../Assets/StylesGlobal';
import ThemeButton from '../../CommonComponents/ThemeButton';
import {FiSearch} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AdminStoreMainCom from '../../Components/AdmainStore/AdminStoreMainCom';
import AdminAddStore from '../../Components/AdmainStore/AdminAddStore';
import AdminEditStore from '../../Components/AdmainStore/AdminEditStore';
const AdminStore = () => {
  return (
    <div className='container-fluid m-0 p-0'>
      <div className='row m-0 px-5 p-0'>
        <div className='col-12 m-0 p-0 d-flex align-items-center justify-content-start'>
        <Link className='text-dark text-decoration-none' to='/admin/stores/add'>
        <ThemeButton  btnBgColor={styles.lightTheme.btnColor} btnText='Add Store'></ThemeButton>
        </Link>
        <div className='d-flex align-items-center px-3 mx-2 w-25 border border-1' style={{borderRadius:'1rem'}}>
         <input className='p-1 w-100 border-0 bg-transparent'style={{borderRadius:'1rem',outline:'none'}} placeholder='Search' type='text'></input>
        <FiSearch></FiSearch>
        </div>
        </div>
        {
          window.location.pathname.includes('add')?
          <AdminAddStore></AdminAddStore>:
          window.location.pathname.includes('edit')?
          <AdminEditStore></AdminEditStore>:
          <AdminStoreMainCom></AdminStoreMainCom>
        }
        
      </div>
    </div>
  )
}

export default AdminStore