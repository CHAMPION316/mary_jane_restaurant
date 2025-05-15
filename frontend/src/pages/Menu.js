import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MenuItem from '../components/MenuItem';

// Sample menu data (replace with your actual Italian dishes and wines)
const italianDishes = [
  {
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    price: 18.99,
    image: 'https://via.placeholder.com/300x200.png?text=Margherita+Pizza',
  },
  {
    name: 'Spaghetti Carbonara',
    description: 'Creamy pasta with pancetta, eggs, and Parmesan cheese.',
    price: 22.50,
    image: 'https://via.placeholder.com/300x200.png?text=Spaghetti+Carbonara',
  },
  {
    name: 'Tiramisu',
    description: 'Traditional Italian dessert with coffee, mascarpone, and cocoa.',
    price: 12.99,
    image: 'https://via.placeholder.com/300x200.png?text=Tiramisu',
  },
];

const wines = [
  {
    name: 'Chianti Classico',
    description: 'A robust red wine with notes of cherry and spice.',
    price: 45.00,
    image: 'https://via.placeholder.com/300x200.png?text=Chianti+Classico',
  },
  {
    name: 'Prosecco',
    description: 'A sparkling white wine, perfect for celebrations.',
    price: 38.00,
    image: 'https://via.placeholder.com/300x200.png?text=Prosecco',
  },
  {
    name: 'Pinot Grigio',
    description: 'A crisp white wine with hints of citrus and pear.',
    price: 32.00,
    image: 'https://via.placeholder.com/300x200.png?text=Pinot+Grigio',
  },
];

const Menu = () => {
  return (
    <Container className="my-5">
      {/* Italian Dishes Section */}
      <h1 className="text-center mb-4">Our Menu</h1>
      <h2 className="mb-3">Italian Dishes</h2>
      <Row>
        {italianDishes.map((item, index) => (
          <MenuItem
            key={`dish-${index}`}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </Row>

      {/* Wines Section */}
      <h2 className="mt-5 mb-3">Wines</h2>
      <Row>
        {wines.map((item, index) => (
          <MenuItem
            key={`wine-${index}`}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Menu;