import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <Card className="service-card h-100">
      <Card.Body className="text-center p-4">
        <div className="service-icon">
          <i className={`bi ${service.icon}`}></i>
        </div>
        <Card.Title className="fw-bold mb-3">
          {service.title}
        </Card.Title>
        <Card.Text className="text-muted mb-4">
          {service.description}
        </Card.Text>
        <div className="mb-3">
          {service.skills.map((skill, index) => (
            <span 
              key={index}
              className="badge bg-light text-dark me-1 mb-1"
            >
              {skill}
            </span>
          ))}
        </div>
        <Button 
          as={Link} 
          to="/services" 
          variant="outline-primary"
          size="sm"
        >
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
