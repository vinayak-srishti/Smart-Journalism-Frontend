import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import news1 from './Image/news1.jpg'
function Navbar() {
  return (
    <div>
       <nav class="navbar bg-body-tertiary Navbar border-bottom border-dark">
  <div class="container-fluid">
  <img src={news1}  width="250" height="50" />
  
    <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="./Homepage" style={{color:'red'}}>HOME</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="./Aboutpage" style={{color:'red'}}>ABOUT</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="./loginpage" style={{color:'red'}}>LOGIN</a>
  </li>
  
</ul>
  </div>
</nav>
 </div>
  )
}

export default Navbar