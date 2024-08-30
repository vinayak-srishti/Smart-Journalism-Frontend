
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Viewdetails.css';
import axios from 'axios';

function Viewjournalist() {
  const [details, setDetails] = useState([]);
  const [approvedDetails, setApprovedDetails] = useState([]);

  const getAllJournalistReqs = () => {
    axios.post('http://localhost:4033/viewalljournalistReqs')
      .then((result) => {
        console.log(result);
        setDetails(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getApprovedJournalists = () => {
    axios.post('http://localhost:4033/viewapprovedjournalist')
      .then((result) => {
        console.log(result);
        setApprovedDetails(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllJournalistReqs();
    getApprovedJournalists();
  }, []);

  const approveJournalist = (id) => {
    axios.post(`http://localhost:4033/approvejournalist/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert("Approved");
          getAllJournalistReqs();
        } else if (res.data.status === 400) {
          alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Approval Failed");
      });
  };

  const rejectRequest = (id) => {
    const confirmReject = window.confirm("Are you sure you want to reject this request?");
    if (confirmReject) {
      axios.post(`http://localhost:4033/deletejournalist/${id}`)
        .then((result) => {
          console.log(result);
          alert("Delete successful");
          getAllJournalistReqs();
        })
        .catch((error) => {
          console.log(error);
          alert("Deletion Failed");
        });
    }
  };

  return (
    <div>
      <br />
      <br />

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              View All Journalist Requests
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="container text-center">
                <div className="row">
                  {details.map((a) => (
                    <div className="col-md-6 mb-4" key={a._id}>
                      <div className="card" style={{ width: "22rem", textAlign: "center" }}>
                        <div className="card-body">
                          <p className="card-text"><b>Name: {a.Name}</b></p>
                          <p className="card-text"><img src={`http://localhost:4033/${a.image?.filename}`} className="image-size" alt="description" /></p>
                          <p className="card-text">Password: {a.Password}</p>
                          <p className="card-text">Contact: {a.Contact}</p>
                          <p className="card-text">Email: {a.Email}</p>
                          <p className="card-text">Gender: {a.Gender}</p>
                          <p className="card-text">DOB: {a.DOB}</p>
                          <p className="card-text">Age: {a.Age}</p>
                          
                          <p className="card-text">Qualification: {a.Qualification}</p>
                          <p className="card-text">Address: {a.Address}</p>

                          <button onClick={() => approveJournalist(a._id)} className="btn btn-primary" style={{ backgroundColor: "green", border: "none", width: "180px" }}>
                            Approve Request
                          </button>
                          <br />
                          <br />
                          <button onClick={() => rejectRequest(a._id)} className="btn btn-primary" style={{ backgroundColor: "red", border: "none", width: "180px" }}>
                            Reject Request
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              View All Approved Journalists
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {approvedDetails.map((a) => (
                  <div className="col" key={a._id}>
                    <div className="card" style={{ width: "18rem", textAlign: "center" }}>
                      <div className="card-body">
                        <p className="card-text"><b>Name: {a.Name}</b></p>
                        <p className="card-text"><img src={`http://localhost:4033/${a.image?.filename}`} className="image-size" alt="description" /></p>
                        <p className="card-text">Password: {a.Password}</p>
                        <p className="card-text">Contact: {a.Contact}</p>
                        <p className="card-text">Email: {a.Email}</p>
                        <p className="card-text">Gender: {a.Gender}</p>
                        <p className="card-text">DOB: {a.DOB}</p>
                        <p className="card-text">Age: {a.Age}</p>
                        
                        <p className="card-text">Qualification: {a.Qualification}</p>
                        <p className="card-text">Address: {a.Address}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
       
        </div>
      </div>
    
  );
}

export default Viewjournalist;
