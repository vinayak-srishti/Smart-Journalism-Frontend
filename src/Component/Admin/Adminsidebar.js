import React from 'react'
import './Adminside.css'
import adminlogo from './Image/adminlogo.jpg'
import { Link } from 'react-router-dom'
function Adminsidebar() {
  return (
    <div className='side'>
        <div class="sidebar">
        <img src={adminlogo} alt="User Avatar"/>
        <h2>ADMIN</h2>
        
        <br></br>
        <a href="./Adminmain">HOME</a>
        
        <a href="./Vj">JOURNALIST</a>
        <a href="./Avn">NEWS</a>
        <a href="./Vp">USER</a>
        <a href="./Vr">REQUEST</a>
<br></br>
<Link to="/Mainhome"><button type="submit" class="btn btn-outline-secondary"><b>LOGOUT</b></button></Link>
    </div>
    </div>
   
  )
}

export default Adminsidebar