import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './Admin.css'

import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
function Adminlog() {
	const navigate = useNavigate()
	const [data, setdata] = useState({ Email: "", Password: "" })
	const example = (a) => {
		console.log(a)
		setdata({ ...data, [a.target.name]: a.target.value })
	}
	const onsubmit = (Event) => {
		Event.preventDefault()
		if (data.Email == "admin@gmail.com" & data.Password == "admin123") {
			console.log("sucess");
			alert("loged In")
			navigate('/Adminmain')
		}
		else {
			if (data.Email !== "admin@gmail.com") {
				console.log("User Not Found")
				alert("User Not Found")
			}

			if (data.Password !== "admin123") {

				console.log("Password Error");
				alert("Password Incorect")
			}
			console.log("Login Falied")
			alert("Login Falied")
		}
		console.log("save")
	}
	console.log(data)
	return (

		<div>
			<div class="container h-100">
				<div class="row d-flex justify-content-center align-items-center h-100">
					<div class="col-12 col-md-9 col-lg-7 col-xl-6">
						<div class="card" style={{ height: "450px", width: "500px", border: "none", backgroundColor: "transparent" }} >
							<div class="card-body p-5">
								<h2 class="text-uppercase text-center mb-5" style={{ color: " #726e6e", fontSize: "x-large", fontFamily: "fantasy" }}>Sign In Here</h2>
								<br></br>
								<form onSubmit={onsubmit}>

									{/* <div data-mdb-input-init class="form-outline mb-4"> */}

									<div className="input-group" style={{ marginTop: "-6%" }}>
										<span className="input-group-text" id="password-addon" style={{ border: "1px solid black" }}>
											< MdEmail />
										</span>
										<input type="email"
											id="email"
											className="form-control form-control-lg"
											style={{
												border: "1px solid rgb(10, 10, 10)",
												borderRadius: "3px",
												padding: "10px",
												fontSize: "16px",
												height: "23px",
												width: "350px",
												outLine: "none",
												boxShadow: "none",
												backgroundColor: "transparent"
											}}
											placeholder="Email" onChange={example} name='Email' value={data.Email} />

									</div>
									<br></br>

									{/* <div data-mdb-input-init class="form-outline mb-4"> */}

									<div className="input-group">
										<span className="input-group-text" id="password-addon" style={{ border: "1px solid black" }}>
											<FaLock />
										</span>
										<input type="Password" id="password"
											className="form-control form-control-lg"
											style={{
												border: "1px solid rgb(10, 10, 10)",
												borderRadius: "3px",
												padding: "10px",
												fontSize: "16px",
												height: "23px",
												width: "350px",
												outLine: "none",
												boxShadow: "none",
												backgroundColor: "transparent"
											}}
											placeholder="Password" onChange={example} name='Password' value={data.Password} />

									</div>


									<br></br>
									<br></br>
									<div class="d-flex justify-content-center">
										<button type="submit" data-mdb-button-init
											data-mdb-ripple-init class="btn btn-primary " style={{ width: "450px", border: "none", backgroundColor: " #05192c", borderRadius: "1px" }}>Login</button>
									</div>



								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Adminlog