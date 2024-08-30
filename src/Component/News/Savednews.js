
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './News.css'
import axios from 'axios';
function Savednews() {
    const [save, setSave] = useState([]); 
    const getsavednews = () => {
        axios.post('http://localhost:4033/viewsavenews')
          .then((result) => {
            console.log(result);
            setSave(result.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    useEffect(() => {
        
         getsavednews();
      }, []);
      const deletenews = (id) => {
        const confirmReject = window.confirm("Are you sure you want to reject this request?");
        if (confirmReject) {
          axios.post(`http://localhost:4033/pdeletenews/${id}`)
            .then((result) => {
              console.log(result);
              alert("Delete successful");
              getsavednews();
            })
            .catch((error) => {
              console.log(error);
              alert("Deletion Failed");
            });
        }
      };
  return (
    <div>
<div className="accordion" id="accordionExample">
        <div className="accordion-item">
            
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div className="container text-center">
                        <div className="row">
                            {save.map((a) => (
                                <div className="col-md-6 mb-4" key={a._id}>
                                    <div className="card" style={{ width: "22rem", textAlign: "center" }}>
                                        <div className="card-body">
                                            
                                            
                                            <p className="card-text">Title: {a.Title}</p>
                                            <p className="card-text"><img src={`http://localhost:4033/${a.image?.filename}`} className="image1-size" alt="description" /></p>
                                            <p className="card-text">Date: {a.Date}</p>
                                            <p className="card-text">Location: {a.Location}</p>
                                            
                                            <p className="card-text">Content: {a.Content}</p>
                                            <p className="card-text">Journalist: {a.Journalist}</p>
                                            
                                            <br />
                                            <button onClick={() =>  deletenews(a._id)} className="btn btn-primary" style={{ backgroundColor: "red", border: "none", width: "180px" }}>
                                                Unsave News
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


    </div>
    </div>
  )
}

export default Savednews