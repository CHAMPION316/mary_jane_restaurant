import React, { useState } from 'react';
import { Form, Card, Button, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import '../styles/BookingForm.css';

const BookingForm = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
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
            <div className="col-6">
              <Form.Group className="mb-3" contgrolId="fname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group className="mb-3" contgrolId="lname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                  type="text"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  />
                </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <FormGroup className="mb-3" controlId="formBaiscEmail">
                <FormLabel>Email</FormLabel>
                <FormControl 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter email"
                />
              </FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <Form.Group className="mb-3" controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control 
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)} 
                />
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
                <Form.Label>
                  {wholeRestaurant ? 'Number of Guests (60-94)' : 'Number of Guests (2-12)'}
                </Form.Label>
                <Form.Control 
                  type="number" 
                  min={wholeRestaurant ? "60" : "2"}
                  max={wholeRestaurant ? "94" : "12"}
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
              onChange={(e) => {
                setWholeRestaurant(e.target.checked);
                setGuests(e.target.checked ? 60 : 2);
              }} />
          </Form.Group>

          <Button 
            variant="primary" 
            className="w-100"
            disabled={!date || !time || (wholeRestaurant ? (guests < 60 || guests > 94) : (guests < 2 || guests > 12))}
            onClick={() => {
              const formData = {fname, lname, email, date, time, guests, wholeRestaurant};
              console.log('Form data:', formData);
              alert('Thank you for your booking! We will contact you shortly to confirm your reservation.')
            }}
          >
            Book Now
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default BookingForm;