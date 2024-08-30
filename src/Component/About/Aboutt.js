

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import about2 from './Image/about2.jpg';
import './About.css';

function Aboutt() {
  return (
    <div>
      <section id='home1' className='about-section'>
        <div className='container'>
          

          <div className='row mt-5'>
            <div className='col-12 text-center'>
              <h3 className="section-title text-primary" >About Us</h3>
              <h6 style={{color:"black"}}> Welcome to the Smart Journalism Platform, where we deliver smart journalism with integrity and innovation. Our mission is to provide accurate, insightful news and in-depth analysis that empowers readers and drives positive change. Join us in navigating the complexities of our world with clarity and purpose. We strive to enhance journalism through the integration of advanced technologies like artificial intelligence, machine learning, and data analytics. Together, we can shape the future of journalism.</h6>
              <p className="section-subtitle">
                Integrity, Innovation, and Impact are the cornerstones of our journalism.
              </p>
            </div>
            <div className='col-lg-4 col-md-6 col-12 text-center'>
              <div className="value-card shadow-sm p-3 mb-5 bg-white rounded">
                <h5 className="value-title"style={{color:"black"}}>Integrity</h5>
                <p className="value-description">
                  Upholding the highest standards of accuracy and honesty in every story we report.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-12 text-center'>
              <div className="value-card shadow-sm p-3 mb-5 bg-white rounded">
                <h5 className="value-title"style={{color:"black"}}>Innovation</h5>
                <p className="value-description">
                  Leveraging cutting-edge technology to bring you the news in the most efficient and engaging ways.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-12 text-center'>
              <div className="value-card shadow-sm p-3 mb-5 bg-white rounded">
                <h5 className="value-title"style={{color:"black"}}>Impact</h5>
                <p className="value-description">
                  Creating content that not only informs but also inspires action and change in our community.
                </p>
              </div>
            </div>
          </div>

          <div className='row mt-5'>
            <div className='col-12 text-center'>
              <h3 className="section-title text-primary"style={{color:"black"}}>Meet the Team</h3>
              <p className="section-subtitle">
                Our dedicated team of journalists and technologists.
              </p>
            </div>
            {/* Add more detailed team member sections or other content as needed */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutt;

