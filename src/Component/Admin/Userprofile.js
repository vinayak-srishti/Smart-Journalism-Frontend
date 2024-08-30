import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Jprofile.css"
import Adminsidebar from './Adminsidebar'

function Userprofile() {
    const [user, setUser] = useState(null); 
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.post(`http://localhost:4033/viewuserid/${id}`)
      .then(result => {
        console.log(result);
        setUser(result.data.msg);
      })
      .catch(error => {
        console.error('There was an error fetching the data', error);
      });
  }, [id]);

  const deleteFunc = () => {
    axios.post(`http://localhost:4033/deleteuser/${id}`)
      .then(result => {
        console.log(result);
        alert("Delete successful");
        navigate('/vp'); 
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className='row'>
<div className='col-2'>
    <Adminsidebar/>
</div>
<div className='col-10'>
   

    <div className="user-profile">
      <div className="profile-header">
        <div className="card-body">
          
          <h1>{user?.Name}</h1>
       
        <div className="profile-details">
        <p className="card-text"><b>Email:</b> {user?.Email}</p>
          <p className="card-text"><b>Password:</b> {user?.Password}</p>
          <p className="card-text"><b>Contact:</b> {user?.Contact}</p>
          
          <p className="card-text"><b>Gender:</b> {user?.Gender}</p>
          
          <p className="card-text"><b>Age:</b> {user?.Age}</p>
          
          
          <button onClick={deleteFunc} className="btn btn-danger mt-3">Delete</button>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Userprofile