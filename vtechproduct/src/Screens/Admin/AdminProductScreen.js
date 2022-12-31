import React,{useState} from 'react'
import { styles } from '../../Assets/StylesGlobal'
// import ThemeButton from '../../CommonComponents/ThemeButton'
import P1 from '../../Assets/images/Product1.png'
import '../../index.css'
const AdminProductScreen = () => {
  const [prodcutImg,setproductImg]=useState(P1);
  const getUploadedImage =(e)=>{
    let fileObj = e.target.files[0];
    let imgUrl= URL.createObjectURL(fileObj);
    setproductImg(imgUrl);
    console.log('Img Url Is : ',imgUrl);
   console.log('Uploaded Image is : ',e.target.files[0]);
  }
  const getChange =(e)=>{
    console.log('Selected Option Is :',e.target.value)
  }
  return (
    <div className='container-fluid m-0 px-3 p-0 border border-0 border-success'>
       <div className="row g-2">
         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
           <div className="px-1 p-3">
            <div className='conteiner-fluid m-0 p-0'>
                <div className='row m-0  p-0 border border-0 border-gray productBoxMain shadow' style={{borderRadius:'.75rem'}}>
                    <div className='col-12 col-md-6 col-lg-5 m-0 p-0  border border-0 border-danger' style={{ borderBottomLeftRadius:'.75rem',borderTopLeftRadius:'.75rem',backgroundImage:`url(${prodcutImg})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                    </div>
                    <div className='col-12 col-md-6 col-lg-7 border border-0 border-success m-0 p-0'>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product ID :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Catagorey :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Store Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Date Added :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Promotion :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Availablity :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>No, of Items :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0 d-flex align-items-center justify-content-between'>
                        <button type="button" className=" mb-2 btn bg-transparent shadow border py-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                        <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}} data-bs-toggle="modal" data-bs-target="#exampleModal2">Delete</button></p>
                        {/* EDIT MODAL START*/}
                           <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div className="modal-dialog">
                               <div className="modal-content">
                                 <div className="modal-header">
                                   <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div className="modal-body border border-0 border-success">
                                    <div className='container-fluid m-0 p-0'>
                                         <div className='row m-0 p-0 d-flex align-items-center justify-content-center'>
                                               <div className='col-12 d-flex flex-column mb-1 m-0 p-0 border border-0 border-success'>    
                                                    <img className='img-fluid w-100 m-0 p-0' alt='test' src={prodcutImg} style={{height:'15rem'}} ></img>
                                                    <p className='mb-0 position-relative d-flex flex-column flex-wrap text-end m-0 px-2 p-0 border border-0 border-danger'>
                                                      <input type="file" style={{visibility:'hidden'}} name="file" id="file" className="m-0 inputfile" onChange={getUploadedImage}/>
                                                      <label className='position-absolute m-0' for="file">Change Photo</label>
                                                    </p>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label className='text-start'>Product Name</label>
                                                  <input type='text' placeholder='Product Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Catagorey</label>
                                                  <input type='text' placeholder='Product Catagorey'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Store Name</label>
                                                  <input type='text' placeholder='Store Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Price</label>
                                                  <input type='text' placeholder='Product Price'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Promotion</label>
                                                  <input type='text' placeholder='Promotion'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Added Date</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Availablity</label>
                                                   <select className="form-select" aria-label="Default select example" onChange={getChange}>
                                                      <option selected>In Stock</option>
                                                      <option value="1">In Stock</option>
                                                      <option value="2">Out Of Stock</option>
                                                    </select>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>No of Items</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                          
                                         </div>
                                    </div>
                                 </div>
                                 <div className="modal-footer d-flex align-items-start justify-content-start">
                                    {/* <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}}>Delete</button> */}
                                   <button type="button" className="mb-2 btn text-light py-1"style={{backgroundColor:styles.lightTheme.btnColor}}>Update Product</button>
                                   <button type="button" className="mb-2 btn bg-transparent shadow border py-1" data-bs-dismiss="modal">Cancel</button>
                                 </div>
                               </div>
                             </div>
                           </div> 
                               
                        {/* EDIT MODAL END*/}
                        {/* DELETE MODAL START*/}
                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-body">
                                <p className='my-2'>Are you sure you want to delete this item ?</p>
                                <p className='mb-0 border border-0 border-danger d-flex align-items-center justify-content-end'>
                                  <button className='w-25 mx-1 border border-1 btn btn-light shadow' data-bs-dismiss="modal">Cancel</button>
                                  <button className='w-25 mx-1 border border-1 btn btn-danger' data-bs-dismiss="modal">Delete</button>
                                </p>
                              </div>
                            </div>
                          </div>
                       </div>
                        {/* DELETE MODAL End*/}
                    </div>
                </div>
            </div>
           </div>
         </div>
          {/* 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
           <div className="px-1 p-3">
            <div className='conteiner-fluid m-0 p-0'>
                <div className='row m-0  p-0 border border-0 border-gray productBoxMain shadow' style={{borderRadius:'.75rem'}}>
                    <div className='col-12 col-md-6 col-lg-5 m-0 p-0  border border-0 border-danger' style={{ borderBottomLeftRadius:'.75rem',borderTopLeftRadius:'.75rem',backgroundImage:`url(${prodcutImg})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                    </div>
                    <div className='col-12 col-md-6 col-lg-7 border border-0 border-success m-0 p-0'>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product ID :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Catagorey :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Store Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Date Added :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Promotion :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Availablity :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>No, of Items :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0 d-flex align-items-center justify-content-between'>
                        <button type="button" className=" mb-2 btn bg-transparent shadow border py-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                        <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}} data-bs-toggle="modal" data-bs-target="#exampleModal2">Delete</button></p>
                        {/* EDIT MODAL START*/}
                           <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div className="modal-dialog">
                               <div className="modal-content">
                                 <div className="modal-header">
                                   <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div className="modal-body border border-0 border-success">
                                    <div className='container-fluid m-0 p-0'>
                                         <div className='row m-0 p-0 d-flex align-items-center justify-content-center'>
                                               <div className='col-12 d-flex flex-column mb-1 m-0 p-0 border border-0 border-success'>    
                                                    <img className='img-fluid w-100 m-0 p-0' alt='test' src={prodcutImg} style={{height:'15rem'}} ></img>
                                                    <p className='mb-0 position-relative d-flex flex-column flex-wrap text-end m-0 px-2 p-0 border border-0 border-danger'>
                                                      <input type="file" style={{visibility:'hidden'}} name="file" id="file" className="m-0 inputfile" onChange={getUploadedImage}/>
                                                      <label className='position-absolute m-0' for="file">Change Photo</label>
                                                    </p>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label className='text-start'>Product Name</label>
                                                  <input type='text' placeholder='Product Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Catagorey</label>
                                                  <input type='text' placeholder='Product Catagorey'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Store Name</label>
                                                  <input type='text' placeholder='Store Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Price</label>
                                                  <input type='text' placeholder='Product Price'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Promotion</label>
                                                  <input type='text' placeholder='Promotion'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Added Date</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Availablity</label>
                                                   <select className="form-select" aria-label="Default select example" onChange={getChange}>
                                                      <option selected>In Stock</option>
                                                      <option value="1">In Stock</option>
                                                      <option value="2">Out Of Stock</option>
                                                    </select>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>No of Items</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                          
                                         </div>
                                    </div>
                                 </div>
                                 <div className="modal-footer d-flex align-items-start justify-content-start">
                                    {/* <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}}>Delete</button> */}
                                   <button type="button" className="mb-2 btn text-light py-1"style={{backgroundColor:styles.lightTheme.btnColor}}>Update Product</button>
                                   <button type="button" className="mb-2 btn bg-transparent shadow border py-1" data-bs-dismiss="modal">Cancel</button>
                                 </div>
                               </div>
                             </div>
                           </div> 
                               
                        {/* EDIT MODAL END*/}
                        {/* DELETE MODAL START*/}
                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-body">
                                <p>Are you sure you want to delete this item ?</p>
                                <p className='border border-0 border-danger d-flex align-items-center justify-content-end'>
                                  <button className='mx-1 py-1 p-0 btn btn-light shadow' data-bs-dismiss="modal">Cancel</button>
                                  <button className='mx-1 py-1 p-0 btn btn-danger' data-bs-dismiss="modal">Delete</button>
                                </p>
                              </div>
                            </div>
                          </div>
                       </div>
                        {/* DELETE MODAL End*/}
                    </div>
                </div>
            </div>
           </div>
         </div>
         {/* 3 */}
         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
           <div className="px-1 p-3">
            <div className='conteiner-fluid m-0 p-0'>
                <div className='row m-0  p-0 border border-0 border-gray productBoxMain shadow' style={{borderRadius:'.75rem'}}>
                    <div className='col-12 col-md-6 col-lg-5 m-0 p-0  border border-0 border-danger' style={{ borderBottomLeftRadius:'.75rem',borderTopLeftRadius:'.75rem',backgroundImage:`url(${prodcutImg})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                    </div>
                    <div className='col-12 col-md-6 col-lg-7 border border-0 border-success m-0 p-0'>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product ID :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Catagorey :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Store Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Date Added :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Promotion :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Availablity :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>No, of Items :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0 d-flex align-items-center justify-content-between'>
                        <button type="button" className=" mb-2 btn bg-transparent shadow border py-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                        <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}} data-bs-toggle="modal" data-bs-target="#exampleModal2">Delete</button></p>
                        {/* EDIT MODAL START*/}
                           <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div className="modal-dialog">
                               <div className="modal-content">
                                 <div className="modal-header">
                                   <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div className="modal-body border border-0 border-success">
                                    <div className='container-fluid m-0 p-0'>
                                         <div className='row m-0 p-0 d-flex align-items-center justify-content-center'>
                                               <div className='col-12 d-flex flex-column mb-1 m-0 p-0 border border-0 border-success'>    
                                                    <img className='img-fluid w-100 m-0 p-0' alt='test' src={prodcutImg} style={{height:'15rem'}} ></img>
                                                    <p className='mb-0 position-relative d-flex flex-column flex-wrap text-end m-0 px-2 p-0 border border-0 border-danger'>
                                                      <input type="file" style={{visibility:'hidden'}} name="file" id="file" className="m-0 inputfile" onChange={getUploadedImage}/>
                                                      <label className='position-absolute m-0' for="file">Change Photo</label>
                                                    </p>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label className='text-start'>Product Name</label>
                                                  <input type='text' placeholder='Product Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Catagorey</label>
                                                  <input type='text' placeholder='Product Catagorey'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Store Name</label>
                                                  <input type='text' placeholder='Store Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Price</label>
                                                  <input type='text' placeholder='Product Price'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Promotion</label>
                                                  <input type='text' placeholder='Promotion'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Added Date</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Availablity</label>
                                                   <select className="form-select" aria-label="Default select example" onChange={getChange}>
                                                      <option selected>In Stock</option>
                                                      <option value="1">In Stock</option>
                                                      <option value="2">Out Of Stock</option>
                                                    </select>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>No of Items</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                          
                                         </div>
                                    </div>
                                 </div>
                                 <div className="modal-footer d-flex align-items-start justify-content-start">
                                    {/* <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}}>Delete</button> */}
                                   <button type="button" className="mb-2 btn text-light py-1"style={{backgroundColor:styles.lightTheme.btnColor}}>Update Product</button>
                                   <button type="button" className="mb-2 btn bg-transparent shadow border py-1" data-bs-dismiss="modal">Cancel</button>
                                 </div>
                               </div>
                             </div>
                           </div> 
                               
                        {/* EDIT MODAL END*/}
                        {/* DELETE MODAL START*/}
                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-body">
                                <p>Are you sure you want to delete this item ?</p>
                                <p className='border border-0 border-danger d-flex align-items-center justify-content-end'>
                                  <button className='mx-1 py-1 p-0 btn btn-light shadow' data-bs-dismiss="modal">Cancel</button>
                                  <button className='mx-1 py-1 p-0 btn btn-danger' data-bs-dismiss="modal">Delete</button>
                                </p>
                              </div>
                            </div>
                          </div>
                       </div>
                        {/* DELETE MODAL End*/}
                    </div>
                </div>
            </div>
           </div>
         </div>
         {/* 4 */}
         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
           <div className="px-1 p-3">
            <div className='conteiner-fluid m-0 p-0'>
                <div className='row m-0  p-0 border border-0 border-gray productBoxMain shadow' style={{borderRadius:'.75rem'}}>
                    <div className='col-12 col-md-6 col-lg-5 m-0 p-0  border border-0 border-danger' style={{ borderBottomLeftRadius:'.75rem',borderTopLeftRadius:'.75rem',backgroundImage:`url(${prodcutImg})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                    </div>
                    <div className='col-12 col-md-6 col-lg-7 border border-0 border-success m-0 p-0'>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product ID :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Catagorey :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Store Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Date Added :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Promotion :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Availablity :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>No, of Items :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0 d-flex align-items-center justify-content-between'>
                        <button type="button" className=" mb-2 btn bg-transparent shadow border py-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                        <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}} data-bs-toggle="modal" data-bs-target="#exampleModal2">Delete</button></p>
                        {/* EDIT MODAL START*/}
                           <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div className="modal-dialog">
                               <div className="modal-content">
                                 <div className="modal-header">
                                   <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div className="modal-body border border-0 border-success">
                                    <div className='container-fluid m-0 p-0'>
                                         <div className='row m-0 p-0 d-flex align-items-center justify-content-center'>
                                               <div className='col-12 d-flex flex-column mb-1 m-0 p-0 border border-0 border-success'>    
                                                    <img className='img-fluid w-100 m-0 p-0' alt='test' src={prodcutImg} style={{height:'15rem'}} ></img>
                                                    <p className='mb-0 position-relative d-flex flex-column flex-wrap text-end m-0 px-2 p-0 border border-0 border-danger'>
                                                      <input type="file" style={{visibility:'hidden'}} name="file" id="file" className="m-0 inputfile" onChange={getUploadedImage}/>
                                                      <label className='position-absolute m-0' for="file">Change Photo</label>
                                                    </p>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label className='text-start'>Product Name</label>
                                                  <input type='text' placeholder='Product Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Catagorey</label>
                                                  <input type='text' placeholder='Product Catagorey'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Store Name</label>
                                                  <input type='text' placeholder='Store Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Price</label>
                                                  <input type='text' placeholder='Product Price'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Promotion</label>
                                                  <input type='text' placeholder='Promotion'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Added Date</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Availablity</label>
                                                   <select className="form-select" aria-label="Default select example" onChange={getChange}>
                                                      <option selected>In Stock</option>
                                                      <option value="1">In Stock</option>
                                                      <option value="2">Out Of Stock</option>
                                                    </select>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>No of Items</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                          
                                         </div>
                                    </div>
                                 </div>
                                 <div className="modal-footer d-flex align-items-start justify-content-start">
                                    {/* <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}}>Delete</button> */}
                                   <button type="button" className="mb-2 btn text-light py-1"style={{backgroundColor:styles.lightTheme.btnColor}}>Update Product</button>
                                   <button type="button" className="mb-2 btn bg-transparent shadow border py-1" data-bs-dismiss="modal">Cancel</button>
                                 </div>
                               </div>
                             </div>
                           </div> 
                               
                        {/* EDIT MODAL END*/}
                        {/* DELETE MODAL START*/}
                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-body">
                                <p>Are you sure you want to delete this item ?</p>
                                <p className='border border-0 border-danger d-flex align-items-center justify-content-end'>
                                  <button className='mx-1 py-1 p-0 btn btn-light shadow' data-bs-dismiss="modal">Cancel</button>
                                  <button className='mx-1 py-1 p-0 btn btn-danger' data-bs-dismiss="modal">Delete</button>
                                </p>
                              </div>
                            </div>
                          </div>
                       </div>
                        {/* DELETE MODAL End*/}
                    </div>
                </div>
            </div>
           </div>
         </div>
         {/* 5 */}
         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
           <div className="px-1 p-3">
            <div className='conteiner-fluid m-0 p-0'>
                <div className='row m-0  p-0 border border-0 border-gray productBoxMain shadow' style={{borderRadius:'.75rem'}}>
                    <div className='col-12 col-md-6 col-lg-5 m-0 p-0  border border-0 border-danger' style={{ borderBottomLeftRadius:'.75rem',borderTopLeftRadius:'.75rem',backgroundImage:`url(${prodcutImg})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                    </div>
                    <div className='col-12 col-md-6 col-lg-7 border border-0 border-success m-0 p-0'>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product ID :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Catagorey :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Store Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Date Added :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Promotion :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Availablity :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>No, of Items :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0 d-flex align-items-center justify-content-between'>
                        <button type="button" className=" mb-2 btn bg-transparent shadow border py-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                        <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}} data-bs-toggle="modal" data-bs-target="#exampleModal2">Delete</button></p>
                        {/* EDIT MODAL START*/}
                           <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div className="modal-dialog">
                               <div className="modal-content">
                                 <div className="modal-header">
                                   <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div className="modal-body border border-0 border-success">
                                    <div className='container-fluid m-0 p-0'>
                                         <div className='row m-0 p-0 d-flex align-items-center justify-content-center'>
                                               <div className='col-12 d-flex flex-column mb-1 m-0 p-0 border border-0 border-success'>    
                                                    <img className='img-fluid w-100 m-0 p-0' alt='test' src={prodcutImg} style={{height:'15rem'}} ></img>
                                                    <p className='mb-0 position-relative d-flex flex-column flex-wrap text-end m-0 px-2 p-0 border border-0 border-danger'>
                                                      <input type="file" style={{visibility:'hidden'}} name="file" id="file" className="m-0 inputfile" onChange={getUploadedImage}/>
                                                      <label className='position-absolute m-0' for="file">Change Photo</label>
                                                    </p>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label className='text-start'>Product Name</label>
                                                  <input type='text' placeholder='Product Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Catagorey</label>
                                                  <input type='text' placeholder='Product Catagorey'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Store Name</label>
                                                  <input type='text' placeholder='Store Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Price</label>
                                                  <input type='text' placeholder='Product Price'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Promotion</label>
                                                  <input type='text' placeholder='Promotion'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Added Date</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Availablity</label>
                                                   <select className="form-select" aria-label="Default select example" onChange={getChange}>
                                                      <option selected>In Stock</option>
                                                      <option value="1">In Stock</option>
                                                      <option value="2">Out Of Stock</option>
                                                    </select>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>No of Items</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                          
                                         </div>
                                    </div>
                                 </div>
                                 <div className="modal-footer d-flex align-items-start justify-content-start">
                                    {/* <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}}>Delete</button> */}
                                   <button type="button" className="mb-2 btn text-light py-1"style={{backgroundColor:styles.lightTheme.btnColor}}>Update Product</button>
                                   <button type="button" className="mb-2 btn bg-transparent shadow border py-1" data-bs-dismiss="modal">Cancel</button>
                                 </div>
                               </div>
                             </div>
                           </div> 
                               
                        {/* EDIT MODAL END*/}
                        {/* DELETE MODAL START*/}
                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-body">
                                <p>Are you sure you want to delete this item ?</p>
                                <p className='border border-0 border-danger d-flex align-items-center justify-content-end'>
                                  <button className='mx-1 py-1 p-0 btn btn-light shadow' data-bs-dismiss="modal">Cancel</button>
                                  <button className='mx-1 py-1 p-0 btn btn-danger' data-bs-dismiss="modal">Delete</button>
                                </p>
                              </div>
                            </div>
                          </div>
                       </div>
                        {/* DELETE MODAL End*/}
                    </div>
                </div>
            </div>
           </div>
         </div>
          {/* 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
           <div className="px-1 p-3">
            <div className='conteiner-fluid m-0 p-0'>
                <div className='row m-0  p-0 border border-0 border-gray productBoxMain shadow' style={{borderRadius:'.75rem'}}>
                    <div className='col-12 col-md-6 col-lg-5 m-0 p-0  border border-0 border-danger' style={{ borderBottomLeftRadius:'.75rem',borderTopLeftRadius:'.75rem',backgroundImage:`url(${prodcutImg})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                    </div>
                    <div className='col-12 col-md-6 col-lg-7 border border-0 border-success m-0 p-0'>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product ID :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Catagorey :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Store Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Date Added :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Promotion :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Availablity :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>No, of Items :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0 d-flex align-items-center justify-content-between'>
                        <button type="button" className=" mb-2 btn bg-transparent shadow border py-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                        <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}} data-bs-toggle="modal" data-bs-target="#exampleModal2">Delete</button></p>
                        {/* EDIT MODAL START*/}
                           <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div className="modal-dialog">
                               <div className="modal-content">
                                 <div className="modal-header">
                                   <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div className="modal-body border border-0 border-success">
                                    <div className='container-fluid m-0 p-0'>
                                         <div className='row m-0 p-0 d-flex align-items-center justify-content-center'>
                                               <div className='col-12 d-flex flex-column mb-1 m-0 p-0 border border-0 border-success'>    
                                                    <img className='img-fluid w-100 m-0 p-0' alt='test' src={prodcutImg} style={{height:'15rem'}} ></img>
                                                    <p className='mb-0 position-relative d-flex flex-column flex-wrap text-end m-0 px-2 p-0 border border-0 border-danger'>
                                                      <input type="file" style={{visibility:'hidden'}} name="file" id="file" className="m-0 inputfile" onChange={getUploadedImage}/>
                                                      <label className='position-absolute m-0' for="file">Change Photo</label>
                                                    </p>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label className='text-start'>Product Name</label>
                                                  <input type='text' placeholder='Product Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Catagorey</label>
                                                  <input type='text' placeholder='Product Catagorey'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Store Name</label>
                                                  <input type='text' placeholder='Store Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Price</label>
                                                  <input type='text' placeholder='Product Price'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Promotion</label>
                                                  <input type='text' placeholder='Promotion'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Added Date</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Availablity</label>
                                                   <select className="form-select" aria-label="Default select example" onChange={getChange}>
                                                      <option selected>In Stock</option>
                                                      <option value="1">In Stock</option>
                                                      <option value="2">Out Of Stock</option>
                                                    </select>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>No of Items</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                          
                                         </div>
                                    </div>
                                 </div>
                                 <div className="modal-footer d-flex align-items-start justify-content-start">
                                    {/* <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}}>Delete</button> */}
                                   <button type="button" className="mb-2 btn text-light py-1"style={{backgroundColor:styles.lightTheme.btnColor}}>Update Product</button>
                                   <button type="button" className="mb-2 btn bg-transparent shadow border py-1" data-bs-dismiss="modal">Cancel</button>
                                 </div>
                               </div>
                             </div>
                           </div> 
                               
                        {/* EDIT MODAL END*/}
                        {/* DELETE MODAL START*/}
                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-body">
                                <p>Are you sure you want to delete this item ?</p>
                                <p className='border border-0 border-danger d-flex align-items-center justify-content-end'>
                                  <button className='mx-1 py-1 p-0 btn btn-light shadow' data-bs-dismiss="modal">Cancel</button>
                                  <button className='mx-1 py-1 p-0 btn btn-danger' data-bs-dismiss="modal">Delete</button>
                                </p>
                              </div>
                            </div>
                          </div>
                       </div>
                        {/* DELETE MODAL End*/}
                    </div>
                </div>
            </div>
           </div>
         </div>
         {/* 3 */}
         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
           <div className="px-1 p-3">
            <div className='conteiner-fluid m-0 p-0'>
                <div className='row m-0  p-0 border border-0 border-gray productBoxMain shadow' style={{borderRadius:'.75rem'}}>
                    <div className='col-12 col-md-6 col-lg-5 m-0 p-0  border border-0 border-danger' style={{ borderBottomLeftRadius:'.75rem',borderTopLeftRadius:'.75rem',backgroundImage:`url(${prodcutImg})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                    </div>
                    <div className='col-12 col-md-6 col-lg-7 border border-0 border-success m-0 p-0'>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product ID :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Catagorey :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Store Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Date Added :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Promotion :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Availablity :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>No, of Items :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0 d-flex align-items-center justify-content-between'>
                        <button type="button" className=" mb-2 btn bg-transparent shadow border py-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                        <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}} data-bs-toggle="modal" data-bs-target="#exampleModal2">Delete</button></p>
                        {/* EDIT MODAL START*/}
                           <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div className="modal-dialog">
                               <div className="modal-content">
                                 <div className="modal-header">
                                   <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div className="modal-body border border-0 border-success">
                                    <div className='container-fluid m-0 p-0'>
                                         <div className='row m-0 p-0 d-flex align-items-center justify-content-center'>
                                               <div className='col-12 d-flex flex-column mb-1 m-0 p-0 border border-0 border-success'>    
                                                    <img className='img-fluid w-100 m-0 p-0' alt='test' src={prodcutImg} style={{height:'15rem'}} ></img>
                                                    <p className='mb-0 position-relative d-flex flex-column flex-wrap text-end m-0 px-2 p-0 border border-0 border-danger'>
                                                      <input type="file" style={{visibility:'hidden'}} name="file" id="file" className="m-0 inputfile" onChange={getUploadedImage}/>
                                                      <label className='position-absolute m-0' for="file">Change Photo</label>
                                                    </p>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label className='text-start'>Product Name</label>
                                                  <input type='text' placeholder='Product Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Catagorey</label>
                                                  <input type='text' placeholder='Product Catagorey'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Store Name</label>
                                                  <input type='text' placeholder='Store Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Price</label>
                                                  <input type='text' placeholder='Product Price'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Promotion</label>
                                                  <input type='text' placeholder='Promotion'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Added Date</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Availablity</label>
                                                   <select className="form-select" aria-label="Default select example" onChange={getChange}>
                                                      <option selected>In Stock</option>
                                                      <option value="1">In Stock</option>
                                                      <option value="2">Out Of Stock</option>
                                                    </select>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>No of Items</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                          
                                         </div>
                                    </div>
                                 </div>
                                 <div className="modal-footer d-flex align-items-start justify-content-start">
                                    {/* <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}}>Delete</button> */}
                                   <button type="button" className="mb-2 btn text-light py-1"style={{backgroundColor:styles.lightTheme.btnColor}}>Update Product</button>
                                   <button type="button" className="mb-2 btn bg-transparent shadow border py-1" data-bs-dismiss="modal">Cancel</button>
                                 </div>
                               </div>
                             </div>
                           </div> 
                               
                        {/* EDIT MODAL END*/}
                        {/* DELETE MODAL START*/}
                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-body">
                                <p>Are you sure you want to delete this item ?</p>
                                <p className='border border-0 border-danger d-flex align-items-center justify-content-end'>
                                  <button className='mx-1 py-1 p-0 btn btn-light shadow' data-bs-dismiss="modal">Cancel</button>
                                  <button className='mx-1 py-1 p-0 btn btn-danger' data-bs-dismiss="modal">Deleteeee</button>
                                </p>
                              </div>
                            </div>
                          </div>
                       </div>
                        {/* DELETE MODAL End*/}
                    </div>
                </div>
            </div>
           </div>
         </div>
         {/* 4 */}
         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
           <div className="px-1 p-3">
            <div className='conteiner-fluid m-0 p-0'>
                <div className='row m-0  p-0 border border-0 border-gray productBoxMain shadow' style={{borderRadius:'.75rem'}}>
                    <div className='col-12 col-md-6 col-lg-5 m-0 p-0  border border-0 border-danger' style={{ borderBottomLeftRadius:'.75rem',borderTopLeftRadius:'.75rem',backgroundImage:`url(${prodcutImg})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                    </div>
                    <div className='col-12 col-md-6 col-lg-7 border border-0 border-success m-0 p-0'>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product ID :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Catagorey :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Store Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Date Added :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Promotion :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Availablity :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>No, of Items :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0 d-flex align-items-center justify-content-between'>
                        <button type="button" className=" mb-2 btn bg-transparent shadow border py-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                        <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}} data-bs-toggle="modal" data-bs-target="#exampleModal2">Delete</button></p>
                        {/* EDIT MODAL START*/}
                           <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div className="modal-dialog">
                               <div className="modal-content">
                                 <div className="modal-header">
                                   <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div className="modal-body border border-0 border-success">
                                    <div className='container-fluid m-0 p-0'>
                                         <div className='row m-0 p-0 d-flex align-items-center justify-content-center'>
                                               <div className='col-12 d-flex flex-column mb-1 m-0 p-0 border border-0 border-success'>    
                                                    <img className='img-fluid w-100 m-0 p-0' alt='test' src={prodcutImg} style={{height:'15rem'}} ></img>
                                                    <p className='mb-0 position-relative d-flex flex-column flex-wrap text-end m-0 px-2 p-0 border border-0 border-danger'>
                                                      <input type="file" style={{visibility:'hidden'}} name="file" id="file" className="m-0 inputfile" onChange={getUploadedImage}/>
                                                      <label className='position-absolute m-0' for="file">Change Photo</label>
                                                    </p>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label className='text-start'>Product Name</label>
                                                  <input type='text' placeholder='Product Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Catagorey</label>
                                                  <input type='text' placeholder='Product Catagorey'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Store Name</label>
                                                  <input type='text' placeholder='Store Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Price</label>
                                                  <input type='text' placeholder='Product Price'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Promotion</label>
                                                  <input type='text' placeholder='Promotion'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Added Date</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Availablity</label>
                                                   <select className="form-select" aria-label="Default select example" onChange={getChange}>
                                                      <option selected>In Stock</option>
                                                      <option value="1">In Stock</option>
                                                      <option value="2">Out Of Stock</option>
                                                    </select>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>No of Items</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                          
                                         </div>
                                    </div>
                                 </div>
                                 <div className="modal-footer d-flex align-items-start justify-content-start">
                                    {/* <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}}>Delete</button> */}
                                   <button type="button" className="mb-2 btn text-light py-1"style={{backgroundColor:styles.lightTheme.btnColor}}>Update Product</button>
                                   <button type="button" className="mb-2 btn bg-transparent shadow border py-1" data-bs-dismiss="modal">Cancel</button>
                                 </div>
                               </div>
                             </div>
                           </div> 
                               
                        {/* EDIT MODAL END*/}
                        {/* DELETE MODAL START*/}
                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-body">
                                <p>Are you sure you want to delete this item ?</p>
                                <p className='border border-0 border-danger d-flex align-items-center justify-content-end'>
                                  <button className='w-50 mx- p-0 btn btn-light shadow' data-bs-dismiss="modal">Cancel</button>
                                  <button className='w-50 mx- p-0 btn btn-danger' data-bs-dismiss="modal">Delete</button>
                                </p>
                              </div>
                            </div>
                          </div>
                       </div>
                        {/* DELETE MODAL End*/}
                    </div>
                </div>
            </div>
           </div>
         </div>
         {/* 5 */}
         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
           <div className="px-1 p-3">
            <div className='conteiner-fluid m-0 p-0'>
                <div className='row m-0  p-0 border border-0 border-gray productBoxMain shadow' style={{borderRadius:'.75rem'}}>
                    <div className='col-12 col-md-6 col-lg-5 m-0 p-0  border border-0 border-danger' style={{ borderBottomLeftRadius:'.75rem',borderTopLeftRadius:'.75rem',backgroundImage:`url(${prodcutImg})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                    </div>
                    <div className='col-12 col-md-6 col-lg-7 border border-0 border-success m-0 p-0'>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product ID :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Catagorey :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Store Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Date Added :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Promotion :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Availablity :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>No, of Items :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0 d-flex align-items-center justify-content-between'>
                        <button type="button" className=" mb-2 btn bg-transparent shadow border py-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                        <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}} data-bs-toggle="modal" data-bs-target="#exampleModal2">Delete</button></p>
                        {/* EDIT MODAL START*/}
                           <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div className="modal-dialog">
                               <div className="modal-content">
                                 <div className="modal-header">
                                   <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div className="modal-body border border-0 border-success">
                                    <div className='container-fluid m-0 p-0'>
                                         <div className='row m-0 p-0 d-flex align-items-center justify-content-center'>
                                               <div className='col-12 d-flex flex-column mb-1 m-0 p-0 border border-0 border-success'>    
                                                    <img className='img-fluid w-100 m-0 p-0' alt='test' src={prodcutImg} style={{height:'15rem'}} ></img>
                                                    <p className='mb-0 position-relative d-flex flex-column flex-wrap text-end m-0 px-2 p-0 border border-0 border-danger'>
                                                      <input type="file" style={{visibility:'hidden'}} name="file" id="file" className="m-0 inputfile" onChange={getUploadedImage}/>
                                                      <label className='position-absolute m-0' for="file">Change Photo</label>
                                                    </p>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label className='text-start'>Product Name</label>
                                                  <input type='text' placeholder='Product Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Catagorey</label>
                                                  <input type='text' placeholder='Product Catagorey'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Store Name</label>
                                                  <input type='text' placeholder='Store Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Price</label>
                                                  <input type='text' placeholder='Product Price'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Promotion</label>
                                                  <input type='text' placeholder='Promotion'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Added Date</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Availablity</label>
                                                   <select className="form-select" aria-label="Default select example" onChange={getChange}>
                                                      <option selected>In Stock</option>
                                                      <option value="1">In Stock</option>
                                                      <option value="2">Out Of Stock</option>
                                                    </select>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>No of Items</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                          
                                         </div>
                                    </div>
                                 </div>
                                 <div className="modal-footer d-flex align-items-start justify-content-start">
                                    {/* <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}}>Delete</button> */}
                                   <button type="button" className="mb-2 btn text-light py-1"style={{backgroundColor:styles.lightTheme.btnColor}}>Update Product</button>
                                   <button type="button" className="mb-2 btn bg-transparent shadow border py-1" data-bs-dismiss="modal">Cancel</button>
                                 </div>
                               </div>
                             </div>
                           </div> 
                               
                        {/* EDIT MODAL END*/}
                        {/* DELETE MODAL START*/}
                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-body">
                                <p>Are you sure you want to delete this item ?</p>
                                <p className='border border-0 border-danger d-flex align-items-center justify-content-end'>
                                  <button className='mx-1 py-1 p-0 btn btn-light shadow' data-bs-dismiss="modal">Cancel</button>
                                  <button className='mx-1 py-1 p-0 btn btn-danger' data-bs-dismiss="modal">Delete</button>
                                </p>
                              </div>
                            </div>
                          </div>
                       </div>
                        {/* DELETE MODAL End*/}
                    </div>
                </div>
            </div>
           </div>
         </div>
          {/* 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
           <div className="px-1 p-3">
            <div className='conteiner-fluid m-0 p-0'>
                <div className='row m-0  p-0 border border-0 border-gray productBoxMain shadow' style={{borderRadius:'.75rem'}}>
                    <div className='col-12 col-md-6 col-lg-5 m-0 p-0  border border-0 border-danger' style={{ borderBottomLeftRadius:'.75rem',borderTopLeftRadius:'.75rem',backgroundImage:`url(${prodcutImg})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                    </div>
                    <div className='col-12 col-md-6 col-lg-7 border border-0 border-success m-0 p-0'>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product ID :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Catagorey :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Store Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Date Added :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Promotion :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Availablity :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>No, of Items :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0 d-flex align-items-center justify-content-between'>
                        <button type="button" className=" mb-2 btn bg-transparent shadow border py-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                        <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}} data-bs-toggle="modal" data-bs-target="#exampleModal2">Delete</button></p>
                        {/* EDIT MODAL START*/}
                           <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div className="modal-dialog">
                               <div className="modal-content">
                                 <div className="modal-header">
                                   <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div className="modal-body border border-0 border-success">
                                    <div className='container-fluid m-0 p-0'>
                                         <div className='row m-0 p-0 d-flex align-items-center justify-content-center'>
                                               <div className='col-12 d-flex flex-column mb-1 m-0 p-0 border border-0 border-success'>    
                                                    <img className='img-fluid w-100 m-0 p-0' alt='test' src={prodcutImg} style={{height:'15rem'}} ></img>
                                                    <p className='mb-0 position-relative d-flex flex-column flex-wrap text-end m-0 px-2 p-0 border border-0 border-danger'>
                                                      <input type="file" style={{visibility:'hidden'}} name="file" id="file" className="m-0 inputfile" onChange={getUploadedImage}/>
                                                      <label className='position-absolute m-0' for="file">Change Photo</label>
                                                    </p>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label className='text-start'>Product Name</label>
                                                  <input type='text' placeholder='Product Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Catagorey</label>
                                                  <input type='text' placeholder='Product Catagorey'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Store Name</label>
                                                  <input type='text' placeholder='Store Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Price</label>
                                                  <input type='text' placeholder='Product Price'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Promotion</label>
                                                  <input type='text' placeholder='Promotion'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Added Date</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Availablity</label>
                                                   <select className="form-select" aria-label="Default select example" onChange={getChange}>
                                                      <option selected>In Stock</option>
                                                      <option value="1">In Stock</option>
                                                      <option value="2">Out Of Stock</option>
                                                    </select>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>No of Items</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                          
                                         </div>
                                    </div>
                                 </div>
                                 <div className="modal-footer d-flex align-items-start justify-content-start">
                                    {/* <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}}>Delete</button> */}
                                   <button type="button" className="mb-2 btn text-light py-1"style={{backgroundColor:styles.lightTheme.btnColor}}>Update Product</button>
                                   <button type="button" className="mb-2 btn bg-transparent shadow border py-1" data-bs-dismiss="modal">Cancel</button>
                                 </div>
                               </div>
                             </div>
                           </div> 
                               
                        {/* EDIT MODAL END*/}
                        {/* DELETE MODAL START*/}
                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-body">
                                <p>Are you sure you want to delete this item ?</p>
                                <p className='border border-0 border-danger d-flex align-items-center justify-content-end'>
                                  <button className='mx-1 py-1 p-0 btn btn-light shadow' data-bs-dismiss="modal">Cancel</button>
                                  <button className='mx-1 py-1 p-0 btn btn-danger' data-bs-dismiss="modal">Delete</button>
                                </p>
                              </div>
                            </div>
                          </div>
                       </div>
                        {/* DELETE MODAL End*/}
                    </div>
                </div>
            </div>
           </div>
         </div>
         {/* 3 */}
         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
           <div className="px-1 p-3">
            <div className='conteiner-fluid m-0 p-0'>
                <div className='row m-0  p-0 border border-0 border-gray productBoxMain shadow' style={{borderRadius:'.75rem'}}>
                    <div className='col-12 col-md-6 col-lg-5 m-0 p-0  border border-0 border-danger' style={{ borderBottomLeftRadius:'.75rem',borderTopLeftRadius:'.75rem',backgroundImage:`url(${prodcutImg})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                    </div>
                    <div className='col-12 col-md-6 col-lg-7 border border-0 border-success m-0 p-0'>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product ID :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Catagorey :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Store Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Date Added :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Promotion :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Availablity :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>No, of Items :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0 d-flex align-items-center justify-content-between'>
                        <button type="button" className=" mb-2 btn bg-transparent shadow border py-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                        <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}} data-bs-toggle="modal" data-bs-target="#exampleModal2">Delete</button></p>
                        {/* EDIT MODAL START*/}
                           <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div className="modal-dialog">
                               <div className="modal-content">
                                 <div className="modal-header">
                                   <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div className="modal-body border border-0 border-success">
                                    <div className='container-fluid m-0 p-0'>
                                         <div className='row m-0 p-0 d-flex align-items-center justify-content-center'>
                                               <div className='col-12 d-flex flex-column mb-1 m-0 p-0 border border-0 border-success'>    
                                                    <img className='img-fluid w-100 m-0 p-0' alt='test' src={prodcutImg} style={{height:'15rem'}} ></img>
                                                    <p className='mb-0 position-relative d-flex flex-column flex-wrap text-end m-0 px-2 p-0 border border-0 border-danger'>
                                                      <input type="file" style={{visibility:'hidden'}} name="file" id="file" className="m-0 inputfile" onChange={getUploadedImage}/>
                                                      <label className='position-absolute m-0' for="file">Change Photo</label>
                                                    </p>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label className='text-start'>Product Name</label>
                                                  <input type='text' placeholder='Product Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Catagorey</label>
                                                  <input type='text' placeholder='Product Catagorey'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Store Name</label>
                                                  <input type='text' placeholder='Store Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Price</label>
                                                  <input type='text' placeholder='Product Price'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Promotion</label>
                                                  <input type='text' placeholder='Promotion'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Added Date</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Availablity</label>
                                                   <select className="form-select" aria-label="Default select example" onChange={getChange}>
                                                      <option selected>In Stock</option>
                                                      <option value="1">In Stock</option>
                                                      <option value="2">Out Of Stock</option>
                                                    </select>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>No of Items</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                          
                                         </div>
                                    </div>
                                 </div>
                                 <div className="modal-footer d-flex align-items-start justify-content-start">
                                    {/* <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}}>Delete</button> */}
                                   <button type="button" className="mb-2 btn text-light py-1"style={{backgroundColor:styles.lightTheme.btnColor}}>Update Product</button>
                                   <button type="button" className="mb-2 btn bg-transparent shadow border py-1" data-bs-dismiss="modal">Cancel</button>
                                 </div>
                               </div>
                             </div>
                           </div> 
                               
                        {/* EDIT MODAL END*/}
                        {/* DELETE MODAL START*/}
                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-body">
                                <p>Are you sure you want to delete this item ?</p>
                                <p className='border border-0 border-danger d-flex align-items-center justify-content-end'>
                                  <button className='mx-1 py-1 p-0 btn btn-light shadow' data-bs-dismiss="modal">Cancel</button>
                                  <button className='mx-1 py-1 p-0 btn btn-danger' data-bs-dismiss="modal">Delete</button>
                                </p>
                              </div>
                            </div>
                          </div>
                       </div>
                        {/* DELETE MODAL End*/}
                    </div>
                </div>
            </div>
           </div>
         </div>
         {/* 4 */}
         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
           <div className="px-1 p-3">
            <div className='conteiner-fluid m-0 p-0'>
                <div className='row m-0  p-0 border border-0 border-gray productBoxMain shadow' style={{borderRadius:'.75rem'}}>
                    <div className='col-12 col-md-6 col-lg-5 m-0 p-0  border border-0 border-danger' style={{ borderBottomLeftRadius:'.75rem',borderTopLeftRadius:'.75rem',backgroundImage:`url(${prodcutImg})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                    </div>
                    <div className='col-12 col-md-6 col-lg-7 border border-0 border-success m-0 p-0'>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product ID :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Product Catagorey :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Store Name :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Date Added :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Promotion :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>Availablity :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0'>No, of Items :</p>
                        <p className='px-2 text-start border border-0 border-success mb-1 m-0 p-0 d-flex align-items-center justify-content-between'>
                        <button type="button" className=" mb-2 btn bg-transparent shadow border py-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                        <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}} data-bs-toggle="modal" data-bs-target="#exampleModal2">Delete</button></p>
                        {/* EDIT MODAL START*/}
                           <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div className="modal-dialog">
                               <div className="modal-content">
                                 <div className="modal-header">
                                   <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div className="modal-body border border-0 border-success">
                                    <div className='container-fluid m-0 p-0'>
                                         <div className='row m-0 p-0 d-flex align-items-center justify-content-center'>
                                               <div className='col-12 d-flex flex-column mb-1 m-0 p-0 border border-0 border-success'>    
                                                    <img className='img-fluid w-100 m-0 p-0' alt='test' src={prodcutImg} style={{height:'15rem'}} ></img>
                                                    <p className='mb-0 position-relative d-flex flex-column flex-wrap text-end m-0 px-2 p-0 border border-0 border-danger'>
                                                      <input type="file" style={{visibility:'hidden'}} name="file" id="file" className="m-0 inputfile" onChange={getUploadedImage}/>
                                                      <label className='position-absolute m-0' for="file">Change Photo</label>
                                                    </p>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label className='text-start'>Product Name</label>
                                                  <input type='text' placeholder='Product Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Catagorey</label>
                                                  <input type='text' placeholder='Product Catagorey'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Store Name</label>
                                                  <input type='text' placeholder='Store Name'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Product Price</label>
                                                  <input type='text' placeholder='Product Price'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Promotion</label>
                                                  <input type='text' placeholder='Promotion'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Added Date</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>Availablity</label>
                                                   <select className="form-select" aria-label="Default select example" onChange={getChange}>
                                                      <option selected>In Stock</option>
                                                      <option value="1">In Stock</option>
                                                      <option value="2">Out Of Stock</option>
                                                    </select>
                                               </div>
                                               <div className='col-6 mb-1 m-0 px-2 p-0 d-flex flex-column align-items-start justify-content-start'>
                                                  <label>No of Items</label>
                                                  <input type='text' placeholder='Aded Date'></input>
                                               </div>
                                          
                                         </div>
                                    </div>
                                 </div>
                                 <div className="modal-footer d-flex align-items-start justify-content-start">
                                    {/* <button  type="button" className="mb-2 btn text-light py-1" style={{backgroundColor:styles.lightTheme.btnColor}}>Delete</button> */}
                                   <button type="button" className="mb-2 btn text-light py-1"style={{backgroundColor:styles.lightTheme.btnColor}}>Update Product</button>
                                   <button type="button" className="mb-2 btn bg-transparent shadow border py-1" data-bs-dismiss="modal">Cancel</button>
                                 </div>
                               </div>
                             </div>
                           </div> 
                               
                        {/* EDIT MODAL END*/}
                        {/* DELETE MODAL START*/}
                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-body">
                                <p>Are you sure you want to delete this item ?</p>
                                <p className='border border-0 border-danger d-flex align-items-center justify-content-end'>
                                  <button className='mx-1 py-1 p-0 btn btn-light shadow' data-bs-dismiss="modal">Cancel</button>
                                  <button className='mx-1 py-1 p-0 btn btn-danger' data-bs-dismiss="modal">Delete</button>
                                </p>
                              </div>
                            </div>
                          </div>
                       </div>
                        {/* DELETE MODAL End*/}
                    </div>
                </div>
            </div>
           </div>
         </div>
         {/* 5 */}
        
         {/* end */}
       </div>
    </div>
  )
}

export default AdminProductScreen