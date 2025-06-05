import React from 'react';
import BookingForm from '../components/BookingForm';
import bookingBackground from '../assets/images/booking-bg.jpg';

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
      <div className="container mt-5">
        <h1>Bookings</h1>
        <p>Make a reservation at The Mary Jane.</p>
        <BookingForm />
      </div>
    </div>
  );
};

export default Bookings;