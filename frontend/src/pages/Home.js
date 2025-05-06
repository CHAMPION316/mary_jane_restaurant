import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import image from assets folder
import frontPage from '../assets/images/front-page.jpg';

const Home = () => {
  return (
    <div className="bg-light">
      {/* Hero Section with Front Cover Image */}
      <div
        className="text-center py-5 bg-dark text-white"
        style={{
          backgroundImage: `url(${frontPage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Container>
          <h1 className="display-4">Welcome to The Mary Jane</h1>
          <p className="lead">A fine dining experience awaits you.</p>
          <Button as={Link} to="/bookings" variant="primary" size="lg">
            Book a Table
          </Button>
        </Container>
      </div>

      {/* About Section */}
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <h2>About Us</h2>
            <p>
              The Mary Jane offers an exquisite fine dining experience with a focus on fresh, locally sourced ingredients. Join us for an unforgettable meal, available for reservations at 4:00 PM, 6:00 PM, 8:00 PM, or 10:00 PM.
            </p>
          </Col>
          <Col md={6}>
            <h2>Our Specialties</h2>
            <p>
              From grilled salmon to truffle pasta, our menu is crafted to delight your senses. Explore our offerings and reserve your table today.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;