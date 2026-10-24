import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Navbar Section*/}
      <nav className="navbar">
        <h2 className="logo">GLASS</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>Plants</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Top Selling<br/>Plants</h1>
          <p>Bring Nature Indoors. Discover the best organic plants.</p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </header>
      {/* Product Grid Section */}
      <section className="products-section">
        <h2>Indoor Plants</h2>
        <p className="section-subtitle">Choose your favorite plants to decorate your space.</p>
        
        <div className="product-grid">
          {/* First Plant */}
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1604762524889-3e20cb234479?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Ficus Lyrata" />
            <h3>Ficus Lyrata</h3>
            <p className="price">$25.00</p>
          </div>
          
          {/* Second Plant */}
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Monstera" />
            <h3>Monstera Deliciosa</h3>
            <p className="price">$35.00</p>
          </div>
          
          {/* Third Plant */}
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1599598425947-3300262b7ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Snake Plant" />
            <h3>Snake Plant</h3>
            <p className="price">$20.00</p>
          </div>
        </div>
      </section>
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
  )
}

export default App