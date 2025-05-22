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

const redWines = [
  {
    name: 'Cabernet Sauvignon (dry)',
    description: 'Bold and full-bodied with dark fruit, cassis, and hints of oak. Perfect with hearty dishes.',
    price: 22.00,
    image: 'https://via.placeholder.com/300x200.png?text=Chianti+Classico',
  },
  {
    name: 'Pinot Noir (dry)',
    description: 'Elegant and silky, offering red cherry, raspberry, and earthy notes. Pairs well with poultry.',
    price: 20.00,
    image: 'https://via.placeholder.com/300x200.png?text=Pinot+Grigio',
  },
  {
    name: 'Merlot (dry)',
    description: 'Smooth and plush with flavors of blackberry, plum, and soft tannins. Great with pasta.',
    price: 18.00,
    image: 'https://via.placeholder.com/300x200.png?text=Pinot+Grigio',
  },
  {
    name: 'Sangiovese (dry)',
    description: 'Vibrant and rustic, featuring tart cherry, herbs, and a touch of spice. Ideal with tomato-based dishes.',
    price: 18.00,
    image: 'https://via.placeholder.com/300x200.png?text=Chianti+Classico',
  },
  {
    name: 'Zinfandel (semi-sweet to sweet)',
    description: 'Juicy and bold with ripe berry, jam, and a hint of pepper. Complements spicy foods.',
    price: 19.00,
    image: 'https://via.placeholder.com/300x200.png?text=Chianti+Classico',
  },
  {
    name: 'Malbec (dry)',
    description: 'Rich and velvety, bursting with blackberry, cocoa, and subtle smoke. Excellent with grilled meats.',
    price: 21.00,
    image: 'https://via.placeholder.com/300x200.png?text=Pinot+Grigio',
  },
];

const whiteWines = [
  {
    name: 'Chardonnay (dry to semi-sweet)',
    description: 'Creamy and versatile with apple, pear, and buttery oak notes. Pairs with seafood or chicken.',
    price: 20.00,
    image: 'https://via.placeholder.com/300x200.png?text=Chardonnay',
  },
  {
    name: 'Sauvignon Blanc (dry)',
    description: 'Crisp and zesty with citrus, green apple, and grassy hints. Perfect with salads or fish.',
    price: 18.00,
    image: 'https://via.placeholder.com/300x200.png?text=Sauvignon+Blanc',
  },
  {
    name: 'Pinot Grigio (dry)',
    description: 'Light and refreshing, offering pear, lemon, and a clean finish. Great with light appetizers.',
    price: 16.00,
    image: 'https://via.placeholder.com/300x200.png?text=Prosecco',
  },
  {
    name: 'Riesling (semi-sweet)',
    description: 'Bright and aromatic with peach, apricot, and a touch of honey. Ideal with spicy dishes.',
    price: 18.00,
    image: 'https://via.placeholder.com/300x200.png?text=Riesling',
  },
  {
    name: 'Moscato (sweet)',
    description: 'Sweet and fizzy with tropical fruit, peach, and floral notes. Wonderful with desserts.',
    price: 16.00,
    image: 'https://via.placeholder.com/300x200.png?text=Chardonnay',
  },
  {
    name: 'Chenin Blanc (dry to semi-sweet)',
    description: 'Lively and versatile, showcasing apple, melon, and a hint of minerality. Pairs with creamy dishes.',
    price: 18.00,
    image: 'https://via.placeholder.com/300x200.png?text=Chardonnay',
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
        {pasta.map((item, index) => (
          <MenuItem
            key={`pasta-${index}`}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </Row>

      {/* Red Wines Section */}
      <h2 className="mt-5 mb-3">Red Wines</h2>
      <Row>
        {redWines.map((item, index) => (
          <MenuItem
            key={`red-wine-${index}`}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </Row>

      {/* White Wines Section */}
      <h2 className="mt-5 mb-3">White Wines</h2>
      <Row>
        {whiteWines.map((item, index) => (
          <MenuItem
            key={`white-wine-${index}`}
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