import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* top menu*/}
      <nav className="navbar">
        <h2 className="logo">GLASS</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>Plants</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* main content */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Top Selling<br/>Plants</h1>
          <p>Bring Nature Indoors. Discover the best organic plants.</p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </header>
    </div>
  )
}

export default App