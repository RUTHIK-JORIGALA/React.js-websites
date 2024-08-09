import React from 'react'
import './hero.css'
import profile from '../../assets/hero-voilet.png'
import resume from '../../assets/Rohith New copy.pdf'
import { FaLinkedinIn } from "react-icons/fa";


const Hero = () => {

  const onButtonClick = () => {   
    // using Java Script method to get PDF file
    fetch(resume).then((response) => {
      response.blob().then((blob) => {
      
          // Creating new object of PDF file
          const fileURL =
              window.URL.createObjectURL(blob);
              
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "Rohith Resume.pdf";
          alink.click();
      });
  });
  };

  return (
    <section className='hero-section' id='hero'>
      <div className='hero-container'>
        <div className='text-container'>
          <h1>Rohith Gaddam</h1>
          <p className='hero-sub-heading'> Amazon Account Manager | E-commerce Specialist | Administrative Support Expert</p>
          <p>I am an accomplished Amazon account manager with extensive experience in e-commerce strategy, sales, and business development. As an expert in vendor management, I have successfully assisted numerous sellers in optimizing their Amazon accounts. My skills include project management, market research, and advanced Excel proficiency.
          </p>

          <div className="contact-container">
            <p>+91 9640315370</p>
            <div onClick={(e) => {window.location.href ='mailto: rohithgunna6440@gmail.com';}}> rohithgunna6440@gmail.com</div>
          </div>
          <div className="links-container">
            <div className="download-resume">
              <button onClick={onButtonClick}>Download Resume</button>
            </div>
            <div className="linkedin-link">

              <a href="https://www.linkedin.com/in/rohith-gaddam-b02758246" target='blank'><FaLinkedinIn className='linkedin-icon' /></a>
            </div>
          </div>
        </div>
        <div className='image-container'>
          <div className="image-box">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero
