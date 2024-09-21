import React from 'react';
import './header.css';

const BusinessSection = () => {
  return (
    <div className="business-section">
      <h1>Connect with us..</h1>
      <h2>CONCEPT..</h2>
      <div className="cards-container">
        <div className="card">
          <div className="icon">🏢</div>
          <h3>BUSINESS Grow..</h3>
          <button>View..</button>
        </div>
        <div className="card">
          <div className="icon">📊</div>
          <h3>Increase Growth</h3>
          <button>View..</button>
        </div>
        <div className="card">
          <div className="icon">💼</div>
          <h3>Increase Profit</h3>
          <button>View..</button>
        </div>
        <div className="card">
          <div className="icon">👔</div>
          <h3>Ethics & Values</h3>
          <button>View..</button>
        </div>
        <div className="card">
          <div className="icon">📅</div>
          <h3>And Many More</h3>
          <button>View..</button>
        </div>
      </div>

      {/* Banner Section */}
      <div className="banner">
        <div className="text-container">
          <h3>Are you a large business looking for custom solutions?</h3>
        </div>
        <button className="sales-button">Talk to sales</button>
      </div>
    </div>
  );
};

export default BusinessSection;
