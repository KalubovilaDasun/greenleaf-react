import { useState } from 'react';
import './App.css';

function App() {
  /* State to track the current page */
  const [currentPage, setCurrentPage] = useState('home');
  
  /* State to track shopping cart items */
  const [cart, setCart] = useState([]);

  /* Plant Data Array */
  const plantsData = [
    { id: 1, name: 'Ficus Lyrata', price: 25, img: '/zz-plant.jpg' },
    { id: 2, name: 'Monstera Deliciosa', price: 35, img: '/monstera.jpg' },
    { id: 3, name: 'Snake Plant', price: 20, img: '/snake-plant.jpg' },
    { id: 4, name: 'Areca Palm', price: 40, img: '/areca-palm.jpg' },
    { id: 5, name: 'Rubber Plant', price: 30, img: '/rubber-plant.jpg' },
    { id: 6, name: 'ZZ Plant', price: 22, img: '/zz-plant.jpg' }
  ];

  /* Function to add item to cart */
  const addToCart = (plant) => {
    setCart([...cart, plant]);
    alert(plant.name + " added to your cart!");
  };

  /* Calculate total price */
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);
  
  return (
    <div className="app-container">
 {/* Navbar Section */}
      <nav className="navbar">
        <h2 className="logo" onClick={() => setCurrentPage('home')}>GLASS</h2>
        <ul className="nav-links">
          <li onClick={() => setCurrentPage('home')}>Home</li>
          <li onClick={() => setCurrentPage('about')}>About</li>
          <li onClick={() => setCurrentPage('contact')}>Contact</li>
          <li onClick={() => setCurrentPage('cart')} className="cart-link">
            Cart ({cart.length})
          </li>
        </ul>
      </nav>

      {/* Home Page Content */}
      {currentPage === 'home' && (
        <>
          <header className="hero-section">
            <div className="hero-content">
              <h1>Top Selling<br/>Plants</h1>
              <p>Bring Nature Indoors. Discover the best organic plants.</p>
              <button className="shop-btn" onClick={() => setCurrentPage('cart')}>View Cart</button>
            </div>
            <div className="hero-image-container">
              {/* Main large plant image for the hero section */}
              <img src="https://images.unsplash.com/photo-1597211684565-dca64d72bdce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Hero Plant" className="hero-img" />
            </div>
          </header>
             {/* Product Grid Section */}
          <section className="products-section">
            <h2>Indoor Plants</h2>
            <p className="section-subtitle">Choose your favorite plants to decorate your space.</p>
            
            <div className="product-grid">
              {plantsData.map((plant) => (
                <div className="product-card" key={plant.id}>
                  <img src={plant.img} alt={plant.name} />
                  <div className="product-info">
                    <h3>{plant.name}</h3>
                    <p className="price">${plant.price}.00</p>
                  </div>
                  <button className="add-cart-btn" onClick={() => addToCart(plant)}>
                    + Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* About Page */}
      {currentPage === 'about' && (
        <section className="page-section">
          <h2>About Us</h2>
          <p>Welcome to GreenLeaf. We are passionate about bringing the beauty of nature into your home with our premium organic plants.</p>
        </section>
      )}

      {/* Contact Page */}
      {currentPage === 'contact' && (
        <section className="page-section">
          <h2>Contact Us</h2>
          <p>Email: info@greenleaf.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Location: 123 Green Street, Plant City</p>
        </section>
      )}

      {/* Shopping Cart Page */}
      {currentPage === 'cart' && (
        <section className="page-section cart-section">
          <h2>Your Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is currently empty.</p>
          ) : (
            <div className="cart-container">
              {cart.map((item, index) => (
                <div className="cart-item" key={index}>
                  <h4>{item.name}</h4>
                  <p>${item.price}.00</p>
                </div>
              ))}
              <div className="cart-total">
                <h3>Total: ${cartTotal}.00</h3>
                <button className="shop-btn">Checkout</button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>GLASS</h2>
            <p>Bringing life to your indoor spaces.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <p>Instagram | Facebook | Twitter</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 GreenLeaf - Organic Plant Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;