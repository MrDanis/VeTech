import React from 'react'
import Sidebar from '../Components/Sidebar'
import ThemeButton from '../CommonComponents/ThemeButton'
import { styles } from '../Assets/StylesGlobal'
import { Link } from 'react-router-dom'
import AdminDashboardScreen from '../Screens/Admin/AdminDashboardScreen'
import AdminProductScreen from '../Screens/Admin/AdminProductScreen'
import AdminOrdersScreen from '../Screens/Admin/AdminOrdersScreen'
import AdminStore from '../Screens/Admin/AdminStore'
import AdminProfileScreen from '../Screens/Admin/AdminProfileScreen'
import AdminSettingsScreen from '../Screens/Admin/AdminSettingsScreen'
import AddProductScreen from '../Screens/Admin/AddProductScreen'
const AdminMainView = ({component}) => {
  return (
    <>
         <div className='conatiner-fluid w-100 m-0 p-0 border border-0 border-primary'>
           <div className='row m-0 p-0 border border-0 border-success'>
             <div className='col-12 col-sm-4 col-md-3 col-lg-2 m-0 p-0'>
                 <Sidebar></Sidebar>
             </div>
             <div className='col-12 col-sm-8 col-md-9 col-lg-10 m-0 p-0 border border-2 border-danger'>
              <div className='container-fluid m-0 p-0 border border-0 border-dark'>
                <div className='row m-0 p-0 border border-0 border-primary'>
                    <div className='col-12 m-0 p-0 d-flex flex-row align-items-center justify-content-between border border-0 border-danger'>
                        <p className='mx-5 text-uppercase fw-bold fs-3 text-start'>
                             {component}
                        </p>
                        <p className='text-end'>
                             <Link to={'/admin/addProduct'}> 
                               <ThemeButton btnBgColor={styles.lightTheme.btnColor} btnText="Add Products">
                               </ThemeButton>
                             </Link>
                        </p>
                    </div>
                </div>

           <div className='row m-0 p-0'>
           {
            component==='dahsboard'?<AdminDashboardScreen></AdminDashboardScreen>:
            component==='products'?<AdminProductScreen></AdminProductScreen>:
            component==='orders'?<AdminOrdersScreen></AdminOrdersScreen>:
            component==='stores'?<AdminStore></AdminStore>:
            component==='profile'?<AdminProfileScreen></AdminProfileScreen>:
            component==='settings'?<AdminSettingsScreen></AdminSettingsScreen>:
            <AddProductScreen></AddProductScreen>
           }
           </div>    
              </div>    
             </div>
           </div>
           
        </div>
    </>
  )
}

export default AdminMainView