import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img7 from './Image/img7.jpg'
function Login() {
  return (
    <div>
      <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
      <img src={img7} class="img-fluid" alt="Phone image"/>
           </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <h3>Journalist Login Page</h3>
        <form>
          <div class="form-outline mb-4">
          <label class="form-label" for="form1Example13" >Email </label>
            <input type="email" id="form1Example13"  class="form-control form-control-lg" />
            </div>
            <div class="form-outline mb-4">
          <label class="form-label" for="form1Example23">Password</label>
            <input type="password"  id="form1Example23" class="form-control form-control-lg" />
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button><br></br>
          <hr className='line'/>
          <p  style={{color:'blue'}}>Don't have an account?<a href="Registerpage" style={{color:'blue'}}>Sign up</a></p>
          </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Login