import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MenuItem from '../components/MenuItem';

// Sample menu data (replace with your actual Italian dishes and wines)
const pizza = [
  {
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    price: 20.50,
    image: 'https://via.placeholder.com/300x200.png?text=Margherita+Pizza',
  },
  {
    name: 'Quattro Formaggi',
    description: 'Made with four different cheeses—mozzarella, gorgonzola, parmesan, and fontina.',
    price: 29.99,
    image: 'https://via.placeholder.com/300x200.png?text=Spaghetti+Carbonara',
  },
  {
    name: 'Marinara',
    description: 'Tomato sauce, garlic, oregano, and olive oil',
    price: 21.50,
    image: 'https://via.placeholder.com/300x200.png?text=Tiramisu',
  },
  {
    name: 'Pizza capricciosa',
    description: 'mozzarella cheese, prosciutto, mushrooms, green and black olives, artichokes, and tomatoes.',
    price: 26.50,
    image: 'https://via.placeholder.com/300x200.png?text=Tiramisu',
  },
  {
    name: 'Sicilian pizza',
    description: 'Caciocavallo cheese (or Pecorino Romano), anchovy fillets, toasted breadcrumbs, fresh basil',
    price: 23.99,
    image: 'https://via.placeholder.com/300x200.png?text=Tiramisu',
  },
  {
    name: 'Pizza Napoletana',
    description: 'Fresh mozzarella (fior di latte or buffalo mozzarella), fresh basil leaves, extra virgin olive oil',
    price: 23.99,
    image: 'https://via.placeholder.com/300x200.png?text=Tiramisu',
  },
];

const pasta = [
  {
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    price: 18.99,
    image: 'https://via.placeholder.com/300x200.png?text=Margherita+Pizza',
  },
  {
    name: 'Quattro Formaggi',
    description: 'Made with four different cheeses—mozzarella, gorgonzola, parmesan, and fontina.',
    price: 23.99,
    image: 'https://via.placeholder.com/300x200.png?text=Spaghetti+Carbonara',
  },
  {
    name: 'Marinara',
    description: 'Tomato sauce, garlic, oregano, and olive oil',
    price: 21.99,
    image: 'https://via.placeholder.com/300x200.png?text=Tiramisu',
  },
];


const wines = [
  {
    name: 'Cabernet Sauvignon (dry)',
    description: 'A robust red wine with notes of cherry and spice.',
    price: 45.00,
    image: 'https://via.placeholder.com/300x200.png?text=Chianti+Classico',
  },
  {
    name: 'Pinot (dry)',
    description: 'A sparkling white wine, perfect for celebrations.',
    price: 38.00,
    image: 'https://via.placeholder.com/300x200.png?text=Prosecco',
  },
  {
    name: 'Merlot (dry)',
    description: 'A crisp white wine with hints of citrus and pear.',
    price: 32.00,
    image: 'https://via.placeholder.com/300x200.png?text=Pinot+Grigio',
  },
  {
    name: 'Sangiovese (dry)',
    description: 'A robust red wine with notes of cherry and spice.',
    price: 45.00,
    image: 'https://via.placeholder.com/300x200.png?text=Chianti+Classico',
  },
  {
    name: 'Zinfandel (semi-sweet to sweet)',
    description: 'A sparkling white wine, perfect for celebrations.',
    price: 38.00,
    image: 'https://via.placeholder.com/300x200.png?text=Prosecco',
  },
  {
    name: 'Malbec (dry)',
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
      <h2 className="mb-3">Pizza</h2>
      <Row>
        {pizza.map((item, index) => (
          <MenuItem
            key={`pizza-${index}`}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </Row>

      {/* Pasta Section */}
      <h2 className="mt-5 mb-3">Pasta</h2>
      <Row>
        {wines.map((item, index) => (
          <MenuItem
            key={`pasta-${index}`}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </Row>

      {/* Wines Section */}
      <h2 className="mt-5 mb-3">Red Wines</h2>
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