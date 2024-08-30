import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';
// import log from './Image/log.jpg'
import axios from 'axios'
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
function Userlog() {
	const navigate=useNavigate()
	const [data, setdata] = useState({ Email: '', Password: '' })
	const example = (a) => {
		console.log(a)
		setdata({ ...data, [a.target.name]: a.target.value })
	}

	const onsubmit = (event) => {
		event.preventDefault()
		axios.post('http://localhost:4033/userlogin', data)
			.then((result) => {
				if (result.data.status == 200) {
					//   console.log(result)
					localStorage.setItem('user',JSON.stringify(result.data.user))
					alert("Login Sucessfully")
					navigate('/Userhomenav')
				}
				else if(result.data.status===403){
					alert("Artist is not approved yet")
				  }
			
				else if (result.data.status == 500) {
					alert("Password Error")
				}
				else if (result.data.status == 400) {
					alert("User Not Found")
				}
			})
			.catch((error) => {
				console.log(error)
			})
		console.log("save")
	}
	console.log(data)
	return (

		< div >
			<div class="container h-100">
				<div class="row d-flex justify-content-center align-items-center h-100">
					<div class="col-12 col-md-9 col-lg-7 col-xl-6">
						<div class="card" style={{ height: "450px", width: "500px", border: "-1px solid black ",backgroundColor:"transparent" }} >
							<div class="card-body p-5">
								<h2 class="text-uppercase text-center mb-5" style={{ color: " #726e6e", fontSize: "x-large", fontFamily: "fantasy" }}>LOGIN FORM</h2>
								<br></br>
								<form onSubmit={onsubmit}>

									{/* <div data-mdb-input-init class="form-outline mb-4"> */}

									<div className="input-group" style={{marginTop:"-6%"}}>
										<span className="input-group-text" id="password-addon" style={{ borderRadius: "0px",border: "1px solid black" }}>
											< MdEmail />
										</span>
										<input type="email"
											id="email"
											className="form-control form-control-lg"
											style={{
												border: "1px solid rgb(10, 10, 10)",
												borderRadius: "0px",
												padding: "10px",
												fontSize: "16px",
												height: "23px",
												width: "350px",
												outLine: "none",
												boxShadow: "none",
												backgroundColor:"transparent"
											}}
											placeholder="Email" onChange={example} name='Email' value={data.Email} />

									</div>
									<br></br>

									{/* <div data-mdb-input-init class="form-outline mb-4"> */}

									<div className="input-group">
										<span className="input-group-text" id="password-addon" style={{ borderRadius: "0px",border: "1px solid black" }}>
											<FaLock />
										</span>
										<input type="Password" id="password"
											className="form-control form-control-lg"
											style={{
												border: "1px solid rgb(10, 10, 10)",
												borderRadius: "0px",
												padding: "10px",
												fontSize: "16px",
												height: "23px",
												width: "350px",
												outLine: "none",
												boxShadow: "none",
												backgroundColor:"transparent"
											}}
											placeholder="Password" onChange={example} name='Password' value={data.Password} />

									</div>



									<br></br>
									<div class="d-flex justify-content-center">
										<button type="submit" data-mdb-button-init
											data-mdb-ripple-init class="btn btn-primary " style={{ width: "450px", border: "none", backgroundColor: " #05192c",borderRadius:"0px" }}>Sign in</button>
									</div>
									<br></br>
									
									<div class="d-flex justify-content-between align-items-center">

										<div class="form-check mb-0">
											<input class="form-check-input me-2" type="checkbox" style={{ border: "1px solid black" }} value="" id="form2Example3" />
											<label class="form-check-label" for="form2Example3">
												<b style={{color:" #726e6e"}}>Remember me</b>
											</label>
										</div>
										<a href="./Forgot" class="text-body "  style={{textDecoration:"none"}} ><b style={{color:" #726e6e"}}>Forgot password?</b></a>
									</div>
									<hr></hr>
									<p className="text-center text-muted mt-4 mb-0">
                        <b>Not registerd yet? </b>
                        <a href="./userreg" className="fw-light text-body " style={{textDecoration:"none"}}>
                          <u style={{color:"#002C54"}}>Sign up </u>
                        </a>
                      </p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div >

	)
}

export default Userlog