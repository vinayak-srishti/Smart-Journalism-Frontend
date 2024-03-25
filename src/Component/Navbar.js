import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pro10 from './Image/pro10.jpg'
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary Navbar border-bottom border-dark">
        <div class="container-fluid">
          <img src={pro10} width="250" height="50" />

          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./Homepage" style={{ color: 'red' }}>HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Aboutpage" style={{ color: 'red' }}>ABOUT</a>
            </li>
          
            <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle col" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'red' }}>
                    LOGIN
                  </a>
                  <ul class="dropdown-menu">
                    <li><Link class="dropdown-item col"  to='/Superloginpage'> Super Admin</Link></li>
                    <li><Link class="dropdown-item col" to='/loginpage'>Media Admin</Link></li>
                    <li><Link class="dropdown-item col" to='/Journalistloginpage'>Journalist</Link></li>
                    <li><Link class="dropdown-item col"to='/Userloginpage' >User</Link></li>
                  </ul>
            </li>
            <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle col" role="button" data-bs-toggle="dropdown" aria-expanded="false"style={{ color: 'red' }}>
                    REGISTER
                  </a>
                  <ul class="dropdown-menu">
                    <li><Link class="dropdown-item col"to="/Mediaregpage">Media admin</Link></li>
                    <li><Link class="dropdown-item col" to="/Registerpage">Journalist</Link> </li>
                    <li><Link class="dropdown-item col" to='/Userregpage'>User</Link> </li>
                  </ul>
                  
                </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar