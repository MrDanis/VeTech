import React from 'react'

const CommonInput = (props) => {
  return (
    <input className='p-1 w-100 outline-none border-start-0 border-end-0 border-top-0 border-bottom-1 ' placeholder={props.placeholder} type=''></input>
  )
}

export default CommonInput