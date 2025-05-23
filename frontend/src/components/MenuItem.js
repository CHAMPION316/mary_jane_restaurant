import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MenuItem = ({ name, description, price, image }) => {
  // Split the name to separate the wine type
  const [wineName, wineType] = name.split(' (');
  const formattedWineType = wineType ? `(${wineType}` : '';
  
  // Check if the item is a wine
  const isWine = name.includes('(dry)') || 
                 name.includes('(semi-sweet)') || 
                 name.includes('(sweet)') || 
                 name.includes('(semi-sweet to sweet)');
  
  // Set image style based on whether it's a wine or not
  const imageStyle = {
    height: '200px',
    objectFit: isWine ? 'contain' : 'cover'
  };

  return (
    <Col md={4} className="mb-4">
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" src={image} alt={name} style={imageStyle} />
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