import React, { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from  'axios';
import './Viewdetails.css'

function Viewuser() {
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
        <br></br>
        <br></br>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        View All User
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      {/* {details.length ? (
                  details.map((user, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                      <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                          <h5 className="card-title">Name:{user.name}</h5>
                          <p className="card-text">Password: {user.password}</p>
                          <p className="card-text">Email: {user.email}</p>
                          <p className="card-text">Gender: {user.gender}</p>
                          <p className="card-text">Age: {user.age}</p>
                          <p className="card-text">Phone: {user.phone}</p>
                          <p className="card-text">Address: {user.address}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">No Data to display</h5>
                      </div>
                    </div>
                  </div>
                )} */}
                 {
            details.map((a)=>{
                return(
                    <div>
                       <div class="container text-center">
                <div class="row">
                     <div class="row  row-md-3 g-3">
  
                      <div className="card" style={{ width: "18rem" }}>
                        
                      <div className="card-body">
                          <p className="card-txet"><b>Name:{a.Name}</b></p>
                          <p className="card-text">Password: {a.Password}</p>
                          <p className="card-text">Email: {a.Email}</p>
                          <p className="card-text">Gender: {a.Gender}</p>
                          <p className="card-text">Age: {a.Age}</p>
                          <p className="card-text">Phone: {a.Phone}</p>
                          <p className="card-text">Address: {a.Address}</p>
                        </div>   
                    </div>
                    </div>
                    </div>
                     </div>
                    </div>
                    
                
                )
            })
        }
              </div>
    </div>
  </div>
  
  </div>
</div>
   
  )
}

export default Viewuser