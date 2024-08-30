import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Adminhome.css'
import { Link } from "react-router-dom"
import axios from 'axios';
function Adminhome() {
  const [journalist,setJournalist]=useState([])
   useEffect(()=>{
    const fetchDetails=async()=>{
      try{
        const response=await  axios.post("http://localhost:4033/viewapprovedjournalist")
        console.log(response)
        setJournalist(response.data.data)
      }
    catch(error){
      console.error("Error fetching",error)
    }
    }
    fetchDetails()
   },[])
   const [user,setUser]=useState([])
   useEffect(()=>{
    const fetchDetails=async()=>{
      try{
        const response=await  axios.post("http://localhost:4033/viewalluser")
        console.log(response)
        setUser(response.data.data)
      }
    catch(error){
      console.error("Error fetching",error)
    }
    }
    fetchDetails()
   },[])
   const [news,setNews]=useState([])
   useEffect(()=>{
    const fetchDetails=async()=>{
      try{
        const response=await  axios.post("http://localhost:4033/viewallnews")
        console.log(response)
        setNews(response.data.data)
      }
    catch(error){
      console.error("Error fetching",error)
    }
    }
    fetchDetails()
   },[])
  return (
   
        <div  className='head'>
          <br></br>
        <h3>WELLCOME TO THE ADMIN PANEL</h3>
        <br></br>
        
        <div class="grid-container ">
            <div class="card1">
              
               <h3> Available Journalist</h3>
               {journalist.length?( 
                  <h3>{journalist.length}</h3>
              ):(
                <h6>No Journalist Available</h6>
              )}
            </div>
           
            <div class="card1">
                
                <h3>User Registered</h3>
                {user.length?( 
                  <h3>{user.length}</h3>
              ):(
                <h6>No user Register</h6>
              )}
                
            </div>
            <div class="card1">
                 <h3>News Posted</h3>
                 {news.length?( 
                  <h3>{news.length}</h3>
              ):(
                <h6>No news upload</h6>
              )}
            </div>
            
        </div>
        
    </div>
    
  )
}

export default Adminhome