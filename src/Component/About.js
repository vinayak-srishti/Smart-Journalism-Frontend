import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import news3 from './Image/news3.jpg'
function About() {
  return (
    <div>
        <div class="card mb-3"className='zzz' >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={news3}  width="400px" height="300px" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" ></h5><br></br>
        <p class="card-text" className='xyz'>Welcome to our website, where innovation meets integrity in the pursuit of groundbreaking journalism. At Smart Journalism, we're driven by a passion for redefining the boundaries of traditional reporting through the seamless integration of cutting-edge technology, data analytics, and collaborative storytelling.At the heart of our mission is a commitment to elevating the standards of journalism in the digital age. We believe in harnessing the power of technology to empower journalists, engage audiences, and drive positive change in society. Through our innovative approaches and unwavering dedication to ethical journalism, we aim to inform, inspire, and connect people across the globe.</p>
       <h5 className='tit'>Join Us:</h5>
        <p className='xyz'>Whether you're a journalist, technologist, data enthusiast, or simply a passionate advocate for quality journalism, we invite you to join us on our journey. Together, we can redefine the future of journalism and create a world where information empowers, inspires, and unites us all.</p>
       <h5 className='tit'>Featured Articles:</h5> 
       <p>Dive deeper into the stories shaping our world with our collection of featured articles. From in-depth analyses to exclusive interviews, explore a range of topics and gain valuable insights from expert perspectives. Our curated selection of featured articles ensures that you're always informed and engaged with the issues that matter most.</p>
         </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About