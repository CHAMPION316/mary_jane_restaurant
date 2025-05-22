import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';

const Menu = () => {
  const desserts = [
    {
      name: "Tiramisu Classico",
      description: "Traditional tiramisu with layers of coffee-soaked ladyfingers and mascarpone cream",
      price: "12.99",
      category: "Dessert"
    },
    {
      name: "Panna Cotta ai Frutti di Bosco",
      description: "Silky vanilla panna cotta topped with mixed berry compote",
      price: "11.99",
      category: "Dessert"
    },
    {
      name: "Cannoli Siciliani",
      description: "Crispy pastry tubes filled with sweet ricotta and chocolate chips, dusted with powdered sugar",
      price: "10.99",
      category: "Dessert"
    },
    {
      name: "Torta al Cioccolato",
      description: "Warm chocolate cake with molten center, served with vanilla gelato",
      price: "13.99",
      category: "Dessert"
    },
    {
      name: "Gelato Trio",
      description: "Choose any three: Vanilla, Chocolate, Pistachio, Stracciatella, Hazelnut, or Coffee",
      price: "9.99",
      category: "Ice Cream"
    },
    {
      name: "Affogato al Caffè",
      description: "Vanilla gelato 'drowned' in hot espresso with chocolate shavings",
      price: "8.99",
      category: "Ice Cream"
    },
    {
      name: "Tartufo al Cioccolato",
      description: "Chocolate and vanilla gelato with a cherry center, coated in cocoa powder",
      price: "11.99",
      category: "Ice Cream"
    },
    {
      name: "Zeppole di San Giuseppe",
      description: "Italian cream puffs filled with custard and topped with amarena cherries",
      price: "10.99",
      category: "Dessert"
    },
    {
      name: "Semifreddo all'Amaretto",
      description: "Semi-frozen amaretto-flavored dessert with caramelized almonds",
      price: "11.99",
      category: "Ice Cream"
    },
    {
      name: "Crostata di Frutta",
      description: "Fresh fruit tart with pastry cream and seasonal berries",
      price: "12.99",
      category: "Dessert"
    },
    {
      name: "Profiteroles al Cioccolato",
      description: "Choux pastry puffs filled with vanilla cream, drizzled with warm chocolate sauce",
      price: "11.99",
      category: "Dessert"
    },
    {
      name: "Coppa Spagnola",
      description: "Layers of vanilla and amarena cherry gelato with cherry sauce and whipped cream",
      price: "10.99",
      category: "Ice Cream"
    }
  ];

  return (
    <div className="py-5" style={{ backgroundColor: '#78133c', minHeight: '100vh' }}>
      <Container>
        <h1 className="text-center text-light mb-5">Dessert Menu</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {desserts.map((item, idx) => (
            <Col key={idx}>
              <MenuItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Menu;