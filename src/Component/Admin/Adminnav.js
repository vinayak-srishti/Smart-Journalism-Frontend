import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "../../Component/Admin/Image/LOGO2.gif";
import { Link } from "react-router-dom"
function Navbarr() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary Navbar border-bottom border-ash ">
        <div class="container-fluid">
        <img src={logo} height="55px"/>
        
            <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./Mainhome" style={{ color: '#002C54' }}>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Viewuser" style={{ color: '#002C54' }}>Public</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Viewjournalist" style={{ color: '#002C54' }}>Journalist</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: '#002C54' }}>News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Mainhome" style={{ color: '#002C54' }}>Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbarr