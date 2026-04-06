import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaTwitter
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: 'your-email@example.com',
      description: 'Send me an email anytime'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: 'Your City, Country',
      description: 'Available for remote work worldwide'
    },
    {
      icon: <FaClock />,
      title: 'Business Hours',
      details: 'Mon-Fri: 9am-6pm',
      description: 'Sat: 10am-2pm, Sun: Closed'
    }
  ];

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'Cloud Solutions',
    'Data Analytics',
    'Technical Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000+',
    'Custom Quote'
  ];

  const timelines = [
    'ASAP',
    '1-2 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-4">
                Get In <span className="text-gradient">Touch</span>
              </h1>
              <p className="lead mb-4">
                Ready to start your next project? I'm here to help bring your ideas 
                to life. Whether you need a new website, mobile app, or technical 
                consulting, I'm committed to delivering solutions that exceed your expectations.
              </p>
              <p className="lead mb-4">
                Fill out the contact form below or reach out directly through any of 
                the contact methods. I typically respond within 24 hours and look 
                forward to discussing how we can work together.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-light">
        <Container>
          <h2 className="section-title">
            Contact <span className="text-gradient">Information</span>
          </h2>
          <Row>
            {contactInfo.map((info, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className="h-100 text-center shadow-sm">
                  <Card.Body className="p-4">
                    <div className="text-primary mb-3" style={{ fontSize: '2rem' }}>
                      {info.icon}
                    </div>
                    <h5 className="fw-bold mb-2">{info.title}</h5>
                    <p className="text-primary fw-bold mb-1">{info.details}</p>
                    <p className="text-muted small">{info.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <Container>
          <h2 className="section-title">
            Start Your <span className="text-gradient">Project</span>
          </h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              {showSuccess && (
                <Alert variant="success" className="mb-4">
                  Thank you for your message! I'll get back to you within 24 hours.
                </Alert>
              )}
              
              <Card className="contact-form shadow-sm">
                <Card.Body className="p-4">
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-bold">Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-bold">Email *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-bold">Phone</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-bold">Company</Form.Label>
                          <Form.Control
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={4} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-bold">Project Type *</Form.Label>
                          <Form.Select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((type, index) => (
                              <option key={index} value={type}>{type}</option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={4} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-bold">Budget Range</Form.Label>
                          <Form.Select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((budget, index) => (
                              <option key={index} value={budget}>{budget}</option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={4} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-bold">Timeline</Form.Label>
                          <Form.Select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                          >
                            <option value="">Select timeline</option>
                            {timelines.map((timeline, index) => (
                              <option key={index} value={timeline}>{timeline}</option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Project Details *</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project, requirements, goals, and any specific features you need..."
                      />
                    </Form.Group>

                    <div className="text-center">
                      <Button 
                        type="submit" 
                        variant="primary" 
                        size="lg"
                        disabled={isSubmitting}
                        className="px-5"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="me-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Social Links */}
      <section className="section-padding bg-light">
        <Container>
          <h2 className="section-title">
            Connect on <span className="text-gradient">Social Media</span>
          </h2>
          <Row className="justify-content-center">
            <Col lg={6} className="text-center">
              <p className="lead mb-4">
                Follow me on social media for updates on my latest projects 
                and tech insights.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Button 
                  variant="primary" 
                  size="lg"
                  href="https://linkedin.com"
                  target="_blank"
                  className="px-4"
                >
                  <FaLinkedin className="me-2" />
                  LinkedIn
                </Button>
                <Button 
                  variant="dark" 
                  size="lg"
                  href="https://github.com"
                  target="_blank"
                  className="px-4"
                >
                  <FaGithub className="me-2" />
                  GitHub
                </Button>
                <Button 
                  variant="info" 
                  size="lg"
                  href="https://twitter.com"
                  target="_blank"
                  className="px-4"
                >
                  <FaTwitter className="me-2" />
                  Twitter
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <Container>
          <h2 className="section-title">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      What is your typical project timeline?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, 
                      while complex applications can take 3-6 months or more. I'll provide a detailed timeline 
                      during our initial consultation.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      How do you handle project pricing?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      I offer flexible pricing models including fixed-price for well-defined projects, 
                      hourly rates for consulting, and retainer agreements for ongoing work. 
                      Pricing depends on project complexity, timeline, and specific requirements.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Do you provide ongoing support and maintenance?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, I offer ongoing support and maintenance services. This includes bug fixes, 
                      security updates, performance optimization, and feature enhancements. 
                      Support packages can be customized based on your needs.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      What technologies do you specialize in?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      I specialize in modern web technologies including React, Node.js, Python, 
                      and cloud platforms like AWS. I'm also experienced with mobile development 
                      using React Native and Flutter, and data analytics tools.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
