import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaAward,
  FaCode,
  FaUsers,
  FaRocket
} from 'react-icons/fa';

const About = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2020 - Present',
      description: 'Lead development of enterprise web applications and mentor junior developers.'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      period: '2018 - 2020',
      description: 'Developed responsive web applications for various clients using modern frameworks.'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2016 - 2018',
      description: 'Built and maintained web applications while learning best practices and modern technologies.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      period: '2012 - 2016',
      description: 'Specialized in Software Engineering and Web Technologies'
    }
  ];

  const achievements = [
    {
      icon: <FaAward />,
      title: '50+ Projects Delivered',
      description: 'Successfully completed over 50 projects for clients worldwide'
    },
    {
      icon: <FaUsers />,
      title: '95% Client Satisfaction',
      description: 'Maintained excellent client relationships and satisfaction rates'
    },
    {
      icon: <FaRocket />,
      title: 'Startup Success',
      description: 'Helped 5 startups launch their MVP products successfully'
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
                About <span className="text-gradient">Me</span>
              </h1>
              <p className="lead mb-4">
                I'm a passionate full-stack developer with over 7 years of experience 
                in building digital solutions that drive business success. My journey 
                in tech started with a curiosity about how things work and evolved into 
                a career focused on creating impactful, user-centered applications.
              </p>
              <p className="lead mb-4">
                I specialize in modern web technologies, cloud architecture, and 
                creating scalable solutions that solve real-world problems. My approach 
                combines technical expertise with business understanding to deliver 
                products that not only work well but also achieve business objectives.
              </p>
              <div className="d-flex gap-3">
                <Button 
                  as={Link} 
                  to="/projects" 
                  variant="light" 
                  size="lg"
                >
                  View My Work
                </Button>
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="outline-light" 
                  size="lg"
                >
                  Get In Touch
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-light">
        <Container>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <Row>
            {experiences.map((exp, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="mb-3">
                      <FaBriefcase className="text-primary me-2" />
                      <h5 className="d-inline fw-bold">{exp.title}</h5>
                    </div>
                    <h6 className="text-primary mb-2">{exp.company}</h6>
                    <p className="text-muted small mb-3">{exp.period}</p>
                    <p className="text-muted">{exp.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <Container>
          <h2 className="section-title">
            <span className="text-gradient">Education</span>
          </h2>
          <Row className="justify-content-center">
            <Col lg={6}>
              {education.map((edu, index) => (
                <Card className="shadow-sm mb-4" key={index}>
                  <Card.Body>
                    <div className="mb-3">
                      <FaGraduationCap className="text-primary me-2" />
                      <h5 className="d-inline fw-bold">{edu.degree}</h5>
                    </div>
                    <h6 className="text-primary mb-2">{edu.school}</h6>
                    <p className="text-muted small mb-3">{edu.period}</p>
                    <p className="text-muted">{edu.description}</p>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-light">
        <Container>
          <h2 className="section-title">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <Row>
            {achievements.map((achievement, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <div className="text-center p-4">
                  <div className="mb-3 text-primary" style={{ fontSize: '3rem' }}>
                    {achievement.icon}
                  </div>
                  <h4 className="fw-bold mb-3">{achievement.title}</h4>
                  <p className="text-muted">{achievement.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Personal Philosophy */}
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="section-title text-center mb-5">
                My <span className="text-gradient">Philosophy</span>
              </h2>
              <div className="text-center">
                <p className="lead mb-4">
                  I believe in the power of technology to transform businesses and improve lives. 
                  My approach is built on three core principles:
                </p>
                <Row>
                  <Col md={4} className="mb-4">
                    <div className="p-3">
                      <FaCode className="text-primary mb-3" style={{ fontSize: '2rem' }} />
                      <h5 className="fw-bold">Code Quality</h5>
                      <p className="text-muted">
                        Writing clean, maintainable code that stands the test of time
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="p-3">
                      <FaUsers className="text-primary mb-3" style={{ fontSize: '2rem' }} />
                      <h5 className="fw-bold">Client Focus</h5>
                      <p className="text-muted">
                        Understanding client needs and delivering solutions that exceed expectations
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="p-3">
                      <FaRocket className="text-primary mb-3" style={{ fontSize: '2rem' }} />
                      <h5 className="fw-bold">Innovation</h5>
                      <p className="text-muted">
                        Staying current with technology and finding creative solutions to complex problems
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <Container className="text-center">
          <h2 className="display-5 fw-bold mb-4">
            Let's Work Together
          </h2>
          <p className="lead mb-4">
            I'm always excited to take on new challenges and help bring innovative ideas to life.
          </p>
          <Button 
            as={Link} 
            to="/contact" 
            variant="light" 
            size="lg"
            className="px-5"
          >
            Start a Conversation
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default About;
