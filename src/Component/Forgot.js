import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Forgot() {
  

  return (
    <div>
      <div class="container py-5 h-100" >
    <div class="row d-flex align-items-center justify-content-center h-10">
      <div class="col-md-8 col-lg-7 col-xl-1.1">
        
          </div>
           <div class="col-md-8 ">
            <div class="login d-flex align-items-center py-5">
                  <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-xl-8 mx-auto" className='borderr'>
                          <br></br>
                          <br></br>
                            <h3 class="display-4" className='log1'> Forgot Your Password?</h3>
                            <br></br>
                           <form >
                           <div class="form-group mb-3">
                                    <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                </div>
                                <br></br>
                               
                                <div class="form-group mb-3">
                                    <input id="inputPassword" type="password" placeholder=" New Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                </div>
                                <br></br>
                                <div class="form-group mb-3">
                                    <input id="inputPassword" type="password" placeholder=" Re-Enter New Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                </div>
                                <br></br>
                               
           
            
            <div class="text-center">
                  <button class="btn btn-primary" className='buttonnn' type="submit">Change Password</button>
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
  )
}

export default Forgot