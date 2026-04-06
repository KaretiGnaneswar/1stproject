import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaCode, 
  FaMobile, 
  FaCloud, 
  FaChartBar, 
  FaLightbulb,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';
import SkillBadge from '../components/SkillBadge';

const Home = () => {
  const services = [
    {
      icon: 'bi-code-slash',
      title: 'Web Development',
      description: 'Modern, responsive web applications using cutting-edge technologies and best practices.',
      skills: ['React', 'Node.js', 'Python', 'AWS']
    },
    {
      icon: 'bi-phone',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android with exceptional user experience.',
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      icon: 'bi-cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies for modern applications.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      icon: 'bi-graph-up',
      title: 'Data Analytics',
      description: 'Data-driven insights and analytics solutions to help you make informed business decisions.',
      skills: ['Python', 'SQL', 'Tableau', 'ML']
    },
    {
      icon: 'bi-lightbulb',
      title: 'Consulting',
      description: 'Strategic technology consulting to help you choose the right solutions for your business.',
      skills: ['Architecture', 'Strategy', 'Optimization']
    }
  ];

  const skills = [
    'JavaScript', 'React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'Java', 'C#',
    'HTML5', 'CSS3', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker',
    'Git', 'REST APIs', 'GraphQL', 'Bootstrap', 'Tailwind CSS', 'Webpack'
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Scalable online marketplace handling 10,000+ daily transactions',
      tech: 'React, Node.js, MongoDB, AWS',
      result: '40% increase in conversion rate'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure banking application with biometric authentication',
      tech: 'React Native, Python, PostgreSQL',
      result: 'PCI DSS compliant security'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time business intelligence solution for enterprise clients',
      tech: 'Vue.js, Python, Apache Spark',
      result: '99.9% uptime performance'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content">
              <h1 className="display-4 fw-bold mb-4 fade-in-up">
                Building Digital
                <span className="text-gradient"> Solutions</span>
                <br />
                That Drive Success
              </h1>
              <p className="lead mb-4 fade-in-up">
                I'm a results-driven professional dedicated to delivering exceptional 
                solutions for clients across various industries. I combine technical 
                expertise with business acumen to deliver solutions that exceed expectations.
              </p>
              <div className="d-flex gap-3 fade-in-up">
                <Button 
                  as={Link} 
                  to="/projects" 
                  variant="light" 
                  size="lg"
                  className="px-4"
                >
                  View Projects <FaArrowRight className="ms-2" />
                </Button>
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="outline-light" 
                  size="lg"
                  className="px-4"
                >
                  Get Started
                </Button>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="hero-image fade-in-up">
                <i className="bi bi-code-slash" style={{ fontSize: '15rem', opacity: 0.3 }}></i>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-light">
        <Container>
          <h2 className="section-title">
            My <span className="text-gradient">Services</span>
          </h2>
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <ServiceCard service={service} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <Container>
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center">
                {skills.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} variant="primary" />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Recent Projects */}
      <section className="section-padding bg-light">
        <Container>
          <h2 className="section-title">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <Row>
            {projects.map((project, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card className="project-card h-100">
                  <Card.Body>
                    <Card.Title className="fw-bold">{project.title}</Card.Title>
                    <Card.Text className="text-muted mb-3">
                      {project.description}
                    </Card.Text>
                    <div className="mb-3">
                      <small className="text-muted">
                        <strong>Tech:</strong> {project.tech}
                      </small>
                    </div>
                    <div className="mb-3">
                      <small className="text-success">
                        <strong>Result:</strong> {project.result}
                      </small>
                    </div>
                    <Button 
                      as={Link} 
                      to="/projects" 
                      variant="primary" 
                      size="sm"
                    >
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button 
              as={Link} 
              to="/projects" 
              variant="primary" 
              size="lg"
            >
              View All Projects <FaArrowRight className="ms-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose Me */}
      <section className="section-padding">
        <Container>
          <h2 className="section-title">
            Why <span className="text-gradient">Work With Me</span>
          </h2>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center">
                <div className="mb-3">
                  <FaCheckCircle className="text-primary" style={{ fontSize: '3rem' }} />
                </div>
                <h4 className="fw-bold mb-3">Proven Track Record</h4>
                <p className="text-muted">
                  Successfully delivered 50+ projects with 95% client satisfaction rate 
                  and long-term client relationships.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center">
                <div className="mb-3">
                  <FaCode className="text-primary" style={{ fontSize: '3rem' }} />
                </div>
                <h4 className="fw-bold mb-3">Technical Excellence</h4>
                <p className="text-muted">
                  Clean, maintainable code following industry best practices 
                  and continuous learning approach.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center">
                <div className="mb-3">
                  <FaLightbulb className="text-primary" style={{ fontSize: '3rem' }} />
                </div>
                <h4 className="fw-bold mb-3">Client-Centric Approach</h4>
                <p className="text-muted">
                  Clear communication, regular updates, and flexible, 
                  responsive service throughout the project.
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
            Ready to Start Your Project?
          </h2>
          <p className="lead mb-4">
            Let's discuss how I can help bring your ideas to life and drive your business success.
          </p>
          <Button 
            as={Link} 
            to="/contact" 
            variant="light" 
            size="lg"
            className="px-5"
          >
            Get In Touch <FaArrowRight className="ms-2" />
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Home;
