import React from "react";
import "./header.css";
import image1 from "../assets/custom11.png";
import image2 from "../assets/sell.jpg";
import image3 from "../assets/store.jpg";

const Policies = () => {
  return (
    <div className="policies-container">
      <div className="policies-section">
        <img src={image1} loading="lazy" alt="Custom Products" className="policies-image" />
        <h1 className="policies-title">CREATE</h1>
        <p className="policies-subtitle">Custom Products</p>
        <p className="policies-description">
          Easily add your designs to a wide range of products using our free
          tools.
        </p>
      </div>
      <div className="policies-section">
        <img src={image2} loading="lazy" alt="Sell on your terms" className="policies-image" />
        <h1 className="policies-title">SELL</h1>
        <p className="policies-subtitle">On Your Terms</p>
        <p className="policies-description">
          You choose the products, sale price, and where to sell.
        </p>
      </div>
      <div className="policies-section">
        <img src={image3} loading="lazy" alt="Fulfillment" className="policies-image" />
        <h1 className="policies-title">WE HANDLE</h1>
        <p className="policies-subtitle">Fulfillment</p>
        <p className="policies-description">
          Once an order is placed, we automatically handle all the printing and
          delivery logistics.
        </p>
      </div>
    </div>
  );
};

export default Policies;
