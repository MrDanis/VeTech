import React from 'react';
import {BsArrowLeft} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { styles } from '../../Assets/StylesGlobal';
import ThemeButton from '../../CommonComponents/ThemeButton';
const AdminEditStore = () => {
  return (
    <div className='container-fluid m-0 p-0 border border-0 border-success'>
     <div className='row m-0 p-0 d-flex align-items-center justify-content-center'>
        <div className='col-10 col-md-8 col-lg-6 border border-0 border-dark m-0 p-0'>
             <div className='row mt-5 m-0 p-2 shadow border border-1' style={{borderRadius:'1rem'}}>
               <div className='col-12 m-0 p-2'>
                <p className='mb-0 text-start border border-0 border-danger'>
                    <Link className='text-dark text-decoration-none' to='/admin/stores'>
                      <BsArrowLeft></BsArrowLeft> 
                      <span className='mx-2'>Stores</span>    
                    </Link>
                </p>              
               </div>                    
               <div className='col-12 mb-1 m-0 px-2 p-0 d-flex flex-column'>
                <label className='text-start mb-2'>Store Id : <span className='mx-2'>QWE-234567</span></label>
                <label className='text-start'>Store Name</label>
                <input style={{outline:'none'}} className=' my-2 outline-none border-start-0 border-end-0 border-top-0 border-bottom-1 border-secondary' placeholder='Store Name' type='text'></input>
                <label className='text-start mb-1'>Owner Name</label>
                <input style={{outline:'none'}} className='mb-2 outline-none border-start-0 border-end-0 border-top-0 border-bottom-1 border-secondary' placeholder='Store Name' type='text'></input>
                <label className='text-start mb-1'>Store Address</label>
                <input style={{outline:'none'}} className='mb-2 outline-none border-start-0 border-end-0 border-top-0 border-bottom-1 border-secondary' placeholder='Store Name' type='text'></input>
                <label className='text-start mb-1'>Owner Contact#</label>
                <input style={{outline:'none'}} className='mb-2 outline-none border-start-0 border-end-0 border-top-0 border-bottom-1 border-secondary' placeholder='Store Name' type='text'></input>
               </div>
               <div className='col-12 m-0  p-2 d-flex align-items-center justify-content-start'>
                <ThemeButton  btnBgColor={styles.lightTheme.btnColor} btnText='Save Changes'></ThemeButton>
                <button className='border border-1 shadow mx-2 btn btn-light'>
                <Link className='text-dark text-decoration-none' to='/admin/stores'>Cancel</Link>    
                </button>
               </div>                    
             </div>
        </div>
     </div>          
    </div>
  )
}

export default AdminEditStore