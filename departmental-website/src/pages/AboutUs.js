// src/pages/AboutUs.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="my-5">
      <h2>About Us</h2>
      <p>
        The Department of XYZ is committed to providing outstanding education and research opportunities in the field of XYZ. Our mission is to foster innovation, critical thinking, and a passion for lifelong learning.
      </p>
      <Row className="mt-4">
        <Col md={6}>
          <h4>Mission & Vision</h4>
          <p>
            Our mission is to deliver high-quality education and conduct cutting-edge research. We envision becoming a leading department recognized for its contributions to the field of XYZ.
          </p>
        </Col>
        <Col md={6}>
          <h4>History</h4>
          <p>
            Established in 19XX, the Department of XYZ has grown from a small program to a comprehensive department offering a wide range of courses and research opportunities.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
