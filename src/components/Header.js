import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      bg="white" 
      expanded={expanded}
      onToggle={setExpanded}
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <span className="text-gradient">Portfolio</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleNavClick}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={handleNavClick}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={handleNavClick}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleNavClick}>
              Contact
            </Nav.Link>
          </Nav>
          <div className="ms-3">
            <Button 
              as={Link} 
              to="/contact" 
              variant="primary"
              onClick={handleNavClick}
            >
              Get Started
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
