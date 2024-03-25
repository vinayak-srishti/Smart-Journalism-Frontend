import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pro8 from './Image/pro8.jpg'
import pro3 from './Image/pro3.jpg'
import pro4 from './Image/pro4.jpg'
import pro5 from './Image/pro5.jpg'
import pro9 from './Image/pro9.jpg'
import img11 from './Image/img11.jpg'
import About from './About';

function Home() {
  return (
    <div>
       <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
     <img src= {pro8}  height="520"class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block " >
        <h2 className='title'>SMART JOURNALISM</h2>
        <h4 className='title'>Journalism is always  the art of the incomplete</h4>
      </div>
    </div>
    <div class="carousel-item">
      <img src={pro9}  height="520" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>SMART JOURNALISM</h5>
        <p>Join with our smart journalism comunity</p>
      </div>
    </div>
    
  </div><div class="carousel-item">
      <img src={img11}  height="520" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>SMART JOURNALISM</h5>
        <p>Explore daily news</p>
      </div>
    </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br></br>

<h3 className='ccc'> Latest News</h3>
<br></br>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card" className='hom1'>
      <img src={pro3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Calcutta Court</h5>
        <p>
        The Calcutta High Court on Thursday granted bail to a television journalist, who was arrested on duty at the restive Sandeshkhali, observing that the press must be allowed to function freely and independently, without any fear of reprisal or intimidation.
Santu Pan, who works for Republic Bangla news channel, was arrested on February 19 on the basis of a complaint by a woman alleging that he had trespassed into her house.
        </p>
       
        <p class="card-text"><a href="https://www.ndtv.com/india-news/what-court-said-while-granting-bail-to-journalist-arrested-in-sandeshkhali-5108100" style={{color:'red'}}> view more</a></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" className='hom1'> 
      <img src={pro4} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Rahul Gandhi</h5>
        <p>As Prime Minister Narendra Modi took on Rahul Gandhi for his recent 'drunk and addict' comment on UP youth at a rally in Varanasi, the Congress leader posted a video of a youth protest demanding re-examination and said PM Modi is misleading the youth of Uttar Pradesh about their own situation. As PM Modi in his rally spoke in Banarasi style, Rahul Gandhi retorted in the same style and said the prime minister was narrating  to  the  grandmother  the  condition  of  grandmother's  house.   </p>
        <p class="card-text"><a href="https://www.hindustantimes.com/india-news/rahul-gandhi-replies-to-pm-modis-who-lost-senses-swipe-naani-ko-nanihaal-101708692490350.html" style={{color:'red'}}>View more</a></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" className='hom1'>
      <img src={pro5} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">cricket</h5>
        <p>India discovered a promising new pace talent in debutant Akash Deep, while the seasoned Joe Root single-handedly steered England through turbulent waters with a gritty century, eschewing the flamboyance of 'Bazball' for a more conservative approach. Despite early setbacks, England managed to reach 302 for 7 by the close of play on the opening day of the fourth Test.</p>
        <p class="card-text"><a href="https://timesofindia.indiatimes.com/sports/cricket/england-in-india/4th-test-how-old-fashioned-joe-root-shunned-bazball-to-save-the-day-for-england-in-ranchi/articleshow/107944473.cms" style={{color:'red'}}>View More</a></p>
      </div>
    </div>
  </div>
 </div>
 <br></br>
 <br></br>
<h4 className='ddd'>JOURNALISM IS ALWAYS  THE ART OF THE INCOMPLETE</h4>
<h5 className='ddd'>"Journalism is printing what someone else does not want printed:everthing else is public relations" </h5><br></br><br></br>
<h4 className='ccc'>About us</h4>
<About/>
<br></br>
<div className='aaa'>
<h3> SUBSCRIBE VIA EMAIL</h3>
<input type='text' placeholder='Enter your email'></input><br></br><br></br>
<button class="btn btn-primary" type="submit"className='bbb'>Subscribe Now</button>
</div>
<p className='aaa'>Thank you for being a part of the Smart Journalism community.</p>
    </div>

  )
}

export default Home