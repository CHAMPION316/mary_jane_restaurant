import React, { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import '../styles/BookingForm.css';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [wholeRestaurant, setWholeRestaurant] = useState(false);

  // BookingForm card component
  return (
    <Card className="booking-form-card">
      <Card.Body>
        <Form>
          <div className="row">
            <div className="col-4">
              <Form.Group className="mb-3" controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control 
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)} />
              </Form.Group>
            </div>
            <div className="col-4">
              <Form.Group className="mb-3" controlId="time">
                <Form.Label>Time</Form.Label>
                <Form.Select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  >
                  <option value="" disabled>Select a time</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="8:00 PM">8:00 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-4">
              <Form.Group className="mb-3" controlId="guests">
                <Form.Label>Number of Guests (2-12)</Form.Label>
                <Form.Control 
                  type="number" 
                  min="2" 
                  max="12"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))} />
              </Form.Group>
            </div>
          </div>

          <Form.Group className="mb-3" controlId="wholeRestaurant">
            <Form.Check 
              type="checkbox" 
              label="Reserve Whole Restaurant"
              checked={wholeRestaurant}
              onChange={(e) => setWholeRestaurant(e.target.checked)} />
          </Form.Group>

          <Button variant="primary" className="w-100">
            Book Now
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default BookingForm;