import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Table.css"
function Registereduser() {
    const [details,setDetails]=useState([]);
  useEffect(()=>{
    axios.post('http://localhost:4033/viewalluser')
    .then((result)=>{
      console.log(result)
      setDetails(result.data.data)
      console.log(result.data.data)
    })
    .catch((error)=>{
      console.log(error)
    })

  }, []);
return (
   <div>
     
     <h3 className='heading'>REGISTERED USERS</h3>
         <br></br>
            <table striped
            bordered
            hover
            className='md-3 ms-9'
            style={{width:"100%", border:"1px ",color:"black"}}>
        
         
          
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">ViewMore</th>
    </tr>
  </thead>
  <tbody>
      {details.map((a, index) => (
            <tr >
              <td>{index + 1}</td>
              <td>{a.Name}</td>
              
              <td>{a.Email}</td>
              <td>{a.Password}</td>
              
              <td><Link to={`/Userprofile/${a._id}`}>ViewMore</Link></td>
            </tr>
          ))} 
        
      </tbody>
</table>

        </div>
    
  )
}

export default Registereduser