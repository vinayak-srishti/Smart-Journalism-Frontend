import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Jprofile.css"
import Adminsidebar from './Adminsidebar'
function JournalistProfile() {
  const [journalist, setJournalist] = useState(null); 
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.post(`http://localhost:4033/viewjournalistid/${id}`)
      .then(result => {
        console.log(result);
        setJournalist(result.data.msg);
      })
      .catch(error => {
        console.error('There was an error fetching the data', error);
      });
  }, [id]);

  const deleteFunc = () => {
    axios.post(`http://localhost:4033/deletejournalist/${id}`)
      .then(result => {
        console.log(result);
        alert("Delete successful");
        navigate('/vj'); 
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
          {journalist?.image && <img src={`http://localhost:4033/${journalist.image.filename}`} alt={`${journalist?.Name}`} />}
          <h1>{journalist?.Name}</h1>
       
        <div className="profile-details">
          <p className="card-text"><b>Password:</b> {journalist?.Password}</p>
          <p className="card-text"><b>Contact:</b> {journalist?.Contact}</p>
          <p className="card-text"><b>Email:</b> {journalist?.Email}</p>
          <p className="card-text"><b>Gender:</b> {journalist?.Gender}</p>
          <p className="card-text"><b>DOB:</b> {journalist?.DOB}</p>
          <p className="card-text"><b>Age:</b> {journalist?.Age}</p>
          <p className="card-text"><b>Blood Group:</b> {journalist?.Bloodgroup}</p>
          <p className="card-text"><b>Qualification:</b> {journalist?.Qualification}</p>
          <p className="card-text"><b>Address: </b>{journalist?.Address}</p>
          <button onClick={deleteFunc} className="btn btn-danger mt-3">Delete</button>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default JournalistProfile;
