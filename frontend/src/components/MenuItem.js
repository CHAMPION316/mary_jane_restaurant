import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import ImageModal from './ImageModal';

const MenuItem = ({ name, description, price, image }) => {
  const [showModal, setShowModal] = useState(false);
  
  // Split the name to separate the wine type
  const [wineName, wineType] = name.split(' (');
  const formattedWineType = wineType ? `(${wineType}` : '';
  
  // Check if the item is a wine
  const isWine = name.includes('(dry)') || 
                 name.includes('(semi-sweet)') || 
                 name.includes('(sweet)') || 
                 name.includes('(semi-sweet to sweet)') ||
                 name.includes('(dry to semi-sweet)');
  
  // Set image style based on whether it's a wine or not
  const imageStyle = {
    height: '200px',
    objectFit: isWine ? 'contain' : 'cover',
    cursor: 'pointer'
  };

  return (
    <Col md={4} className="mb-4">
      <Card className="h-100 shadow-sm">
        <Card.Img 
          variant="top" 
          src={image} 
          alt={name} 
          style={imageStyle}
          onClick={() => setShowModal(true)}
        />
        <Card.Body>
          <Card.Title>
            {wineName}
            {wineType && <span className="fst-italic"> {formattedWineType}</span>}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text className="fw-bold">${price.toFixed(2)}</Card.Text>
        </Card.Body>
      </Card>
      <ImageModal 
        show={showModal}
        onHide={() => setShowModal(false)}
        image={image}
      />
    </Col>
  );
};

export default MenuItem;