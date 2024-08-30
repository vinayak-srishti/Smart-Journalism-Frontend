
import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import axios from 'axios';
import { FaUser, FaLock, FaPhone, FaEnvelope, FaVenusMars, FaGraduationCap, FaBirthdayCake, FaCalendarAlt, FaHome, FaFileImage } from 'react-icons/fa';
import "./Reg.css";

function Journalistreg() {
  
  const [data, setData] = useState({ name: "", password: "", contact: "", email: "", gender: "", qualification: "", dob: "", age: "", address: "", image: "" });

  const example = (b) => {
    const { name, value, files } = b.target;
    if (name === "image") {
      setData({ ...data, image: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    axios.post("http://localhost:4033/journalistreg", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
      .then((result) => {
        console.log(result);
        alert("Registered Successfully");
        
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("save");
  };

  console.log(data);

  return (
    <div >
  <div className="mask d-flex align-items-center h-100 gradient-custom-2">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-8 col-xl-6">
              <div className="card" style={{ borderRadius: '15px', border: 'none', backgroundColor: "transparent", height: "580px", textAlign: "center" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-3" style={{ color: "#726e6e", fontSize: "30", fontFamily: "fantasy" }}>CREATE AN ACCOUNT</h2>

              <form onSubmit={onsubmit}>
                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text" style={{ borderRadius: "0px",border: "1px solid black" }}><FaUser /></span>
                    <input type="text" className="form-control form-control-lg" placeholder="Name"style={{
												border: "1px solid rgb(10, 10, 10)",
												borderRadius: "0px",
												padding: "10px",
												fontSize: "16px",
												height: "23px",
												width: "320px",
												outLine: "none",
												boxShadow: "none",
												backgroundColor:"transparent"
											}} onChange={example} name='name' value={data.name} />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text"style={{borderRadius: "0px", border: "1px solid black" }}><FaLock /></span>
                    <input type="password" className="form-control form-control-lg" placeholder="Password"style={{
												border: "1px solid rgb(10, 10, 10)",
                        borderRadius: "0px",
												padding: "10px",
												fontSize: "16px",
												height: "23px",
												width: "320px",
												outLine: "none",
												boxShadow: "none",
												backgroundColor:"transparent"
											}} onChange={example} name='password' value={data.password} />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text"style={{borderRadius: "0px", border: "1px solid black" }}><FaPhone /></span>
                    <input type="text" className="form-control form-control-lg" placeholder="Contact" style={{
												border: "1px solid rgb(10, 10, 10)",
												borderRadius: "0px",
												padding: "10px",
												fontSize: "16px",
												height: "23px",
												width: "320px",
												outLine: "none",
												boxShadow: "none",
												backgroundColor:"transparent"
											}}onChange={example} name='contact' value={data.contact} />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text"style={{borderRadius: "0px", border: "1px solid black" }}><FaEnvelope /></span>
                    <input type="text" className="form-control form-control-lg" placeholder="Email"style={{
												border: "1px solid rgb(10, 10, 10)",
												borderRadius: "0px",
												padding: "10px",
												fontSize: "16px",
												height: "23px",
												width: "350px",
												outLine: "none",
												boxShadow: "none",
												backgroundColor:"transparent"
											}} onChange={example} name='email' value={data.email} />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text"style={{borderRadius: "0px", border: "1px solid black" }}><FaVenusMars /></span>
                    <input type="text" className="form-control form-control-lg" placeholder="Gender"style={{
												border: "1px solid rgb(10, 10, 10)",
												borderRadius: "0px",
												padding: "10px",
												fontSize: "16px",
												height: "23px",
												width: "320px",
												outLine: "none",
												boxShadow: "none",
												backgroundColor:"transparent"
											}} onChange={example} name='gender' value={data.gender} />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text"style={{ borderRadius: "0px",border: "1px solid black" }}><FaGraduationCap /></span>
                    <input type="text" className="form-control form-control-lg" placeholder="Qualification"style={{
												border: "1px solid rgb(10, 10, 10)",
												borderRadius: "0px",
												padding: "10px",
												fontSize: "16px",
												height: "23px",
												width: "320px",
												outLine: "none",
												boxShadow: "none",
												backgroundColor:"transparent"
											}} onChange={example} name='qualification' value={data.qualification} />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text"style={{ borderRadius: "0px",border: "1px solid black" }}><FaBirthdayCake /></span>
                    <input type="date" className="form-control form-control-lg"style={{
												border: "1px solid rgb(10, 10, 10)",
												borderRadius: "0px",
												padding: "10px",
												fontSize: "16px",
												height: "23px",
												width: "320px",
												outLine: "none",
												boxShadow: "none",
												backgroundColor:"transparent"
											}} onChange={example} name='dob' value={data.dob} />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text"style={{borderRadius: "0px", border: "1px solid black" }}><FaCalendarAlt /></span>
                    <input type="number" className="form-control form-control-lg" placeholder="Age" style={{
												border: "1px solid rgb(10, 10, 10)",
												borderRadius: "0px",
												padding: "10px",
												fontSize: "16px",
												height: "23px",
												width: "320px",
												outLine: "none",
												boxShadow: "none",
												backgroundColor:"transparent"
											}}onChange={example} name='age' value={data.age} />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text"style={{ borderRadius: "0px",border: "1px solid black" }}><FaHome /></span>
                    <input type="text" className="form-control form-control-lg" placeholder="Address" style={{
												border: "1px solid rgb(10, 10, 10)",
												borderRadius: "0px",
												padding: "10px",
												fontSize: "16px",
												height: "23px",
												width: "320px",
												outLine: "none",
												boxShadow: "none",
												backgroundColor:"transparent"
											}}onChange={example} name='address' value={data.address} />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text"style={{borderRadius: "0px", border: "1px solid black" }}><FaFileImage /></span>
                    <input className="form-control" type="file" style={{
												border: "1px solid rgb(10, 10, 10)",
												borderRadius: "0px",
												padding: "10px",
												fontSize: "16px",
												// height: "23px",
												// width: "350px",
												outLine: "none",
												boxShadow: "none",
												backgroundColor:"transparent"
											}}onChange={example} name='image' />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary" type='submit' style={{ width: "500px", border: "none",borderRadius:"1px", backgroundColor: " #05192c" }} >Sign Up</button>
                </div>
                <br />
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Journalistreg;
