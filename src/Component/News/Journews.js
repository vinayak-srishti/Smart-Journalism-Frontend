import React, { useState,useEffect } from 'react';
import Newss from './Newss';

function Journews() {
    const [newsData, setnewsData] = useState(null);
    useEffect(()=>{
        let newsData = localStorage.getItem("user") || null
        if(newsData){
            
            setnewsData((newsData))
        }
        else {
            console.log("Orp data not found in local storage");
            console.log("Please login");
          }
    }, [])

  return (
    <>
   {/* <Jourhomenav/> */}
    <br/>
    {newsData ? (
        <Newss newsData={newsData}/>
    ):(
        <div class='container' style={{minHeight:'400px'}}>
            <h1>Please Login</h1>
        </div>
        )}
        <br/>
        <br/>
        <br/>
        <br/>
     
    </>

  )
}

export default Journews