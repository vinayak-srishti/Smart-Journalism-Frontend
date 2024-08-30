import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "../../Component/Navbar/Image/LOGO2.gif";
import { Link } from 'react-router-dom';
import axios from 'axios';
function Userhomenav() {
  const [user, setUser] = useState(null); 
  const  id  =localStorage.getItem("user")
  

  useEffect(() => {
    console.log("ygyygyg",id);
    
    axios.post(`http://localhost:4033/viewuserid/${id}`)
      .then(result => {
        console.log(result);
        setUser(result.data.msg);
      })
      .catch(error => {
        console.error('There was an error fetching the data', error);
      });
  }, [id]);
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
              <a className="nav-link" href="./Pviewnews" style={{ color: '#133955', textDecoration: 'none' }}>View News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Savedwnews" style={{ color: '#133955', textDecoration: 'none' }}>Saved News </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Mainhome" style={{ color: '#133955', textDecoration: 'none' }}>Log out </a>
            </li>
          </ul>
          {/* {user ? (
            <Link className='navbar-brand' to={`/Vjp/${user?.id}`}>
            
            <h3>{user?.name}</h3>
            </Link>
          ):(
            <Link className='nav-link' to=""></Link>
          )} */}
        </div>
      </nav>
    </div>
  )
}

export default Userhomenav