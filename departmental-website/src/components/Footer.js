import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Department Name</h5>
            <p>123 University Ave, City, Country</p>
            <p>Email: contact@department.edu</p>
          </Col>
          <Col md={6} className="text-md-right">
            <h5>Follow Us</h5>
            <a href="#" className="text-light mr-3">
              Facebook
            </a>
            <a href="#" className="text-light mr-3">
              Twitter
            </a>
            <a href="#" className="text-light">
              LinkedIn
            </a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            &copy; {new Date().getFullYear()} Department Name. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
