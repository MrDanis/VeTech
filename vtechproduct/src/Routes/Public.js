import React from 'react'
import Authentication from '../Screens/Punblic/Authentication'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const Public = () => {
  return (
    <div className='container-fluid m-0 p-0 border border-0 border-success'>
     <Router>
        <Routes>
          <Route path='/' element={<Authentication componentType='singUp'></Authentication>}></Route>
          <Route path='/Login' element={<Authentication componentType='login'></Authentication>}></Route>
          <Route path='/Verification' element={<Authentication componentType='verification'></Authentication>}></Route>
        </Routes>
     </Router>
    </div>
  )
}

export default Public