import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaSearch,
  FaFilter,
  FaCalendarAlt,
  FaUsers,
  FaChartLine
} from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'A scalable online marketplace handling 10,000+ daily transactions with real-time inventory management.',
      longDescription: 'Built a comprehensive e-commerce platform with advanced features including user authentication, payment processing, inventory management, order tracking, and admin dashboard. Implemented microservices architecture for scalability and used Redis for caching to improve performance.',
      image: 'ecommerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redis', 'Stripe'],
      features: ['User Authentication', 'Payment Processing', 'Inventory Management', 'Admin Dashboard', 'Real-time Updates'],
      results: '40% increase in conversion rate, 99.9% uptime',
      client: 'RetailTech Solutions',
      duration: '3 months',
      team: '3 developers',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure banking application with biometric authentication and real-time transaction processing.',
      longDescription: 'Developed a secure mobile banking application with features including biometric authentication, real-time transaction processing, budget tracking, bill payments, and investment portfolio management. Implemented end-to-end encryption and complied with PCI DSS security standards.',
      image: 'banking',
      technologies: ['React Native', 'Python', 'PostgreSQL', 'AWS', 'JWT'],
      features: ['Biometric Authentication', 'Real-time Transactions', 'Budget Tracking', 'Bill Payment', 'Investment Portfolio'],
      results: 'PCI DSS compliant, 50K+ active users',
      client: 'FinTech Bank',
      duration: '4 months',
      team: '4 developers',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      category: 'data',
      description: 'Real-time business intelligence solution for enterprise clients with advanced data visualization.',
      longDescription: 'Created a comprehensive business intelligence dashboard that aggregates data from multiple sources, provides real-time insights, customizable reports, and predictive analytics. Integrated with various data sources and implemented machine learning models for forecasting.',
      image: 'analytics',
      technologies: ['Vue.js', 'Python', 'Apache Spark', 'PostgreSQL', 'D3.js'],
      features: ['Real-time Data', 'Custom Reports', 'Predictive Analytics', 'Data Visualization', 'Export Functionality'],
      results: '99.9% uptime, 50+ stakeholders',
      client: 'DataCorp Analytics',
      duration: '2 months',
      team: '2 developers',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 4,
      title: 'Healthcare Portal',
      category: 'web',
      description: 'Patient management system with appointment scheduling and telemedicine capabilities.',
      longDescription: 'Built a comprehensive healthcare portal with patient management, appointment scheduling, telemedicine capabilities, electronic health records, and billing integration. Ensured HIPAA compliance and implemented secure data handling practices.',
      image: 'healthcare',
      technologies: ['Angular', 'Node.js', 'MySQL', 'Docker', 'WebRTC'],
      features: ['Patient Management', 'Appointment Scheduling', 'Telemedicine', 'EHR Integration', 'HIPAA Compliance'],
      results: '25% reduction in no-shows, improved patient satisfaction',
      client: 'MediCare Plus',
      duration: '5 months',
      team: '5 developers',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 5,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'On-demand food delivery platform with real-time tracking and payment integration.',
      longDescription: 'Developed a complete food delivery ecosystem including customer app, restaurant app, and driver app. Features include real-time order tracking, multiple payment options, rating system, and analytics dashboard for restaurant owners.',
      image: 'food',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps API', 'Stripe'],
      features: ['Real-time Tracking', 'Multiple Payment Options', 'Rating System', 'Analytics Dashboard', 'Push Notifications'],
      results: '15K+ orders per month, 4.8 star rating',
      client: 'QuickEats',
      duration: '3 months',
      team: '3 developers',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 6,
      title: 'Learning Management System',
      category: 'web',
      description: 'Educational platform with video streaming, quizzes, and progress tracking.',
      longDescription: 'Created a comprehensive learning management system with video streaming capabilities, interactive quizzes, progress tracking, certificate generation, and discussion forums. Implemented SCORM compliance and integrated with popular video conferencing tools.',
      image: 'education',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS S3', 'WebRTC'],
      features: ['Video Streaming', 'Interactive Quizzes', 'Progress Tracking', 'Certificates', 'Discussion Forums'],
      results: '10K+ active learners, 95% completion rate',
      client: 'EduTech Academy',
      duration: '4 months',
      team: '4 developers',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'data', label: 'Data Analytics' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-4">
                My <span className="text-gradient">Projects</span>
              </h1>
              <p className="lead mb-4">
                Explore my portfolio of successful projects delivered to clients 
                across various industries. Each project represents a unique challenge 
                solved with innovative solutions and cutting-edge technologies.
              </p>
              <p className="lead mb-4">
                From e-commerce platforms to mobile applications and data analytics 
                solutions, I've helped businesses achieve their goals through 
                technology. Below are some of my recent works that showcase my 
                expertise and commitment to excellence.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <Container>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <Row>
            {featuredProjects.map((project) => (
              <Col lg={4} md={6} className="mb-4" key={project.id}>
                <Card className="project-card h-100">
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h4 className="fw-bold">{project.title}</h4>
                      <Badge bg="success">Featured</Badge>
                    </div>
                    <p className="text-muted mb-3">{project.description}</p>
                    
                    <div className="mb-3">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} bg="light" text="dark" className="me-1 mb-1">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge bg="secondary" className="mb-1">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="mb-3">
                      <small className="text-success">
                        <strong>Result:</strong> {project.results}
                      </small>
                    </div>

                    <div className="d-flex gap-2">
                      <Button 
                        variant="primary" 
                        size="sm"
                        onClick={() => handleProjectClick(project)}
                      >
                        <FaSearch className="me-1" /> View Details
                      </Button>
                      {project.liveUrl && (
                        <Button 
                          variant="outline-primary" 
                          size="sm"
                          href={project.liveUrl}
                          target="_blank"
                        >
                          <FaExternalLinkAlt className="me-1" /> Live
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-light">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="section-title mb-0">
              All <span className="text-gradient">Projects</span>
            </h2>
            <div className="d-flex gap-2">
              <FaFilter className="text-primary" />
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={filter === category.value ? 'primary' : 'outline-primary'}
                  size="sm"
                  onClick={() => setFilter(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          <Row>
            {filteredProjects.map((project) => (
              <Col lg={4} md={6} className="mb-4" key={project.id}>
                <Card className="project-card h-100">
                  <Card.Body className="p-4">
                    <h4 className="fw-bold mb-3">{project.title}</h4>
                    <p className="text-muted mb-3">{project.description}</p>
                    
                    <div className="mb-3">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} bg="light" text="dark" className="me-1 mb-1">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge bg="secondary" className="mb-1">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="mb-3">
                      <small className="text-muted">
                        <FaCalendarAlt className="me-1" />
                        {project.duration} • 
                        <FaUsers className="ms-2 me-1" />
                        {project.team}
                      </small>
                    </div>

                    <div className="d-flex gap-2">
                      <Button 
                        variant="primary" 
                        size="sm"
                        onClick={() => handleProjectClick(project)}
                      >
                        <FaSearch className="me-1" /> Details
                      </Button>
                      {project.liveUrl && (
                        <Button 
                          variant="outline-primary" 
                          size="sm"
                          href={project.liveUrl}
                          target="_blank"
                        >
                          <FaExternalLinkAlt className="me-1" /> Live
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button 
                          variant="outline-secondary" 
                          size="sm"
                          href={project.githubUrl}
                          target="_blank"
                        >
                          <FaGithub className="me-1" /> Code
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Modal 
          show={true} 
          onHide={handleCloseModal} 
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedProject.longDescription}</p>
            
            <h5 className="fw-bold mb-3">Key Features:</h5>
            <ul>
              {selectedProject.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h5 className="fw-bold mb-3">Technologies Used:</h5>
            <div className="mb-3">
              {selectedProject.technologies.map((tech, index) => (
                <Badge key={index} bg="primary" className="me-2 mb-2">
                  {tech}
                </Badge>
              ))}
            </div>

            <Row className="mt-4">
              <Col md={6}>
                <h6 className="fw-bold">Client:</h6>
                <p className="text-muted">{selectedProject.client}</p>
              </Col>
              <Col md={6}>
                <h6 className="fw-bold">Duration:</h6>
                <p className="text-muted">{selectedProject.duration}</p>
              </Col>
              <Col md={6}>
                <h6 className="fw-bold">Team Size:</h6>
                <p className="text-muted">{selectedProject.team}</p>
              </Col>
              <Col md={6}>
                <h6 className="fw-bold">Results:</h6>
                <p className="text-success">{selectedProject.results}</p>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            {selectedProject.liveUrl && (
              <Button 
                variant="primary" 
                href={selectedProject.liveUrl}
                target="_blank"
              >
                <FaExternalLinkAlt className="me-1" /> View Live Project
              </Button>
            )}
            {selectedProject.githubUrl && (
              <Button 
                variant="outline-secondary" 
                href={selectedProject.githubUrl}
                target="_blank"
              >
                <FaGithub className="me-1" /> View Code
              </Button>
            )}
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <Container className="text-center">
          <h2 className="display-5 fw-bold mb-4">
            Interested in a Similar Project?
          </h2>
          <p className="lead mb-4">
            Let's discuss how I can help bring your ideas to life with the same 
            level of quality and expertise demonstrated in these projects.
          </p>
          <Button 
            as="a" 
            href="/contact" 
            variant="light" 
            size="lg"
            className="px-5"
          >
            Start Your Project
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Projects;
