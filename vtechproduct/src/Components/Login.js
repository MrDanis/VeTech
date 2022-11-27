import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { styles } from '../Assets/StylesGlobal';
import CommonInput from '../CommonComponents/CommonInput';
import ThemeButton from '../CommonComponents/ThemeButton';
import bgLogo from '../Assets/images/MainLogo.png'
const Login = (props) => {
  useEffect(()=>{
    // console.log('props passsing to components are : ',props) w-100 w-sm-50 w-md-25;
  },[props])
  return (
    <div className='container-fluid  m-0 px-4 py-5 p-0 border border-0 border-success d-flex align items-center justify-content-center'>
      <div className='row py-3 w-25 m-0 p-0 d-flex align items-center justify-content-center shadow border border-0 border-danger' style={{borderRadius:'16px'}}>
       <div className='mb-3 m-0 p-2 col-10 col-sm-8 col-md-11 border border-0 border-danger'>
        <img className='img-fluid' alt='test' src={bgLogo}></img>
        </div>
        {/* Ya to is k nichy wali div ki form ki trha loop k baghir rakhna hoga is ka koi hal daikhna pry ga */}
        {
          props.data.map((item,index)=>{
            return(
              <div key={index} className='m-0 p-2 col-10 col-sm-8 col-md-11 border border-0 border-dark  d-flex align items-center justify-content-center flex-wrap'>
                <CommonInput placeholder={item}></CommonInput>
              </div>
            )
          })
        }
        {/* Ya to is k nichy wali div ki form ki trha loop k baghir rakhna hoga is ka koi hal daikhna pry ga */}
      <ThemeButton  btnBgColor={styles.lightTheme.btnColor} btnText={props.btnText}></ThemeButton>
      <p className='mt-2'>{props.textInfo} <Link to={props.redirectTo}>{props.redirectedText}</Link></p>
      </div>
    </div>
  )
}

export default Login