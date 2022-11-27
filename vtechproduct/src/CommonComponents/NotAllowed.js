import React from 'react'
import { Navigate } from 'react-router'
const NotAllowed = ({role,children}) => {
    console.log(role)
  if(role==='admin')
  {
    return children
  }else{
    return (
         <Navigate to={'/'}></Navigate>
    )
  }
}

export default NotAllowed