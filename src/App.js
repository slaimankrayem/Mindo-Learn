import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/"        exact element={<Home />} />
          <Route path="/about"   exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/help"    exact element={<Help />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
