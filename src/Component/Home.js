import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img4 from './Image/img4.jpg'
import img5 from './Image/img5.jpg'
function Home() {
  return (
    <div>
        <section class="py-lg-16 py-6">
                <div class="container">
                  <div class="row d-flex align-items-center">
                    <div class=" col-xxl-5  col-xl-6 col-lg-6 col-12">
                      <div>
                        <h6 class="display-2 fw-bold mb-3">SMART<u class="text-warning"><br></br><span class="text-primary">Journalism</span></u></h6>
                        <p class="lead mb-4"> <b>JOURNALISM IS ALWAYS THE ART OF THE INCOMPLETE</b></p>
                        <p>Every journalist has a respomsibility.A respomsibility to change the ignorance that covers the world.I still belive that if your aim is to change the word,journalism is a more immediate short-term weapon.</p>
                        <ul class="list-unstyled mb-5">
                          <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="var(--gk-success)" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                            <span class="ms-2">No credit card required</span>
                          </li>
                          <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="var(--gk-success)" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                            <span class="ms-2">Customer service 24/7</span>
                          </li>
                          <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="var(--gk-success)" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                            <span class="ms-2">No setup fee</span>
                          </li>
                          <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="var(--gk-success)" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                            <span class="ms-2">Cancel any time</span>
                          </li>
                        </ul>
                        <a href="#!" class="btn btn-dark btn-lg">Explore Daily News</a>
                      </div>
                    </div>
                    <div class="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6 col-12 d-lg-flex justify-content-end">
                      <div class="mt-12 mt-lg-0 position-relative">
                        <div class="position-absolute top-0 start-0 translate-middle  d-none d-md-block">
                          
                       </div>
                        <img src= {img4} width="750" height="500"  alt="online course" class="img-fluid rounded-4 w-100 z-1 position-relative"/>
                        <img src= {img5} width="450" height="200"  alt="online course" class="img-fluid rounded-4 w-100 z-1 position-relative"/>

                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
               </div>
  )
}

export default Home