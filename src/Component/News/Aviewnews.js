import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './News.css'
import axios from 'axios';
import {useParams, useNavigate } from 'react-router-dom';

function Aviewnews() {
    const [details, setDetails] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
   
    const uploadnews = () => {
        axios.post('http://localhost:4033/viewallnews')
          .then((result) => {
            console.log(result);
            setDetails(result.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    useEffect(() => {
        
         uploadnews();
      }, []);
    const deleteFunc = () => {
        axios.post(`http://localhost:4033/pdeletenews/${id}`)
          .then(result => {
            console.log(result);
            alert("Delete successful");
            uploadnews();
            navigate('/Jourhomenav'); 
          })
          .catch(error => {
            console.log(error);
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
                                                    <button onClick={() =>  deleteFunc(a._id)} className="btn btn-primary" style={{ backgroundColor: "red", border: "none", width: "180px" }}>
                                                        Delete News
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

export default Aviewnews