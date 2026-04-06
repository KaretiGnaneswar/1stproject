import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaCode, 
  FaMobile, 
  FaCloud, 
  FaChartBar, 
  FaLightbulb,
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaDollarSign
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Full-stack web development using modern frameworks and best practices to create fast, secure, and scalable applications.',
      features: [
        'React, Vue.js, Angular frontend',
        'Node.js, Python, PHP backend',
        'RESTful APIs & GraphQL',
        'Responsive design',
        'Progressive Web Apps',
        'E-commerce solutions'
      ],
      technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS'],
      pricing: 'Starting at $5,000'
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experience and performance.',
      features: [
        'React Native development',
        'Flutter applications',
        'Native iOS & Android',
        'UI/UX design',
        'App Store deployment',
        'Maintenance & updates'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      pricing: 'Starting at $8,000'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      description: 'Cloud architecture, deployment, and optimization to ensure your applications are scalable, reliable, and cost-effective.',
      features: [
        'AWS, Azure, GCP setup',
        'Docker & Kubernetes',
        'CI/CD pipelines',
        'Infrastructure as Code',
        'Monitoring & logging',
        'Security & compliance'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      pricing: 'Starting at $3,000'
    },
    {
      icon: <FaChartBar />,
      title: 'Data Analytics',
      description: 'Data engineering and analytics solutions to help you make informed business decisions and gain valuable insights.',
      features: [
        'Data pipeline development',
        'Business intelligence',
        'Dashboard creation',
        'Machine learning models',
        'Data visualization',
        'Predictive analytics'
      ],
      technologies: ['Python', 'SQL', 'Tableau', 'Apache Spark', 'ML'],
      pricing: 'Starting at $4,000'
    },
    {
      icon: <FaLightbulb />,
      title: 'Technical Consulting',
      description: 'Strategic technology consulting to help you choose the right solutions and optimize your existing systems.',
      features: [
        'Architecture design',
        'Technology stack selection',
        'Performance optimization',
        'Security audits',
        'Process improvement',
        'Team training'
      ],
      technologies: ['System Design', 'Best Practices', 'Security', 'Agile'],
      pricing: 'Starting at $150/hour'
    }
  ];

  const packages = [
    {
      name: 'Starter Package',
      price: '$5,000',
      duration: '2-4 weeks',
      features: [
        'Basic web development',
        'Responsive design',
        'Contact form',
        'Basic SEO setup',
        '1 month support',
        'Source code included'
      ],
      ideal: 'Small businesses and startups',
      color: 'light'
    },
    {
      name: 'Professional Package',
      price: '$15,000',
      duration: '1-3 months',
      features: [
        'Full-stack development',
        'Database design',
        'User authentication',
        'Admin dashboard',
        'API integration',
        '3 months support',
        'Performance optimization'
      ],
      ideal: 'Growing businesses',
      color: 'primary',
      featured: true
    },
    {
      name: 'Enterprise Package',
      price: 'Custom',
      duration: '3-6 months',
      features: [
        'Custom solutions',
        'Scalable architecture',
        'Advanced features',
        'Third-party integrations',
        'Dedicated team',
        '6 months support',
        'Training & documentation'
      ],
      ideal: 'Large organizations',
      color: 'dark'
    }
  ];

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-4">
                My <span className="text-gradient">Services</span>
              </h1>
              <p className="lead mb-4">
                I offer comprehensive development services to help businesses 
                succeed in the digital world. From web applications to mobile apps 
                and cloud solutions, I provide end-to-end services tailored to your needs.
              </p>
              <p className="lead mb-4">
                Each service is delivered with a focus on quality, performance, 
                and user experience. I work closely with clients to understand 
                their requirements and deliver solutions that exceed expectations.
              </p>
              <Button 
                as={Link} 
                to="/contact" 
                variant="light" 
                size="lg"
                className="px-4"
              >
                Get a Quote <FaArrowRight className="ms-2" />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-light">
        <Container>
          <h2 className="section-title">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card className="h-100 shadow-sm service-card">
                  <Card.Body className="p-4">
                    <div className="text-primary mb-3" style={{ fontSize: '3rem' }}>
                      {service.icon}
                    </div>
                    <h4 className="fw-bold mb-3">{service.title}</h4>
                    <p className="text-muted mb-4">{service.description}</p>
                    
                    <h6 className="fw-bold mb-3">Key Features:</h6>
                    <ul className="list-unstyled mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <FaCheckCircle className="text-success me-2" />
                          <small>{feature}</small>
                        </li>
                      ))}
                    </ul>

                    <h6 className="fw-bold mb-3">Technologies:</h6>
                    <div className="mb-4">
                      {service.technologies.map((tech, idx) => (
                        <Badge key={idx} bg="light" text="dark" className="me-1 mb-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-primary fw-bold">{service.pricing}</span>
                      <Button 
                        as={Link} 
                        to="/contact" 
                        variant="primary" 
                        size="sm"
                      >
                        Get Quote
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Pricing Packages */}
      <section className="section-padding">
        <Container>
          <h2 className="section-title">
            Pricing <span className="text-gradient">Packages</span>
          </h2>
          <Row>
            {packages.map((pkg, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card className={`h-100 ${pkg.featured ? 'border-primary shadow-lg' : 'shadow-sm'}`}>
                  {pkg.featured && (
                    <div className="bg-primary text-white text-center py-2">
                      <small className="fw-bold">MOST POPULAR</small>
                    </div>
                  )}
                  <Card.Body className="p-4">
                    <h4 className="fw-bold mb-2">{pkg.name}</h4>
                    <div className="mb-3">
                      <span className="display-6 fw-bold text-primary">{pkg.price}</span>
                      <span className="text-muted"> / {pkg.duration}</span>
                    </div>
                    <p className="text-muted mb-4">{pkg.ideal}</p>
                    
                    <ul className="list-unstyled mb-4">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <FaCheckCircle className="text-success me-2" />
                          <small>{feature}</small>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      as={Link} 
                      to="/contact" 
                      variant={pkg.color}
                      className="w-100"
                    >
                      Choose Package
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-light">
        <Container>
          <h2 className="section-title">
            My <span className="text-gradient">Process</span>
          </h2>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '60px', height: '60px' }}>
                  <span className="fw-bold">1</span>
                </div>
                <h5 className="fw-bold mb-3">Discovery</h5>
                <p className="text-muted">
                  Understanding your requirements, goals, and vision for the project.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '60px', height: '60px' }}>
                  <span className="fw-bold">2</span>
                </div>
                <h5 className="fw-bold mb-3">Planning</h5>
                <p className="text-muted">
                  Creating detailed project roadmap, timeline, and technical specifications.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '60px', height: '60px' }}>
                  <span className="fw-bold">3</span>
                </div>
                <h5 className="fw-bold mb-3">Development</h5>
                <p className="text-muted">
                  Building your solution with regular updates and feedback sessions.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '60px', height: '60px' }}>
                  <span className="fw-bold">4</span>
                </div>
                <h5 className="fw-bold mb-3">Delivery</h5>
                <p className="text-muted">
                  Testing, deployment, and providing ongoing support and maintenance.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <Container className="text-center">
          <h2 className="display-5 fw-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="lead mb-4">
            Let's discuss your project requirements and find the perfect solution for your business.
          </p>
          <Button 
            as={Link} 
            to="/contact" 
            variant="light" 
            size="lg"
            className="px-5"
          >
            Get a Free Consultation
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Services;
