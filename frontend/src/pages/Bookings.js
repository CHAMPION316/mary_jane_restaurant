import React from 'react';
import BookingForm from '../components/BookingForm';

const Bookings = () => {
  return (
    <div className="container mt-5">
      <h1>Bookings</h1>
      <p>Make a reservation at The Mary Jane.</p>
      <BookingForm />
    </div>
  );
};

export default Bookings;