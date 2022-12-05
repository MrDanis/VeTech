import React from 'react'
import {GiSellCard} from 'react-icons/gi'
import { MdOutlineStorefront,MdPreview } from 'react-icons/md'
import { styles } from '../../Assets/StylesGlobal'
const OvierViewSection = () => {
  return (
    <div className="container-fluid mt-3 m-0 px-5 p-0">
      <div className='row my-1 px-3 g-3'>
       <h4 className='text-start'>Activity Overview</h4>
      </div>

    <div className="row px-3 g-3">
      <div className="col-12 col-md-4">
        <div className="p-3 border bg-light shadow" style={{borderRadius:'.85rem'}}>
          <p className='d-flex flex-row justify-content-between fs-3 border border-0 border-success'>
            <span className='m-0 p-0 text-start'>Delivered</span>
            <GiSellCard className='m-0 p-0 text-end'></GiSellCard>
          </p>
          <p className='m-0 p-0 d-flex flex-row justify-content-between fs-3 border border-0 border-success' style={{color:styles.lightTheme.btnColor}}>
            345
          </p>
         
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="p-3 border bg-light shadow" style={{borderRadius:'.85rem'}}>
        <p className='d-flex flex-row justify-content-between fs-3 border border-0 border-success'>
            <span className='m-0 p-0 text-start'>Orders</span>
            <MdOutlineStorefront className='m-0 p-0 text-end'></MdOutlineStorefront>
          </p>
          <p className='m-0 p-0 d-flex flex-row justify-content-between fs-3 border border-0 border-success' style={{color:styles.lightTheme.btnColor}}>
           765
          </p>
        
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="p-3 border bg-light shadow" style={{borderRadius:'.85rem'}}>
        <p className='d-flex flex-row justify-content-between fs-3 border border-0 border-success'>
            <span className='m-0 p-0 text-start'>Cancel</span>
            <MdPreview className='m-0 p-0 text-end'></MdPreview>
        </p>
          <p className='m-0 p-0 d-flex flex-row justify-content-between fs-3 border border-0 border-success' style={{color:styles.lightTheme.btnColor}}>
            12
          </p>
        </div>
      </div>
      <div className="col-6 d-none">
        <div className="p-3 border bg-light">Custom column padding</div>
      </div>
    </div>
  </div>
  )
}

export default OvierViewSection