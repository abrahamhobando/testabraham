import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Toaster position="top-right" />
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
