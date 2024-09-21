import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaReddit,
} from "react-icons/fa";
import "./header.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Integrations */}
        <div className="footer-column">
          <h3>Integrations</h3>
          <ul>
            <li>
              <a href="#">Shopify</a>
            </li>
            <li>
              <a href="#">Etsy</a>
            </li>
            <li>
              <a href="#">eBay</a>
            </li>
            <li>
              <a href="#">Amazon</a>
            </li>
            <li>
              <a href="#">TikTok Shop</a>
            </li>
            <li>
              <a href="#">PrestaShop</a>
            </li>
            <li>
              <a href="#">BigCommerce</a>
            </li>
            <li>
              <a href="#">Wix</a>
            </li>
            <li>
              <a href="#">WooCommerce</a>
            </li>
            <li>
              <a href="#">Squarespace</a>
            </li>
          </ul>
        </div>

        {/* Discover */}
        <div className="footer-column">
          <h3>Discover</h3>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Guides</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Etsy Print-On-Demand</a>
            </li>
            <li>
              <a href="#">Shopify Print-On-Demand</a>
            </li>
            <li>
              <a href="#">Woocommerce Print-On-Demand</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Shipping Rates</a>
            </li>
          </ul>
        </div>

        {/* Start Selling */}
        <div className="footer-column">
          <h3>Start Selling</h3>
          <ul>
            <li>
              <a href="#">Custom T-Shirts</a>
            </li>
            <li>
              <a href="#">Custom Hoodies</a>
            </li>
            <li>
              <a href="#">Custom Mugs</a>
            </li>
            <li>
              <a href="#">Sell on Etsy</a>
            </li>
            <li>
              <a href="#">Sell on Social Media</a>
            </li>
            <li>
              <a href="#">Start POD Business</a>
            </li>
          </ul>
        </div>

        {/* Printify Section */}
        <div className="footer-column">
          <h3>Printify</h3>
          <ul>
            <li>
              <a href="#">Print On Demand</a>
            </li>
            <li>
              <a href="#">Print Providers</a>
            </li>
            <li>
              <a href="#">Affiliate</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="footer-social">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaYoutube />
        </a>
        <a href="#">
          <FaTiktok />
        </a>
        <a href="#">
          <FaReddit />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
