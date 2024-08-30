import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "../../Component/Navbar/Image/LOGO2.gif";
import { Link } from "react-router-dom"
function Adminlognav() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary Navbar border-bottom border-ash fixed-top">
        <div class="container-fluid">
        <img src={logo}/>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./Homepage" style={{color: '#002C54'}}>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Aboutpage" style={{ color: '#002C54'}}>About</a>
            </li>
          
            <li class="nav-item">
              <a class="nav-link" href="./Aboutpage" style={{color: '#002C54' }}>Logout</a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Adminlognav