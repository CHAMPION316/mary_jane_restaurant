import React, { useState, useMemo } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import {
  usePhoneInput,
  defaultCountries,
  parseCountry,
  FlagImage,
} from 'react-international-phone';
import '../styles/BookingForm.css';

const BookingForm = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [wholeRestaurant, setWholeRestaurant] = useState(false);

  // Prepare full country list for the native select
  const countryOptions = useMemo(
    () => defaultCountries.map((c) => parseCountry(c)),
    []
  );

  // International phone input using the headless hook
  const { inputValue, handlePhoneValueChange, country, setCountry } = usePhoneInput({
    defaultCountry: 'us',
    value: phone,
    disableDialCodeAndPrefix: true,
    disableDialCodePrefill: true,
    onChange: (data) => {
      setPhone(data.phone || '');
    },
  });

  // BookingForm card component
  return (
    <Card className="booking-form-card">
      <Card.Body>
        <Form>
          <div className="row">
            <div className="col-6">
              <Form.Group className="mb-3" controlId="fname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                placeholder="First Name"
                />
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group className="mb-3" controlId="lname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                  type="text"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Last Name"
                  />
                </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
                />
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone number</Form.Label>
                <div className="input-group phone-input-group">
                  {/* Visible compact country display (flag + dial code) */}
                  <div className="phone-country-wrapper">
                    <div className="phone-country-display">
                      <FlagImage
                        iso2={country?.iso2 || 'us'}
                        className="phone-flag"
                        size="1.25rem"
                      />
                      <span className="phone-dial">+{country?.dialCode || '1'}</span>
                    </div>

                    {/* Invisible native <select> overlaid on top — opens real browser dropdown (no clipping) */}
                    <select
                      className="phone-country-select-hidden"
                      value={country?.iso2 || 'us'}
                      onChange={(e) => setCountry(e.target.value)}
                      aria-label="Country code"
                    >
                      {countryOptions.map((c) => (
                        <option key={c.iso2} value={c.iso2}>
                          {c.name} (+{c.dialCode})
                        </option>
                      ))}
                    </select>
                  </div>

                  <Form.Control
                    type="tel"
                    value={inputValue}
                    onChange={handlePhoneValueChange}
                    placeholder="Enter phone number"
                    className="phone-number-input"
                  />
                </div>
              </Form.Group>
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
            disabled={
              !fname || 
              !lname || 
              !email || 
              !phone || 
              !date || 
              !time || 
              (wholeRestaurant 
                ? (guests < 60 || guests > 94) 
                : (guests < 2 || guests > 12)
              )
            }
            onClick={() => {
              const formData = {fname, lname, email, phone, date, time, guests, wholeRestaurant};
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