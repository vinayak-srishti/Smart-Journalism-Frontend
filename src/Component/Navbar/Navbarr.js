
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "../../Component/Navbar/Image/LOGO2.gif";
import { Link } from "react-router-dom";

function Navbarr() {
  return (
    <div>
      <nav className="navbar fixed-top bg-body-tertiary Navbar border-bottom border-ash">
        <div className="container-fluid">
          <img src={logo} height="55px" alt="Logo" />
          
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./Mainhome" style={{ color: '#002C54', textDecoration: 'none'}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Aboutt" style={{ color: '#133955', textDecoration: 'none' }}>About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Contactt" style={{ color: '#133955', textDecoration: 'none' }}>Contact </a>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle col" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false" 
                style={{ color: '#133955', textDecoration: 'none' }}>
                Login
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item col" to='/Journalistlog' style={{ textDecoration: 'none' }}>Journalist</Link></li>
                <li><Link className="dropdown-item col" to='/Userlog' style={{ textDecoration: 'none' }}>User</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbarr;
