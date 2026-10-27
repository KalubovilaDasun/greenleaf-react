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
    { id: 2, name: 'Monstera Deliciosa', price: 35, img: '/monny-plant.jpg' },
    { id: 3, name: 'Snake Plant', price: 20, img: '/snake-plant.jpg' },
    { id: 4, name: 'Areca Palm', price: 40, img: '/areca-palm.jpg' },
    { id: 5, name: 'Rubber Plant', price: 30, img: '/rubber-plant.jpg' },
    { id: 6, name: 'ZZ Plant', price: 22, img: '/z-plant.jpg' }
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
        <h2 className="logo" onClick={() => setCurrentPage('home')}>GreenLeaf</h2>
        <ul className="nav-links">
          <li onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' }), 100); }}>Home</li>
          <li onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' }), 100); }}>About</li>
          <li onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }), 100); }}>Contact</li>
          <div className="nav-action">
            <button className="cart-btn" onClick={() => setCurrentPage('cart')}>
              Cart ({cart.length})
            </button>
          </div>
        </ul>
      </nav>

      {/* Home Page Content */}
      {currentPage === 'home' && (
        <>
          <header id = "home" className="hero-section">
            <div className="hero-content">
              <h1>Top Selling<br/>Plants</h1>
              <p>Bring Nature Indoors. Discover the best<br/>organic plants for your space.</p>
              
              <button className="hero-shop-btn" onClick={() => setCurrentPage('cart')}>
                <span className="arrow-circle">&lt;</span>
                Shop Now
                <span className="arrow-circle">&gt;</span>
              </button>

              <div className="hero-socials">
                <p>Trusted by thousands</p>
                <div className="stars">
                  ★ ★ ★ ★ ★ <span className="twitter-icon">🐦</span>
                </div>
              </div>
            </div>
            <div className="hero-image-container">
              {/* Main large plant image for the hero section */}
              <img src="/hero-plant.jpg" alt="Hero Plant" className="hero-img" />
            </div>
          </header>
          {/* Benefits / Services Section */}
          <section className="benefits-section">
            <div className="benefit-item">
              <span className="benefit-icon">🚚</span>
              <div>
                <h4>Free Delivery</h4>
                <p>For orders over $50</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🌿</span>
              <div>
                <h4>100% Organic</h4>
                <p>Guaranteed quality</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🎧</span>
              <div>
                <h4>24/7 Support</h4>
                <p>Always here for you</p>
              </div>
            </div>
          </section>
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

          {/* --- Testimonials Section --- */}
          <section className="testimonials-section">
            <h2>What Our Customers Say</h2>
            <div className="testimonial-grid">
              <div className="testimonial-card">
                <div className="stars-review">★★★★★</div>
                <p className="testimonial-text">"Absolutely love the Monsteras I bought! They arrived perfectly healthy and carefully packaged."</p>
                <p className="customer-name">- Sarah Jenkins</p>
              </div>
              <div className="testimonial-card">
                <div className="stars-review">★★★★★</div>
                <p className="testimonial-text">"The best online plant shop I've ever used. The free delivery was fast."</p>
                <p className="customer-name">- David Mark</p>
              </div>
              <div className="testimonial-card">
                <div className="stars-review">★★★★★</div>
                <p className="testimonial-text">"Great customer service! They answered all my questions. I will definitely order more."</p>
                <p className="customer-name">- Emily R.</p>
              </div>
            </div>
          </section>

        {/* --- About Section (Glass Design) --- */}
          <section id="about" className="about-glass-section">
            <div className="glass-card-container">
              <div className="glass-image-wrapper">
                {/* Transparent PNG */}
                <img src="/transcription.png" alt="Dracaena Plant" className="glass-plant-img" />
              </div>
              <div className="glass-content">
                <span className="glass-subtitle">ABOUT LIFE AND PLANTS</span>
                <h2 className="glass-title">Enjoy<br/>Nature</h2>
                <h3 className="glass-subheading">Dracaena Plant</h3>
                <p className="glass-description">
                  Dracaena is a popular houseplant known for its air-purifying qualities. It thrives in low to moderate light and is easy to care for, making it perfect for home and office.
                </p>
                <div className="glass-tags">
                  <span className="glass-tag">Connect with nature</span>
                  <span className="glass-tag active">plant care</span>
                  <span className="glass-tag">plant care</span>
                  <span className="glass-tag">Gallery</span>
                </div>
              </div>
            </div>
          </section>

          {/* --- Contact Section (Glass Design) --- */}
          <section id="contact" className="contact-glass-section">
            <div className="glass-card-container">
              <div className="glass-content">
                <span className="glass-subtitle">GET IN TOUCH</span>
                <h2 className="glass-title">Contact Us</h2>
                <p className="glass-description">
                  We'd love to hear from you! Get in touch for any plant care tips or order inquiries.
                </p>
                <div className="contact-info">
                  <p><strong>Email:</strong> hello@greenleaf.com</p>
                  <p><strong>Phone:</strong> +94 77 123 4567</p>
                  <p><strong>Address:</strong> 123 Green Way, Colombo, Sri Lanka</p>
                </div>
              </div>
              <div className="glass-image-wrapper">
             
                <img src="/transcription2.png" alt="Contact Us" className="glass-plant-img" />
              </div>
            </div>
          </section>

        </>
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
            <h2>GreenLeaf</h2>
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