import React from 'react';
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import logos from "../assets/logo.jpg";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="nav1">
      {/* Adding a logo to the left side */}
      <Navbar.Brand href="#home">
        <img 
          src={logos}
          alt="Logo"
          className="nav-logo"    
        />
      </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav2">
          <Nav.Link href="#features">Features</Nav.Link>
          
          {/* Services Dropdown */}
          <Dropdown className="nav-item-dropdown">
            <Dropdown.Toggle as="a" className="nav-link" href="#service">
              Service
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#design">Design</Dropdown.Item>
              <Dropdown.Item href="#printing">Printing</Dropdown.Item>
              <Dropdown.Item href="#shipping">Shipping</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Need Help Dropdown */}
          <Dropdown className="nav-item-dropdown">
            <Dropdown.Toggle as="a" className="nav-link" href="#NeedHelp">
              Need Help!
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#faq">FAQ</Dropdown.Item>
              <Dropdown.Item href="#support">Customer Support</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link href="#blog">Blog</Nav.Link>

          {/* How it Works Dropdown */}
          <Dropdown className="nav-item-dropdown">
            <Dropdown.Toggle as="a" className="nav-link" href="#howitworks">
              How it Works
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#step1">Step 1</Dropdown.Item>
              <Dropdown.Item href="#step2">Step 2</Dropdown.Item>
              <Dropdown.Item href="#step3">Step 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>

        <div className="d-flex">
          <Button variant="outline-success" className="nav-btn">Login</Button>
          <Button variant="success">Signup</Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
