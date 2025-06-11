import React from 'react';
import BookingForm from '../components/BookingForm';
import bookingBackground from '../assets/images/booking-bg.jpg';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer.js'

const Bookings = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bookingBackground})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <div 
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          minHeight: '100vh',
          width: '100%',
          paddingTop: 0,
          marginTop: 0,
        }}
      >
      <Container className="position-relative" style={{ zIndex: 1, paddingTop: 32, marginTop: 0 }}>
        <div className="container mt-5">
          <h1 className="text-center mb-4 text-white jacques-title">Bookings</h1>
          <p className="text-center mb-4 text-white">Make a reservation at The Mary Jane</p>
          <BookingForm />
        </div>
      </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Bookings;