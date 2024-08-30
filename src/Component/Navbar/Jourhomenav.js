import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "../../Component/Navbar/Image/LOGO2.gif";
import { Link } from 'react-router-dom';
import axios from 'axios'; 
function Jourhomenav() {
  // const[journal,setJournal]=useState(null);
  // useEffect(()=>{
  //   const journalData=(localStorage.getItem('journal'));
  //   if(journalData){
  //     setJournal(journalData);
  //   }
  // })
  const [journal, setJournal] = useState(null); 
  const  id  =localStorage.getItem("journal")
  

  useEffect(() => {
    console.log("ygyygyg",id);
    
    axios.post(`http://localhost:4033/viewjournalistid/${id}`)
      .then(result => {
        console.log(result);
        setJournal(result.data.msg);
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
              <a className="nav-link active" aria-current="page" href="./Viewnews" style={{ color: '#002C54', textDecoration: 'none'}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Newss" style={{ color: '#133955', textDecoration: 'none' }}>Upload News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Viewid "style={{ color: '#133955', textDecoration: 'none' }}>View News </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Viewnews" style={{ color: '#133955', textDecoration: 'none' }}>Log out </a>
            </li>
          </ul>
          {journal ? (
            <Link className='navbar-brand' to={`/Vjp/${journal?.id}`}>
            <img src={'http://localhost:4033/'+journal.image?.filename} style={{height:"5opx",width:"50px",borderRadius:"50%"}}></img>
            <h3>{journal?.name}</h3>
            </Link>
          ):(
            <Link className='nav-link' to=""></Link>
          )}
        </div>
      </nav>
    </div>
   
  )
}

export default Jourhomenav