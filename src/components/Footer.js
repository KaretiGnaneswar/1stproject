import React from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <h5 className="text-white mb-3">About Me</h5>
            <p className="text-white-50">
              A results-driven professional dedicated to delivering exceptional solutions 
              for clients across various industries. I combine technical expertise with 
              business acumen to deliver solutions that exceed expectations.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white fs-5"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white fs-5"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white fs-5"
              >
                <FaTwitter />
              </a>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h5 className="text-white mb-3">Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" className="text-white-50 p-0 mb-2">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white-50 p-0 mb-2">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className="text-white-50 p-0 mb-2">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/projects" className="text-white-50 p-0 mb-2">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-white-50 p-0">
                Contact
              </Nav.Link>
            </Nav>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-white mb-3">Services</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">
                Web Development
              </Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">
                Mobile Apps
              </Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">
                Cloud Solutions
              </Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">
                Data Analytics
              </Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0">
                Consulting
              </Nav.Link>
            </Nav>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-white mb-3">Contact Info</h5>
            <div className="text-white-50">
              <p className="mb-2">
                <FaEnvelope className="me-2" />
                your-email@example.com
              </p>
              <p className="mb-2">
                <FaPhone className="me-2" />
                +1 (555) 123-4567
              </p>
              <p className="mb-3">
                <FaMapMarkerAlt className="me-2" />
                Your City, Country
              </p>
              <Button 
                as={Link} 
                to="/contact" 
                variant="primary"
                className="w-100"
              >
                Get In Touch
              </Button>
            </div>
          </Col>
        </Row>
        
        <hr className="border-white-50 my-4" />
        
        <Row>
          <Col className="text-center">
            <p className="text-white-50 mb-0">
              © {currentYear} Portfolio. All rights reserved. | 
              Designed with <span className="text-danger">♥</span> by Kareti Gnaneswar
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
