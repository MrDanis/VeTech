import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { styles } from '../../Assets/StylesGlobal';
import {FiEdit2} from 'react-icons/fi';
const AdminStoreMainCom = () => {
  const [stores,setStores] = useState([0,0,0,0,0,0,0,0,0,0,0])
  return (
    <div className='col-12 mt-3 m-0 p-0'>
          <div className='table-responsive'>
            <table class="table table-bordered">
             <thead className='text-light' style={{backgroundColor:styles.lightTheme.btnColor}}>
               <tr>
                 <th scope="col">Store Name</th>
                 <th scope="col">Owner</th>
                 <th scope="col">Address</th>
                 <th scope="col">Contact</th>
                 <th scope="col">Edit</th>
               </tr>
             </thead>
             <tbody>
              {
                stores.map((item,index)=>{return(
                <tr key={index}>
                 <td>
                  <div className='d-flex align-items-center'>
                  <p className='text-wrap w-100 mb-0 border border-0 border-success'>
                    Click House
                  </p>
                  </div>
                  </td>
                 <td >
                 <div className='d-flex align-items-center'>
                  <p className='text-wrap w-100 mb-0 border border-0 border-success'>
                   Ali Khan
                  </p>
                  </div> 
                  </td>
                 <td>
                 <div className='d-flex align-items-center'>
                  <p className='text-wrap w-100 mb-0 border border-0 border-success'>
                    Shop no.24,B. H, St 25-A,Johar Town,Islamabad
                  </p>
                  </div> 
                  </td>
                 <td>
                 <div className='d-flex border border-0 '>
                  <p className='w-100 mb-0 d-flex align-items-center justify-content-center flex-wrap h-100 border border-0 border-success'>
                  <span>312-456456</span>
                  </p>
                  <p className='w-100 mb-0 d-flex align-items-center justify-content-center flex-wrap h-100 border border-0 border-success'>
                  <span>312-456456</span>
                  </p>
                  </div> 
                  </td>
                 <td>
                 <Link className='text-dark text-decoration-none' to='/admin/stores/edit'>
                     <FiEdit2 color='black' fill='black' ></FiEdit2>
                 </Link>
                  </td>
               </tr>
                 )})
              }
              </tbody>
              </table>
            </div>
        </div>
  )
}

export default AdminStoreMainCom