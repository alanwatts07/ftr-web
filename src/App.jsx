import React from 'react';
import Hero from './components/Hero';
import FeaturedArtist from './components/FeaturedArtist';

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <nav>
          <div className="logo">FTR</div>
          <ul className="nav-links">
            <li><a href="#home">HQ</a></li>
            <li><a href="#artists">ARTISTS</a></li>
            <li><a href="#contact">SIGNAL</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="artists">
          <FeaturedArtist />
        </div>
      </main>
      <footer className="main-footer">
        <p>&copy; {new Date().getFullYear()} FUCK THIS RADIO. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

export default App;
