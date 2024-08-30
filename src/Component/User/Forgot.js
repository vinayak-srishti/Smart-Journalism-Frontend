import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios'
import './User.css'
function Forgot() {

  const [data, setdata] = useState({ Email: '', Password: '' })

  const example = (a) => {
    console.log(a)
    setdata({ ...data, [a.target.name]: a.target.value })
  }
  console.log(data);
  const onsubmit = (event) => {

    event.preventDefault()
    axios.post('http://localhost:4033/forgotpassword', data)


      .then((result) => {
        if (result.data.status == 200) {
          console.log("Password Changed", result)
          alert("Password Changed")
        }
        else if (result.data.status == 500) {
          console.log("Password not found")
          alert("Password not found")
        }
        else {
          alert("user not found")
        }

      })
    console.log('save')
  }
  return (
    <div>
       <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style={{ height: "440px", width: "500px", border: "none " }}>
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5" className='logtit'>RESET YOUR PASSWORD</h2>
                <br />
                <form onSubmit={onsubmit}>
                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="Password" id="form3Example1cg" class="form-control form-control-lg"style={{
												border: "1px solid rgb(10, 10, 10)",
												borderRadius: "3px",
												padding: "10px",
												fontSize: "16px",
												height: "23px",
												width: "400px",
												outLine: "none",
												boxShadow: "none",
												backgroundColor:"transparent"
											}} placeholder='Email' onChange={example} name='Email' value={data.Email}/>
                  </div>
                  
                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="Password" id="form3Example1cg" class="form-control form-control-lg"style={{
												border: "1px solid rgb(10, 10, 10)",
												borderRadius: "3px",
												padding: "10px",
												fontSize: "16px",
												height: "23px",
												width: "400px",
												outLine: "none",
												boxShadow: "none",
												backgroundColor:"transparent"
											}} placeholder='New Password' onChange={example} name='Password' value={data.Password} />
                  </div>
                  <br></br>
                  <div class="d-flex justify-content-center">
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary "style={{ width: "400px",height:"40px", border: "none", backgroundColor: " #05192c",borderRadius:"0px" }}>Reset Password</button>
                  </div>
                  <br />
                  {/* <a href="./Login" class="text-body"style={{textDecoration:"none"}}><b>Back to Login</b></a> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div></div>
  )
}

export default Forgot