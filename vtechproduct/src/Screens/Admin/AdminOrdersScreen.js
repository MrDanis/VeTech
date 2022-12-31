import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Op1 from '../../Assets/images/orderProduct.png'
const AdminOrdersScreen = () => {
  const [orders,setorders] = useState([0,0,0,0,0,0,0,0,0,0])
  return (
    <div className='conatiner-fluid m-0 p-0'>
       <div className='row m-0 px-5 p-0'>
        <ul className="nav justify-content-start">    
         <li className="nav-item mb-2">
          <Link className={window.location.pathname.includes('pending')?'text-muted text-decoration-none fs-5':'text-muted text-decoration-none fw-bold fs-5'} to='/admin/orders'>Completed</Link>
         </li>
         <li className="nav-item mb-2">
         <Link className={window.location.pathname.includes('pending')?'mx-3 text-muted text-decoration-none fw-bold fs-5':'mx-3 text-muted text-decoration-none fs-5'} to='/admin/orders/pending'>Pending</Link>
         </li>
       </ul>
       </div>
       <div className='row m-0 px-5 p-0 '>
       <div class="containerfluid m-0 p-0">
          <div class="row g-3 ">

            {/* is k nichy ki div ko convert krna hai ak component main */}
             {
                orders.map((item,index)=>{return(
               <div key={index} class="col-12 col-sm-6 col-md-3 col-lg-4 ">
               <div class="d-flex flex-wrap flex-column justify-content-start p-3 border bg-light">
                <p className='text-start d-flex border border-0 border-dark justify-content-between'>
                  <span>Order<sapn>#123232321234</sapn></span>
                  <span className={window.location.pathname.includes('pending')?'text-end text-danger':'text-end text-success'}>
                   {window.location.pathname.includes('pending')?'Pending':'Completed'}
                  </span>
                </p>
                <p className='text-start d-flex border border-0 border-dark'>
                  <span>Name<sapn>Danish</sapn></span>
                </p>
                <p className='text-start d-flex border border-0 border-dark justify-content-between'>
                  <span>Phone<sapn>#123232321234</sapn></span>
                </p>
                <p className='text-start d-flex border border-0 border-dark justify-content-between'>
                  <span>Email<sapn>#123232321234</sapn></span>
                </p>
                <p className='text-start d-flex border border-0 border-dark justify-content-between'>
                  <span>Address<sapn>#123232321234</sapn></span>
                </p>
                <p className='text-start d-flex border border-0 border-dark justify-content-between'>
                  <span>Order Created at :<sapn>June 13, 2022  11:25 am</sapn></span>
                </p>
                <p className='text-start d-flex border border-0 border-dark justify-content-between'>
                  <span>Order Deliver at :<sapn>June 20, 2022  11:25 am</sapn></span>
                </p>
                <hr className=' mt-0 border border-1 border-secondary'></hr>
                <p className='text-start d-flex border border-0 border-dark justify-content-between'>
                  <span>Subtotall<sapn className="mx-1">(2 items)</sapn></span>
                  <span className='text-end'>Rs, 12,983</span>
                </p>
                <p className='text-start d-flex border border-0 border-dark justify-content-between'>
                  <span>Total Amount<sapn>#123232321234</sapn></span>
                  <span className='text-end'>Rs, 12,354</span>
                </p>
                <div className='table-responsive my-0'>
                  <table class="table table-borderless">
                    <tbody>
                      <tr>
                        <td className='d-flex align-items-center justify-content-center'><img className='m-0 p-0 img-fluid' src={Op1} alt='test' style={{width:'3rem',height:'2.5rem'}}></img></td>
                        <td className='text-center'><span>Chicken</span></td>
                        <td className='text-center'><span>2X</span></td>
                        <td className='text-center'><span>4,500</span></td>
                        <td className='text-center'><span>15% Off</span></td>
                      </tr>
                      <tr>
                        <td className='d-flex align-items-center justify-content-center'><img className='m-0 p-0 img-fluid' src={Op1} alt='test' style={{width:'3rem',height:'2.5rem'}}></img></td>
                        <td className='text-center'><span>Chicken</span></td>
                        <td className='text-center'><span>2X</span></td>
                        <td className='text-center'><span>4,500</span></td>
                        <td className='text-center'><span>15% Off</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

                )})
             }
          </div>
        </div>
       </div>
    </div>
  )
}

export default AdminOrdersScreen