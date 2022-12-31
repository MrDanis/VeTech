import React from 'react'
import ThemeButton from '../../CommonComponents/ThemeButton'
import { styles } from '../../Assets/StylesGlobal'
const AddProductScreen = () => {
  return (
    <div className='container-fluid m-0 p-0 d-flex justify-content-center border border-0 border-success'>
      <div className='row w-75 m-0'>
         <div className='col-6 my-3 m-0 p-0 border border-0 border-danger d-flex flex-column justify-content-start'>
          <label className='text-start mb-2'>Product Name</label>
          <input placeholder="Enter Product Name"></input>
         </div>
         <div className='col-6 my-3 m-0 p-0 border border-0 border-danger d-flex flex-column justify-content-start'>
          <label className='text-start mb-2'>Product Image</label>
          <input placeholder="Enter Product Name" type='file'></input>
         </div>
         <div className='col-6 my-3 m-0 p-0 border border-0 border-danger d-flex flex-column justify-content-start'>
          <label className='text-start mb-2'>Product Catagorey</label>
          <select name="catagorey" id="catagorey">
           <option value="volvo">Medicine</option>
           <option value="saab">Feed</option>
           <option value="mercedes">Applinces</option>
           <option value="audi">Enjections</option>
         </select>
         </div>
         <div className='col-6 my-3 m-0 p-0 border border-0 border-danger d-flex flex-column justify-content-start'>
          <label className='text-start mb-2'>Product Price</label>
          <input type='number' placeholder='Enter price'></input>
         </div>
         <div className='col-6 my-3 m-0 p-0 border border-0 border-danger d-flex flex-column justify-content-start'>
         <label className='text-start mb-2'>Store Name</label>
         <select name="store" id="store">
           <option value="volvo">Store A</option>
           <option value="saab">Store B</option>
           <option value="mercedes">Store C</option>
           <option value="audi">Store D</option>
         </select>
         </div>
         <div className='col-6 my-3 m-0 p-0 border border-0 border-danger d-flex flex-column justify-content-start'>
          <label className='text-start mb-2'>Promotion</label>
          <input placeholder="00% off" type='number'></input>
         </div>
         <div className='col-6 my-3 m-0 p-0 border border-0 border-danger d-flex flex-column justify-content-start'>
         <label className='text-start mb-2'>Product Avilibility</label>
         <select name="quantity" id="quantity">
           <option value="None">None</option>
           <option value="Gram">Gram</option>
           <option value="Liter">Liter</option>
         </select>
         </div> 
         <div className='col-6 my-3 m-0 p-0 border border-0 border-danger d-flex flex-column justify-content-start'>
          <label className='text-start mb-2'>Stock</label>
          <select name="avilabitity" id="avalibility">
           <option value="None">None</option>
           <option value="In Stock">In Stock</option>
           <option value="Out of Stock">Out of Stock</option>
         </select>
         </div>
         <div className='col-12 my-3 m-0 p-0 d-flex align-items-center justify-content-start'>
         <ThemeButton  btnBgColor={styles.lightTheme.btnColor} btnText='Add product'></ThemeButton>
            <button className='border border-1 shadow mx-2 btn btn-light'>Cancel</button>
         </div>
      </div>
    </div>
  )
}

export default AddProductScreen