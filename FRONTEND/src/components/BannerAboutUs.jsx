import React from 'react';
import './BannerAboutUs.css';

const BannerAboutUs = () => {
  return (
    <div className="about-us-banner">
      <div className="about-us-container">
        <h2 className="about-us-title">
          ¿QUIENES SOMOS SMARTFLORA?
        </h2>
        
        <div className="circles-container">
          <div className="image-circle">
            <img 
              src="" 
              alt="Team member 1" 
              className="hidden"
            />
            <span className="placeholder-text"></span>
          </div>
          
          <div className="image-circle">
            <img 
              src="" 
              alt="Team member 2" 
              className="hidden"
            />
            <span className="placeholder-text"></span>
          </div>
          
          <div className="image-circle">
            <img 
              src="" 
              alt="Team member 3" 
              className="hidden"
            />
            <span className="placeholder-text"></span>
          </div>
        </div>
        
        <div className="about-us-text">
          <p>
            It is a long established fact that a reader will be distracted by the readable 
            content of a page when looking at its layout. The point of using Lorem Ipsum 
            is that it has a more-or-less normal distribution of letters
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerAboutUs;