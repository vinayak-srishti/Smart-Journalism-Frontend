import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Footerr.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footerr() {
  return (
    <div className='footer-container'>
      <footer className='footer'>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-4 mb-4 text-center">
              <h5 className="text-uppercase">Quick Links</h5>
              <nav className="nav nav-footer flex-column">
                <a className="nav-link" href="./Homepage">HOME</a>
                <a className="nav-link" href="./Aboutpage">ABOUT</a>
                <a className="nav-link" href="./Contactpage">CONTACT</a>
              </nav>
            </div>

            <div className="col-md-4 mb-4 text-center">
              <h5 className="text-uppercase">Follow Us</h5>
              <div className="social-links">
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="social-icon" /> WhatsApp
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="social-icon" /> Facebook
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="social-icon" /> Twitter
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="social-icon" /> Instagram
                </a>
              </div>
            </div>

            <div className="col-md-4 mb-4 text-center">
            <p className="text-muted">Contact us: <a href="mailto:info@smartjournalism.com" className="text-info">info@smartjournalism.com</a></p>
            
              <h5 className="text-uppercase">Subscribe</h5>
              <form className="newsletter-form">
                <input type="email" className="form-control mb-2" placeholder="Enter your email" />
                <button type="submit" className="btn btn-info btn-block">Subscribe</button>
              </form>
            </div>
          </div>

          
        </div>
      </footer>
    </div>
  );
}

export default Footerr;
