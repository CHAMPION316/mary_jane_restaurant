import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

// Import image from assets folder
import frontPage from '../assets/images/front-page.jpg';
import wineGlass from '../assets/images/wine-glass.jpg';
import pastaDish from '../assets/images/pasta.jpg';
import ovenPizza from '../assets/images/oven-pizza2.jpg';

const Home = () => {
  return (
    <div className="home-bg-color">
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
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-4">Welcome to The Mary Jane</h1>
          <p className="lead">A fine dining experience awaits you.</p>
          <Button as={Link} to="/bookings" variant="primary" size="lg" className="book-table-btn">
            Book a Table
          </Button>
        </Container>
      </div>

      {/* About Section */}
      <Container>
        <div className="pt-3 text-center text-light both-padding">
          <h3 className="pb-2">What makes us special?</h3>
          <p className='p-line-space'>
            Nestled in the heart of SoHo, NYC, Mary Jane invites you to savor the artistry of fine Italian dining. 
            Our menu celebrates time-honored Italian dishes, crafted with the freshest ingredients and paired with 
            an exquisite selection of wines from renowned vineyards. In an elegant yet welcoming atmosphere, 
            every bite and sip tells a story of tradition and passion. Whether you're seeking a romantic evening 
            or a memorable gathering, Mary Jane promises an unforgettable culinary journey.
          </p>
        </div>
        <div className="pt-4">
          <Row>
            <Col md={4} className="split-col text-center">
              <img src={ovenPizza} alt="Oven Pizza" style={{maxWidth: '75%', height: 'auto', borderRadius: '8px'}} />
            </Col>
            <Col md={4} className="split-col text-center">
              <img src={wineGlass} alt="Wine glass" style={{ maxWidth: '80%', height: 'auto', borderRadius: '8px' }} />
            </Col>
            <Col md={4} className="split-col text-center">
              <img src={pastaDish} alt="Cooking Pasta" style={{maxWidth: '80%', height: 'auto', borderRadius: '8px'}} />
            </Col>
          </Row>
        </div>
        <footer className="pb-1 text-center text-light">
        </footer>
      </Container>
    </div>
  );
};

export default Home;