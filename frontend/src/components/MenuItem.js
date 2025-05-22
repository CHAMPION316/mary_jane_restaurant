import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MenuItem = ({ name, description, price, image }) => {
  // Split the name to separate the wine type
  const [wineName, wineType] = name.split(' (');
  const formattedWineType = wineType ? `(${wineType}` : '';

  return (
    <Col md={4} className="mb-4">
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" src={image} alt={name} style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>
            {wineName}
            {wineType && <span className="fst-italic"> {formattedWineType}</span>}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text className="fw-bold">${price.toFixed(2)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MenuItem;