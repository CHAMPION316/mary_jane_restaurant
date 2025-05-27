import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-bg py-4">
      <Container>
        <Row>
          <Col md={6}>
            <div className="text-light">
              <p className="mb-2">123 Spring Street, SoHo</p>
              <p className="mb-2">New York, NY 10012</p>
              <p className="mb-2">+1 (212) 555-0123</p>
              <div className="social-icons">
                <a href="https://x.com/" target="_blank" className="text-light me-3"><i className="bi bi-twitter-x"></i></a>
                <a href="https://www.instagram.com/" target="_blank" className="text-light me-3"><i className="bi bi-instagram"></i></a>
                <a href="https://www.facebook.com/" target="_blank" className="text-light"><i className="bi bi-facebook"></i></a>
              </div>
            </div>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center footer-top-padding">
            <p className="text-light mb-0">© 2024 Mary Jane Restaurant. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 