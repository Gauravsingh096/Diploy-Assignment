import React from 'react';
import { Button } from 'react-bootstrap';
import GirlImage from '../assets/girlimg.png'; 
import './header.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="text-section">
        <h1 className='heroh1'>Create Earn and Sell  Custom Products Here</h1>
        <ul className='hero-list'>
          <li>100% Free to use</li>
          <li>900+ High-Quality Products</li>
          <li>Largest global print network</li>
        </ul>
        <div className="hero-buttons">
          <Button className="herobtn1" variant="success">Start for Free</Button>
          <Button className="herobtn2" variant="outline-secondary">How it works?</Button>
        </div>
        <p className="trusted-text">Trusted by over 8M sellers around the world</p>
      </div>
      <div className="image-section">
        <img src={GirlImage} alt="Girl pointing to a product" className="girl-animation" />
      </div>
    </div>
  );
};

export default HeroSection;
