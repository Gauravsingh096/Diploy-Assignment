import React from "react";
import { Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import logos from "../assets/logo.jpg";
import { useNavigate, Link } from 'react-router-dom'; // Use Link for internal navigation

const MyNavbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <Navbar bg="light" expand="lg" className="nav1">
      <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img src={logos} alt="Logo" className="nav-logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav2">
          <Nav.Link as={Link} to="/features">Features</Nav.Link>

          {/* Services Dropdown */}
          <Dropdown className="nav-item-dropdown">
            <Dropdown.Toggle as="a" className="nav-link">
              Service
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/design">Design</Dropdown.Item>
              <Dropdown.Item as={Link} to="/printing">Printing</Dropdown.Item>
              <Dropdown.Item as={Link} to="/shipping">Shipping</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Need Help Dropdown */}
          <Dropdown className="nav-item-dropdown">
            <Dropdown.Toggle as="a" className="nav-link">
              Need Help!
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/faq">FAQ</Dropdown.Item>
              <Dropdown.Item as={Link} to="/support">Customer Support</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link as={Link} to="/blog">Blog</Nav.Link>

          {/* How it Works Dropdown */}
          <Dropdown className="nav-item-dropdown">
            <Dropdown.Toggle as="a" className="nav-link">
              How it Works
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/step1">Step 1</Dropdown.Item>
              <Dropdown.Item as={Link} to="/step2">Step 2</Dropdown.Item>
              <Dropdown.Item as={Link} to="/step3">Step 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>

        <div className="d-flex">
          <Button variant="outline-success" className="nav-btn" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="success" onClick={handleSignup}>Signup</Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
