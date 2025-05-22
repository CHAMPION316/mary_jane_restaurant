import React from 'react';
import { Card } from 'react-bootstrap';

const MenuItem = ({ name, description, price, category }) => {
  return (
    <Card className="h-100 menu-item" style={{ backgroundColor: '#1a1a1a', border: '1px solid #78133c' }}>
      <Card.Body className="text-light">
        <Card.Title className="d-flex justify-content-between align-items-center">
          <span>{name}</span>
          <span className="text-warning">${price}</span>
        </Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
        <div className="text-end">
          <small className="text-warning">{category}</small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MenuItem;
