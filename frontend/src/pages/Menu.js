import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MenuItem from '../components/MenuItem';

// Import pizza images from assets folder
import margheritaPizza from '../assets/images/margherita-pizza.jpg'
import quattroFormaggi from '../assets/images/quattro-formaggi-pizza.jpg'
import marinaraPizza from '../assets/images/marinara-pizza.jpg'
import capricciosaPizza from '../assets/images/capricciosa-pizza.jpg'
import sicilianPizza from '../assets/images/sicilian-pizza.jpg'
import napoletanaPizza from '../assets/images/napoletana-pizza.jpeg'

// Import pasta images from assets folder
import alleVongole from '../assets/images/alle-vongole.jpg'
import raguBolognese from '../assets/images/ragu-bolognese.jpg'
import ravioli from '../assets/images/ravioli.jpg'
import pappardelle from '../assets/images/pappardelle.jpg'
import linguini from '../assets/images/linguine-ai-frutti.jpg'
import orecchiette from '../assets/images/orecchiette.jpg'

// Import red wine images from assets folder
import cabernetSauvignon from '../assets/images/cabernet-sauvignon.jpg'
import pinotNoir from '../assets/images/pinot-noir.png'
import merlot from '../assets/images/merlot.png'
import sangiovese from '../assets/images/sangiovese.jpg'
import zinfandel from '../assets/images/zinfandel.png'
import malbec from '../assets/images/malbec.png'

// Import white wine images from assets folder
import chardonnay from '../assets/images/chardonnay.png'
import sauvignonBlanc from '../assets/images/sauvignon-blanc.png'
import pinotGrigio from '../assets/images/pinot-grigio.png'
import riesling from '../assets/images/riesling.png'
import moscato from '../assets/images/moscato.png'
import cheninBlanc from '../assets/images/chenin-blanc.png'

// Import dessert images from assets folder
import tiramisu from '../assets/images/tiramisu.jpg'
import pannaCotta from '../assets/images/panna-cotta.jpg'
import cannoli from '../assets/images/cannoli.jpg'
import tortaCaprese from '../assets/images/torta-caprese.jpg'
import semifreddoLimoncello from '../assets/images/semifreddo-limoncello.png'
import affogato from '../assets/images/affogato.jpg'

// Sample menu data (replace with your actual Italian dishes and wines)
const pizza = [
  {
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    price: 20.50,
    image: margheritaPizza,
  },
  {
    name: 'Quattro Formaggi',
    description: 'Made with four different cheeses—mozzarella, gorgonzola, parmesan, and fontina.',
    price: 29.99,
    image: quattroFormaggi,
  },
  {
    name: 'Marinara',
    description: 'Tomato sauce, garlic, oregano, and olive oil',
    price: 21.50,
    image: marinaraPizza,
  },
  {
    name: 'Pizza capricciosa',
    description: 'mozzarella cheese, prosciutto, mushrooms, green and black olives, artichokes, and tomatoes.',
    price: 26.50,
    image: capricciosaPizza,
  },
  {
    name: 'Sicilian pizza',
    description: 'Caciocavallo cheese (or Pecorino Romano), anchovy fillets, toasted breadcrumbs, fresh basil',
    price: 23.99,
    image: sicilianPizza,
  },
  {
    name: 'Pizza Napoletana',
    description: 'Fresh mozzarella (fior di latte or buffalo mozzarella), fresh basil leaves, extra virgin olive oil',
    price: 23.99,
    image: napoletanaPizza,
  },
];

const pasta = [
  {
    name: 'Spaghetti alle Vongole',
    description: 'Fresh clams, garlic, white wine, and parsley tossed with al dente.',
    price: 31.99,
    image: alleVongole,
  },
  {
    name: 'Tagliatelle al Ragù Bolognese',
    description: 'House-made tagliatelle with a rich, slow-simmered beef and pork ragù, scented with tomato and fresh herbs.',
    price: 33.99,
    image: raguBolognese,
  },
  {
    name: 'Ravioli di Ricotta e Spinaci',
    description: 'Handmade ravioli filled with creamy ricotta and spinach, served in a sage butter sauce with toasted pine nuts.',
    price: 29.99,
    image: ravioli,
  },
  {
    name: 'Pappardelle ai Funghi Porcini',
    description: 'Handmade ravioli filled with creamy ricotta and spinach, served in a sage butter sauce with toasted pine nuts.',
    price: 29.99,
    image: pappardelle,
  },
  {
    name: 'Linguine ai Frutti di Mare',
    description: 'Linguine with shrimp, mussels, and calamari in a vibrant tomato sauce, infused with basil and white wine.',
    price: 34.99,
    image: linguini,
  },
  {
    name: 'Orecchiette con Cime di Rapa',
    description: 'Ear-shaped orecchiette with broccoli rabe, anchovies, garlic, and chili, finished with extra virgin olive oil.',
    price: 27.99,
    image: orecchiette,
  },
];

const redWines = [
  {
    name: 'Cabernet Sauvignon (dry)',
    description: 'Bold and full-bodied with dark fruit, cassis, and hints of oak. Perfect with hearty dishes.',
    price: 22.00,
    image: cabernetSauvignon,
  },
  {
    name: 'Pinot Noir (dry)',
    description: 'Elegant and silky, offering red cherry, raspberry, and earthy notes. Pairs well with poultry.',
    price: 20.00,
    image: pinotNoir,
  },
  {
    name: 'Merlot (dry)',
    description: 'Smooth and plush with flavors of blackberry, plum, and soft tannins. Great with pasta.',
    price: 18.00,
    image: merlot,
  },
  {
    name: 'Sangiovese (dry)',
    description: 'Vibrant and rustic, featuring tart cherry, herbs, and a touch of spice. Ideal with tomato-based dishes.',
    price: 18.00,
    image: sangiovese,
  },
  {
    name: 'Zinfandel (semi-sweet to sweet)',
    description: 'Juicy and bold with ripe berry, jam, and a hint of pepper. Complements spicy foods.',
    price: 19.00,
    image: zinfandel,
  },
  {
    name: 'Malbec (dry)',
    description: 'Rich and velvety, bursting with blackberry, cocoa, and subtle smoke. Excellent with grilled meats.',
    price: 21.00,
    image: malbec,
  },
];

const whiteWines = [
  {
    name: 'Chardonnay (dry to semi-sweet)',
    description: 'Creamy and versatile with apple, pear, and buttery oak notes. Pairs with seafood or chicken.',
    price: 20.00,
    image: chardonnay,
  },
  {
    name: 'Sauvignon Blanc (dry)',
    description: 'Crisp and zesty with citrus, green apple, and grassy hints. Perfect with salads or fish.',
    price: 18.00,
    image: sauvignonBlanc,
  },
  {
    name: 'Pinot Grigio (dry)',
    description: 'Light and refreshing, offering pear, lemon, and a clean finish. Great with light appetizers.',
    price: 16.00,
    image: pinotGrigio,
  },
  {
    name: 'Riesling (semi-sweet)',
    description: 'Bright and aromatic with peach, apricot, and a touch of honey. Ideal with spicy dishes.',
    price: 18.00,
    image: riesling,
  },
  {
    name: 'Moscato (sweet)',
    description: 'Sweet and fizzy with tropical fruit, peach, and floral notes. Wonderful with desserts.',
    price: 16.00,
    image: moscato,
  },
  {
    name: 'Chenin Blanc (dry to semi-sweet)',
    description: 'Lively and versatile, showcasing apple, melon, and a hint of minerality. Pairs with creamy dishes.',
    price: 18.00,
    image: cheninBlanc,
  },
];

const desserts = [
  {
    name: 'Tiramisu Classico',
    description: 'Layers of espresso-soaked savoiardi, creamy mascarpone, and cocoa, finished with a hint of amaretto for an undulgent finish',
    price: 15.99,
    image: tiramisu,
  },
  {
    name: 'Panna Cotta alla Vaniglia',
    description: 'Silky vanilla bean panna cotta, served with a vibrant berry compote and delicate almond biscotti crumble',
    price: 14.99,
    image: pannaCotta,
  },
  {
    name: 'Cannoli Sicilliani',
    description: 'Crisp pastry shells filled with sweet ricotta, candied orange, and chocolate chips, dusted with powdered sugar',
    price: 13.99,
    image: cannoli,
  },
  {
    name: 'Torta Caprese',
    description: 'Flourless chocolate-almond cake, rich and fudgy, served with a scoop of hazelnut gelato and fresh rasberries.',
    price: 16.99,
    image: tortaCaprese,
  },
  {
    name: 'Semifreddo al Limoncello',
    description: 'Chiled lemon semifreddo with a tangy limoncello swirl, paired with buttery shortbread and candied lemon zest',
    price: 14.99,
    image: semifreddoLimoncello,
  },
  {
    name: 'Affogato al Caffè',
    description: 'Creamy fior di latte gelato drowned in hot espresso, topped with crushed amaretti and a chocolate drizzle.',
    price: 13.99,
    image: affogato,
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

      {/* Dessert Section */}
      <h2 className="mt-5 mb-3">Desserts</h2>
      <Row>
        {desserts.map((item, index) => (
          <MenuItem
            key={`dessert-${index}`}
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