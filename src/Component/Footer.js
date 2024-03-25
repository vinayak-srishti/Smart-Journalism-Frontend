import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Footer() {
  return (
    <div>    
           
<footer class="py-lg-8 py-8 "  className='dark'>
    <div class="container">
        <div class="row  justify-content-center text-center  ">
            <div class="col-10 col-md-12 col-xl-8 px-0 ">
                <nav class="nav nav-footer justify-content-center">
                    <a class="nav-link" href="./Homepage" style={{color:'white'}}>HOME </a>
                    <a class="nav-link" href="./Aboutpage" style={{color:'white'}}>ABOUT </a>
                    
                </nav>
            </div>
            <hr className='line'></hr>
            <div class="col-lg-8 col-md-12 col-12">
                <div class="my-6">
                <a class="nav-link" href="#" style={{color:'darkgray'}}>©Geeks-UI, Inc. Smart Journalism</a> 
          </div>          
       </div>             
    </div>
    </div>
</footer>
    </div>
  )
}

export default Footer