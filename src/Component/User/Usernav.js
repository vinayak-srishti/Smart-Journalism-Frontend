import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "../../Component/Image/LOGO2.gif";
import { Link } from "react-router-dom"
function Usernav() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary Navbar border-bottom border-ash ">
        <div class="container-fluid">
        <img src={logo} />
        
            <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./Homepage" style={{ color: 'red' }}>HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Aboutpage" style={{ color: 'red' }}>ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Aboutpage" style={{ color: 'red' }}>NEWS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Aboutpage" style={{ color: 'red' }}>SAVED NEWS</a>
            </li>
           <li class="nav-item">
              <a class="nav-link" href="./Aboutpage" style={{ color: 'red' }}>LOGOUT</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Usernav