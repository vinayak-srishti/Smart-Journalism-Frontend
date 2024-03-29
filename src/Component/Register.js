import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import jour1 from './Image/jour1.jpg'
function Register() {
  const[ data,setdata]=useState({Name:"",Password:"",Contact:"",Email:"",Address:"",Gender:"",BloodGroup:"",Qulification:"",DOB:"",Age:"",Image:""})
    const example=(a)=>{
      console.log(a)
    setdata({...data,[a.target.name]: a.target.value})
    }
    const onsubmit=(Event)=>{
      Event.preventDefault()
      //axios.post("https://jsonplaceholder.typicode.com/posts",data)
      /*.then((result)=>{
        console.log(result)
      })
      .catch((error)=>{
        console.log(error)
      })*/
       console.log("save")
    }
    console.log(data)
  return (

    <div>
      <section class="h-100 bg-light">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-8 col-lg-7 col-xl-5">
        <img src={jour1} width="505px" height="700px" alt="Phone image"/>
          </div>
            <div class="col">
              <div class="card card-registration my-5">
                <div class="col-xl-12">
                  <div class="card-body p-md-5 text-black">
                    <h3 class="mb-4 text-uppercase" className='topic'> Journalist Register </h3>
                    <form onSubmit={onsubmit}>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                        <label class="form-label" for="form3Example1m">Name</label>
                          <input type="text" id="form3Example1m" class="form-control form-control-lg"onChange={example} name='Name'value={data.Name} />
                          
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1n">Password</label>
                          <input type="Password" id="form3Example1n" class="form-control form-control-lg" onChange={example} name='Password'value={data.Password}/>
                          
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                        <label class="form-label" for="form3Example1m1">Contact</label>
                          <input type="text" id="form3Example1m1" class="form-control form-control-lg" onChange={example} name='Contact'value={data.Contact}/>
                          
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                        <label class="form-label" for="form3Example1n1">Email</label>
                          <input type="text" id="form3Example1n1" class="form-control form-control-lg" onChange={example} name='Email'value={data.Email}/>
                          
                        </div>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example8">Address</label>
                      <input type="text" id="form3Example8" class="form-control form-control-lg"onChange={example} name='Address'value={data.Address} />
                      
                    </div>

                    <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                      <h6 class="mb-0 me-4">Gender: </h6>

                      <div class="form-check form-check-inline mb-0 me-4">
                        <input class="form-check-input" type="radio" name="Gender" id="femaleGender"
                          value="Female"onChange={example} checked={data.Gender==='Female'} />
                        <label class="form-check-label" for="femaleGender">Female</label>
                      </div>

                      <div class="form-check form-check-inline mb-0 me-4">
                        <input class="form-check-input" type="radio" name="Gender" id="maleGender"
                          value="Male"onChange={example} checked={data.Gender==='Male'} />
                        <label class="form-check-label" for="maleGender">Male</label>
                      </div>

                      <div class="form-check form-check-inline mb-0">
                        <input class="form-check-input" type="radio" name="Gender" id="otherGender"
                          value="Other" onChange={example} checked={data.Gender==='Other'}/>
                        <label class="form-check-label" for="otherGender">Other</label>
                      </div>

                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">

                        <select class="select" onChange={example} name='BloodGroup'value={data.BlooddGroup} >
                          <option value="Select your Blood Group">Select Your Blood Group</option>
                          <option value="O+ve">O+ve</option>
                          <option value="A1+ve">A1+ve</option>
                          <option value="B+ve">B+ve</option>
                        </select>

                      </div>
                      <div class="col-md-6 mb-4">

                        <select class="select" onChange={example} name='Qulification'value={data.Qulification} >
                          <option value="Educational qulification">Educational Qulification</option>
                          <option value="MBA">MBA</option>
                          <option value="MSC">MSC</option>
                          <option value="MA">MA</option>
                        </select>

                      </div>
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example9">DOB</label>
                      <input type="date" id="form3Example9" class="form-control form-control-lg" onChange={example} name='DOB'value={data.DOB} />
                      
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example90">Age</label>
                      <input type="text" id="form3Example90" class="form-control form-control-lg" onChange={example} name='Age'value={data.Age} />
                      
                    </div>
                    <div class="mb-3">
                      <label for="formFileMultiple" class="form-label">Upload Your Photo</label>
                      <input class="form-control" type="file" id="formFileMultiple" onChange={example} name='Image'value={data.Image} />
                    </div>
                    
                    <div class="d-flex justify-content-center pt-3" >

                      <button type="submit" class="btn btn-primary btn-sm" className='button'>Submit</button>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
    </div>
  )
}

export default Register