import React,{useEffect} from 'react'
import { styles } from '../Assets/StylesGlobal'
import { login } from '../Store/Reducers/AuthenticationSlice'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
const ThemeButton = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
   
    const validateAndNavigate = ()=>{
        setTimeout(()=>{
            navigate('/Verification')
        },2000)
    }
    const loginAndNavigate =()=>{
        setTimeout(()=>{
            dispatch(login())
            // localStorage.setItem('user', JSON.stringify('admin'));
            navigate('/admindashboard')
        },2000)
    }
    
  return (
    <>
    {
      props.btnText === 'Sing Up'?
      <button className='btn rounded-pill w-50 my-2 fw-bold' onClick={validateAndNavigate} style={{backgroundColor:props.btnBgColor,fontSize:'0.875rem',color:styles.lightTheme.btnTextColor}}>
       {props.btnText}
      </button>:
       props.btnText === 'Login'?
       <button className='btn rounded-pill w-50 my-2 fw-bold' onClick={loginAndNavigate} style={{backgroundColor:props.btnBgColor,fontSize:'0.875rem',color:styles.lightTheme.btnTextColor}}>
        {props.btnText}
      </button> 
       :
      <button className='btn my-2 fw-bold' style={{backgroundColor:props.btnBgColor,fontSize:'0.875rem',color:styles.lightTheme.btnTextColor}}>
        {props.btnText}
      </button>
    }
    </>
  )
}

export default ThemeButton