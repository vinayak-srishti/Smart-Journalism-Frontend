import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img2 from './Image/img2.jpg'
function About() {
  return (
    <div>
        <section>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</section>
<hr></hr>
<div>
  <section>
 <h3 className='about'><b>OVERVIEW</b></h3><br></br>
<h6 className='about1'>Smart Journalism is an innovative platform redefining the landscape of news dissemination with a focus on user-centricity and cutting-edge technology. Catering to three main user categories – Admin, Journalist, and User – the platform seamlessly integrates advanced tools such as AI-driven fact-checking, collaborative workspaces for journalists, and personalized content feeds for users. Admins benefit from robust user management and content moderation features, ensuring a secure and organized environment. Journalists access intuitive story creation tools and collaborative hubs, while users enjoy a tailored news experience with interactive elements. Guided by a commitment to accuracy and transparency, Smart Journalism aims to elevate journalism in the digital age, providing a dynamic space for collaboration, engagement, and responsible news consumption</h6>
<h3 className='about'><b>CORE VALUE</b></h3><br></br>
<h6 className='about1'>The core values of the Smart Journalism project revolve around the principles of accuracy, transparency, and user-centricity. Accuracy is upheld as a paramount value, emphasizing the commitment to delivering news that is reliable, well-researched, and factually sound. Transparency is integral to the platform's ethos, ensuring openness about sources, methods, and potential biases. The project is deeply rooted in user-centric design, aiming to enhance the overall news consumption experience by tailoring content feeds, encouraging interactivity, and prioritizing user feedback. These core values collectively guide Smart Journalism in its mission to redefine and elevate the standards of journalism in the digital era, fostering a trustworthy and engaging environment for both journalists and users alike.</h6>
<h3 className='about'><b>CONTENT FOCUS</b></h3><br></br> 
<h6 className='about1'>Smart Journalism encompasses a diverse and comprehensive content focus, aiming to provide a well-rounded and engaging news experience for its users. The platform covers a spectrum of topics, including but not limited to politics, science, technology, culture, and global affairs. Special attention is given to in-depth and investigative reporting, ensuring that users have access to thorough analyses and insights. The content is curated to be informative, thought-provoking, and reflective of the diverse interests and preferences of the audience. Smart Journalism embraces multimedia storytelling, incorporating visual elements, interactive features, and immersive experiences to enhance the overall narrative. The platform is dedicated to delivering timely, relevant, and impactful news stories that resonate with its user community.</h6>
<h3 className='about'><b>FLEXIBILITY AND CONVENIENCE</b></h3><br></br> 
<h6 className='about1'>Smart Journalism is designed with a focus on flexibility and convenience to cater to the dynamic needs of its users. The platform offers a user-friendly interface that adapts seamlessly to various devices, ensuring accessibility across desktops, tablets, and mobile devices. Journalists benefit from flexible and collaborative workspaces, allowing them to create and edit stories with ease while integrating advanced AI tools for content enhancement. Admins enjoy the convenience of robust user management and content moderation features, streamlining platform administration. Users experience a personalized and interactive news feed, providing convenience in accessing content tailored to their preferences. The overall architecture prioritizes flexibility in adapting to emerging technologies, ensuring that Smart Journalism remains at the forefront of innovation while delivering a convenient and user-centric news consumption experience.</h6>
</section>
</div>
    </div>
  )
}

export default About