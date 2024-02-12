import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img7 from './Image/img7.jpg'
import Footer from './Footer';
function Register() {
  return (
    
        <div>
      
      <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-10">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src={img7} class="img-fluid" alt="Phone image"/>
          </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <h3>Journalist Register Form</h3>
        <form>
          <div class="form-outline mb-4">
          <label class="form-label" for="form1Example13" >Name </label>
            <input type="name" id="form1Example13"  class="form-control form-control-lg"  />
            </div>
            <div class="form-outline mb-4">
          <label class="form-label" for="form1Example23">City</label>
            <input type="city"  id="form1Example23" class="form-control form-control-lg" />
          </div>
          <div class="form-outline mb-4">
          <label class="form-label" for="form1Example23">contact</label>
            <input type="contact"  id="form1Example23" class="form-control form-control-lg" />
          </div>
          <div class="form-outline mb-4">
          <label class="form-label" for="form1Example23">Email</label>
            <input type="email"  id="form1Example23" class="form-control form-control-lg" />
          </div>
          <div class="form-outline mb-4">
          <label class="form-label" for="form1Example23">Password</label>
            <input type="password"  id="form1Example23" class="form-control form-control-lg" />
          </div>
          <div class="form-outline mb-4">
          <label class="form-label" for="form1Example23">BloodGroup</label>
            <input type="blood"  id="form1Example23" class="form-control form-control-lg" />
          </div>
          <div class="form-outline mb-4">
          <label class="form-label" for="form1Example23">Age</label>
            <input type="number"  id="form1Example23" class="form-control form-control-lg" />
          </div>
          <div class="form-outline mb-4">
          <label class="form-label" for="form1Example23">Address</label>
            <input type="address"  id="form1Example23" class="form-control form-control-lg" />
          </div>
          <div class="form-outline mb-4">
          <label class="form-label" for="form1Example23">Educational Qulification</label>
            <input type="educational"  id="form1Example23" class="form-control form-control-lg" />
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button><br></br>
          </form>
      </div>
    </div>
  </div>
</section>

</div>
  )
}

export default Register