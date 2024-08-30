import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import homee from './Image/homee.jpg'
import './Home.css'
import Aboutt from '../About/Aboutt';
import Footerr from '../Footer/Footerr';

function Mainhome() {
  return (
    <div>


      <section class="py-lg-16 py-6">
        <div class="container" >
          <div class="row d-flex align-items-center">
            <div class=" col-xxl-5  col-xl-6 col-lg-6 col-12">
              <div>
                <h6 class="display-2 fw-bold mb-3" style={{ color: '#002C54'}} >INSIGHTFUL<u class="text-warning"><br></br><span class="text-primary" className='txt2'>Reporting</span></u></h6>
                <p class="lead mb-4" className='txt'> <b>JOURNALISM IS ALWAYS THE ART OF THE INCOMPLETE</b></p>
                <p className='txt1'>Every journalist has a respomsibility.A respomsibility to change the ignorance that covers the world.I still belive that if your aim is to change the word,journalism is a more immediate short-term weapon.</p>
               
                <br></br>
                <a href="#!" class="btn btn-dark btn-lg">Explore Daily News</a>
              </div>
            </div>
            <div class="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6 col-12 d-lg-flex justify-content-end">
              <div class="mt-12 mt-lg-0 position-relative">
                <div class="position-absolute top-0 start-0 translate-middle  d-none d-md-block">

                </div>
                <img src={homee} width="750" height="500" alt="online course" class="img-fluid rounded-4 w-100 z-1 position-relative" />
               

              </div>
            </div>
          </div>
        </div>
      </section>


      <div class="container content-space-1 content-space-lg-3 " >
        <div class="row">
          <div class="col-md-4 mb-5 mb-md-0 zoom_effect">
            <div className='con-bg'>
              <div class="text-center px-lg-3">
                <div class="svg-icon text-primary mb-4">

                </div>
                <h3> Join the Community</h3>
                <p>Connect with fellow readers and journalists in our vibrant community. Join our vibrant community of journalists and readers from around the world. Connect with like-minded individuals, participate in lively discussions, and share your thoughts on the latest news stories. Follow us on social media for updates, user testimonials,  our journalistic process. </p>
              </div>
            </div>
          </div>


          <div class="col-md-4 mb-5 mb-md-0 zoom_effect">
            <div className='con-bg'>
              <div class="text-center px-lg-3">
                <div class="svg-icon text-primary mb-4">

                </div>
                <h3>Get Started Today</h3>
                <p>Experience the future of journalism with Smart Journalism. Sign up today to unlock a world of intelligent news delivery at your fingertips. Whether you're seeking reliable news coverage, personalized content recommendations, or a vibrant community to connect with Smart Journalism has everything you need to   conversation with Smart Journalism.
                </p>
              </div>
            </div>
          </div>


          <div class="col-md-4 zoom_effect" >
            <div className='con-bg'>
              <div class="text-center px-lg-3">
                <div class="svg-icon text-primary mb-4">

                </div>
                <h3>Featured Articles</h3>
                <p>Dive deeper into the stories shaping our world with our collection of featured articles. From in-depth analyses to exclusive interviews, explore a range of topics and gain valuable insights from expert perspectives. Our curated selection of featured articles ensures that you're always informed and engaged with the issues that matter most.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     <br></br>
      <Aboutt />
      <br></br>
      <br></br>
      
      <Footerr />
    </div>


  )

}

export default Mainhome