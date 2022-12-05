import React from 'react'
import {GiSellCard} from 'react-icons/gi'

import { styles } from '../../Assets/StylesGlobal'
const ProductsTable = () => {
  return (
    <div className="container-fluid mt-2 m-0 px-5 p-0">
     <div className='row my-1 px-3 g-3'>
       <h4 className='text-start'>Recent Products</h4>
      </div> 
      <div className='row px-3 g-3'>
        <div className="col-12">
          <div className="p-3 border bg-light shadow table-responsive" style={{borderRadius:'.85rem'}}>
          <table class="table table-hover table-borderless">
            <thead>
              <tr>
                <th className='text-start' scope="col">Photo</th>
                <th className='' scope="col">Name</th>
                <th className='' scope="col">Price</th>
                <th className='' scope="col">Avilable</th>
                <th className='text-center' scope="col">Promotions</th>
                <th className='text-center' scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='text-start'>Photo</td>
                <td>Name</td>
                <td>Price</td>
                <td>Avilable</td>
                <td className='text-center'>Promotions</td>
                <td className='text-center'><button className='btn btn-primary w-25'>Edit</button><button className='btn btn-danger w-25 mx-3'>Delete</button></td>
              </tr>
              <tr>
                <td className='text-start'>Photo</td>
                <td>Name</td>
                <td>Price</td>
                <td>Avilable</td>
                <td className='text-center'>Promotions</td>
                <td className='text-center'><button className='btn btn-primary w-25'>Edit</button><button className='btn btn-danger w-25 mx-3'>Delete</button></td>
              </tr>
              <tr>
                <td className='text-start'>Photo</td>
                <td>Name</td>
                <td>Price</td>
                <td>Avilable</td>
                <td className='text-center'>Promotions</td>
                <td className='text-center'><button className='btn btn-primary w-25'>Edit</button><button className='btn btn-danger w-25 mx-3'>Delete</button></td>
              </tr>
              <tr>
                <td className='text-start'>Photo</td>
                <td>Name</td>
                <td>Price</td>
                <td>Avilable</td>
                <td className='text-center'>Promotions</td>
                <td className='text-center'><button className='btn btn-primary w-25'>Edit</button><button className='btn btn-danger w-25 mx-3'>Delete</button></td>
              </tr>
              <tr>
                <td className='text-start'>Photo</td>
                <td>Name</td>
                <td>Price</td>
                <td>Avilable</td>
                <td className='text-center'>Promotions</td>
                <td className='text-center'><button className='btn btn-primary w-25'>Edit</button><button className='btn btn-danger w-25 mx-3'>Delete</button></td>
              </tr>
              <tr>
                <td className='text-start'>Photo</td>
                <td>Name</td>
                <td>Price</td>
                <td>Avilable</td>
                <td className='text-center'>Promotions</td>
                <td className='text-center'><button className='btn btn-primary w-25'>Edit</button><button className='btn btn-danger w-25 mx-3'>Delete</button></td>
              </tr>
              <tr>
                <td className='text-start'>Photo</td>
                <td>Name</td>
                <td>Price</td>
                <td>Avilable</td>
                <td className='text-center'>Promotions</td>
                <td className='text-center'><button className='btn btn-primary w-25'>Edit</button><button className='btn btn-danger w-25 mx-3'>Delete</button></td>
              </tr>
              <tr>
                <td className='text-start'>Photo</td>
                <td>Name</td>
                <td>Price</td>
                <td>Avilable</td>
                <td className='text-center'>Promotions</td>
                <td className='text-center'><button className='btn btn-primary w-25'>Edit</button><button className='btn btn-danger w-25 mx-3'>Delete</button></td>
              </tr>
              <tr>
                <td className='text-start'>Photo</td>
                <td>Name</td>
                <td>Price</td>
                <td>Avilable</td>
                <td className='text-center'>Promotions</td>
                <td className='text-center'><button className='btn btn-primary w-25'>Edit</button><button className='btn btn-danger w-25 mx-3'>Delete</button></td>
              </tr>
              <tr>
                <td className='text-start'>Photo</td>
                <td>Name</td>
                <td>Price</td>
                <td>Avilable</td>
                <td className='text-center'>Promotions</td>
                <td className='text-center'><button className='btn btn-primary w-25'>Edit</button><button className='btn btn-danger w-25 mx-3'>Delete</button></td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductsTable