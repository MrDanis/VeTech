import React from 'react'
import Login from '../../Components/Login'
const Authentication = (props) => {
  return (
    <div className='container-fluid  border border-0 border-success'>
      {
        props.componentType === 'singUp'?<Login data={['Full Name','Email','Phone#','Address','CNIC','Password','Confirm Password']} btnText='Sing Up' textInfo='Already have an account.' redirectTo='/Login' redirectedText='Login'></Login>
       :props.componentType === 'login'?<Login data={['Email','Password']} btnText='Login' textInfo='Register Now' redirectTo='/' redirectedText='Click Here'></Login>:
       <Login data={['Verification Code']} btnText='Confirm Code' textInfo='Back to' redirectTo='/' redirectedText='Sing Up'></Login>
      }
    </div>
  )
}

export default Authentication