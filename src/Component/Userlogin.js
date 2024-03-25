import React  ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import jour1 from './Image/jour1.jpg'
function Userlogin() {
    const[ data,setdata]=useState({Email:"",Password:""})
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
    <div class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-md-8 col-lg-7 col-xl-5">
            <img src={jour1} width="500px"class="img-fluid" alt="Phone image" />
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <h3 class="display-4" className='log1'> User Login </h3>
                            <br></br>
                           <form onSubmit={onsubmit}>
                            
                                <div class="form-group mb-3">
                                <label class="form-label" for="form3Example1n1">Email</label>
                          <input type="text" id="form3Example1n1" class="form-control form-control-lg" onChange={example} name='Email'value={data.Email}/>
                                </div>
                                <br></br>
                                <div class="form-group mb-3">
                                <label class="form-label" for="form3Example1n">Password</label>
                          <input type="Password" id="form3Example1n" class="form-control form-control-lg" onChange={example} name='Password'value={data.Password}/>
                                </div>
                                <br></br>
                                <div class="d-flex justify-content-between align-items-center">
           
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="./Forgotpage" class="text-body" className='forgot'>Forgot password?</a>
          </div>
       <br></br>
            <div class="text-center">
                  <button class="btn btn-primary" className='buttonn' type="submit">Submit</button>
                  </div>
                         <br></br>
                         <br></br>
                                <div class="text-center "><p style={{color:'blue'}}>Don't  have an account?<a href="./Userregpage" class="font-italic text-muted" > 
                                        <u style={{color:'blue'}}>Sign up</u></a></p></div>
                            </form>
                  </div>
                       
            </div>
       </div>

            
    </div>
  )
}

export default Userlogin