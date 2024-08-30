import React, { useEffect, useState }  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import login from './Image/login.jpg'
import axios from 'axios'
function Medialog() {
    const [data, setdata] = useState({ Email: '', Password: '' })
  const example = (a) => {
    console.log(a)
    setdata({ ...data, [a.target.name]: a.target.value })
  }
  // useEffect(()=>{
  //   axios.get('http://localhost:4333/addproduct',data)
  //   .then((result)=>{
  //     console.log(result)
  //   })
  // })
  const onsubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:4033/userlogin',data)
    .then((result)=>{
		if(result.data.status==200){
    //   console.log(result)
      alert("Login Sucessfully")
		}
		 else if(result.data.status==500){
			alert("Password Error")
		}
		else if(result.data.status==400){
			alert("User Not Found")
		}
    })
    .catch((error)=>{
      console.log(error)
    })
    console.log("save")
  }
  console.log(data)
	return (
        <section class="vh-100"className='background'>
			<div class="container py-5 h-100">
				<div class="row d-flex justify-content-center align-items-center h-100">
					<div class="col col-xl-10">
						<div class="card" >
							<div class="row g-0">
								<div class="col-md-6 col-lg-5  d-md-block">
									 <img src={login}
										alt="login form"  height="505px" width="390px"/> 
								</div>
								<div class="col-md-6 col-lg-7 d-flex align-items-center">
									<div class="card-body p-4 p-lg-5 text-black">

										<form onSubmit={onsubmit}>

											<div class="d-flex align-items-center mb-3 pb-1">
												 {/* <i class="fas fa-cubes fa-2x me-3"></i>  */}
												<span class="h3 fw-bold mb-1" className='logtit'>MEDIA ADMIN LOGIN FORM</span>
											</div>
<br></br>
											{/* <h5 class="fw-normal mb-3 pb-3" >Sign into your account</h5> */}

											<div class="form-outline mb-4">
											<label class="form-label" for="form2Example17">Email</label>
												<input type="email" id="form2Example17" class="form-control form-control-lg"  onChange={example} name='Email' value={data.Email} />
												
											</div>

											<div class="form-outline mb-4">
											<label class="form-label" for="form2Example27">Password</label>
												<input type="password" id="form2Example27" class="form-control form-control-lg"  onChange={example} name='Password' value={data.Password} />
												
											</div>
											<div class="d-flex justify-content-between align-items-center">

                <div class="form-check mb-0">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label class="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="./Forgot" class="text-body" >Forgot password?</a>
              </div>
              <br></br>
              <div class="text-center">
                <button class="btn btn-primary" className='button' type="submit">Submit</button>
              </div>
              <br></br>
              <br></br>
              <div class="text-center "><p >Don't  have an account?<a href="./Userreg" class="font-italic text-muted" >
                <u style={{ color: 'blue' }} >Sign up</u></a></p></div>

											{/* <div class="d-flex justify-content-between align-items-center">
												<button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
											</div>
                                            
											<a class="small text-muted" href="#!">Forgot password?</a>
											
											<p class="mb-5 pb-lg-2"className='link'>Don't have an account? <a href="#!"className='link'>Register here</a></p> */}
											
										</form>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}

export default Medialog