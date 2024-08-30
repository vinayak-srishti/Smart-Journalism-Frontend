

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Contactt.css'; 

function Contactt() {
  return (
    <div className="contact-container">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-10">
            <div className="card card-registration my-3">
              <div className="row g-0">
                <div className="col-lg-6 d-flex align-items-center justify-content-center contact-info">
                  <div className="text-center px-3">
                    <h3>We are here to help!</h3>
                    <p>
                      Let us know how we can best assist you. Use the contact form to email us or select the topics below that best fit your needs. It's an honor to support you in your journey towards better health.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6"style={{border:"1px solid #05192c"}}>
                  <div className="card-body p-md-5 text-black">
                    <form>
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          id="name"
                          className="form-control form-control-lg"
                          style={{outline: "none",
                            boxShadow: "none",
                            border:"1px solid black",borderRadius:"0px"}}
                          placeholder="Name"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          style={{outline: "none",
                            boxShadow: "none", border:"1px solid black",borderRadius:"0px"}}
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          id="phone"
                          className="form-control form-control-lg"
                          style={{outline: "none",
                            boxShadow: "none", border:"1px solid black",borderRadius:"0px"}}
                          placeholder="Phone number"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <textarea
                          id="message"
                          className="form-control form-control-lg"
                          style={{outline: "none",
                            boxShadow: "none", border:"1px solid black",borderRadius:"0px"}}
                          rows="4"
                          placeholder="Comment"
                        ></textarea>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary btn-lg" style={{borderRadius:"0px",width:"350px",backgroundColor:" #05192c",border:"none"}}>
                          Send Message
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
    </div>
  );
}

export default Contactt;



