
import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaVenusMars, FaBirthdayCake } from 'react-icons/fa';

function Uerreg() {
 
  const [data, setData] = useState({ name: '', email: '', password: '', contact: '', gender: '', age: '' });

  const example = (a) => {
    console.log(a);
    setData({ ...data, [a.target.name]: a.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4033/userreg', data)
      .then((result) => {
        console.log(result);
        alert("Register Successfully");
       
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("save");
  };

  console.log(data);

  return (
    <div>
      <div className="mask d-flex align-items-center h-100 gradient-custom-2">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-8 col-xl-6">
              <div className="card" style={{ borderRadius: '15px', border: 'none', backgroundColor: "transparent", height: "580px", textAlign: "center" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-3" style={{ color: "#726e6e", fontSize: "30", fontFamily: "fantasy" }}>CREATE AN ACCOUNT</h2>

                  <form onSubmit={onSubmit}>
                    <div className="form-outline mb-4 d-flex justify-content-center">
                      <div className="input-group" style={{ width: '400px' }}>
                        <span className="input-group-text"style={{borderRadius: "0px",border: "1px solid rgb(10, 10, 10)"}}><FaUser /></span>
                        <input
                          type="text"
                          id="Name"
                          className="form-control form-control-lg"
                          style={{
                            border: "1px solid rgb(10, 10, 10)",
                            borderRadius: "0px",
                            padding: "10px",
                            fontSize: "15px",
                            outline: "none",
                            boxShadow: "none",
                            backgroundColor: "transparent"
                          }}
                          placeholder="Name"
                          onChange={example}
                          name='name'
                          value={data.name}
                        />
                      </div>
                    </div>

                    <div className="form-outline mb-4 d-flex justify-content-center">
                      <div className="input-group" style={{ width: '400px' }}>
                        <span className="input-group-text"style={{ borderRadius: "0px",border: "1px solid rgb(10, 10, 10)"}}><FaEnvelope /></span>
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          style={{
                            border: "1px solid rgb(10, 10, 10)",
                            borderRadius: "0px",
                            padding: "10px",
                            fontSize: "15px",
                            outline: "none",
                            boxShadow: "none",
                            backgroundColor: "transparent"
                          }}
                          placeholder="Email"
                          onChange={example}
                          name='email'
                          value={data.email}
                        />
                      </div>
                    </div>

                    <div className="form-outline mb-4 d-flex justify-content-center">
                      <div className="input-group" style={{ width: '400px' }}>
                        <span className="input-group-text"style={{ borderRadius: "0px",border: "1px solid rgb(10, 10, 10)"}}><FaLock /></span>
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          style={{
                            border: "1px solid rgb(10, 10, 10)",
                            borderRadius: "0px",
                            padding: "10px",
                            fontSize: "15px",
                            outline: "none",
                            boxShadow: "none",
                            backgroundColor: "transparent"
                          }}
                          placeholder="Password"
                          onChange={example}
                          name='password'
                          value={data.password}
                        />
                      </div>
                    </div>

                    <div className="form-outline mb-4 d-flex justify-content-center">
                      <div className="input-group" style={{ width: '400px' }}>
                        <span className="input-group-text"style={{ borderRadius: "0px",border: "1px solid rgb(10, 10, 10)"}}><FaPhone /></span>
                        <input
                          type="text"
                          id="Contact"
                          className="form-control form-control-lg"
                          style={{
                            border: "1px solid rgb(10, 10, 10)",
                            borderRadius: "0px",
                            padding: "10px",
                            fontSize: "15px",
                            outline: "none",
                            boxShadow: "none",
                            backgroundColor: "transparent"
                          }}
                          placeholder="Contact"
                          onChange={example}
                          name='contact'
                          value={data.contact}
                        />
                      </div>
                    </div>

                    <div className="form-outline mb-4 d-flex justify-content-center">
                      <div className="input-group" style={{ width: '400px' }}>
                        <span className="input-group-text" style={{ borderRadius: "0px",border: "1px solid rgb(10, 10, 10)"}}><FaVenusMars /></span>
                        <input
                          type="text"
                          id="Gender"
                          className="form-control form-control-lg"
                          style={{
                            border: "1px solid rgb(10, 10, 10)",
                            borderRadius: "0px",
                            padding: "10px",
                            fontSize: "15px",
                            outline: "none",
                            boxShadow: "none",
                            backgroundColor: "transparent"
                          }}
                          placeholder="Gender"
                          onChange={example}
                          name='gender'
                          value={data.gender}
                        />
                      </div>
                    </div>

                    <div className="form-outline mb-4 d-flex justify-content-center">
                      <div className="input-group" style={{ width: '400px' }}>
                        <span className="input-group-text"style={{ borderRadius: "0px",border: "1px solid rgb(10, 10, 10)"}}><FaBirthdayCake /></span>
                        <input
                          type="number"
                          id="Age"
                          className="form-control form-control-lg"
                          style={{
                            border: "1px solid rgb(10, 10, 10)",
                            borderRadius: "0px",
                            padding: "10px",
                            fontSize: "15px",
                            outline: "none",
                            boxShadow: "none",
                            backgroundColor: "transparent"
                          }}
                          placeholder="Age"
                          onChange={example}
                          name='age'
                          value={data.age}
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ width: '400px', border: 'none',borderRadius:"1px" ,backgroundColor: '#05192c' }}
                      >
                        Sign up
                      </button>
                    </div>

                   

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

export default Uerreg;
