import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './News.css'
import axios from 'axios';
// import {useParams, useNavigate } from 'react-router-dom';
function Pviewnews() {
        
    const [details, setDetails] = useState([]);
    const [save, setSave] = useState([]);
    
  
    const getAllunsavenews = () => {
      axios.post('http://localhost:4033/viewunsavenews')
        .then((result) => {
          console.log(result);
          setDetails(result.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    // const getsavednews = () => {
    //     axios.post('http://localhost:4033/viewsavenews')
    //       .then((result) => {
    //         console.log(result);
    //         setSave(result.data.msg);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   };
    useEffect(() => {
        getAllunsavenews ();
        // getsavednews();
      }, []);
      const savenews = (id) => {
        axios.post(`http://localhost:4033/savenews/${id}`)
          .then((res) => {
            console.log(res);
            if (res.data.status === 200) {
              alert("Saved");
              getAllunsavenews();
            } else if (res.data.status === 400) {
              alert(res.data.msg);
            }
          })
          .catch((err) => {
            console.log(err);
            alert("Save Failed");
          });
      };
  return (
    <div>
    <br />
    <br />

    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div className="container text-center">
                        <div className="row">
                            {details.map((a) => (
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
                                            <button onClick={() => savenews(a._id)} className="btn btn-primary" style={{ backgroundColor: "green", border: "none", width: "180px" }}>
                                                Save News
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

export default Pviewnews