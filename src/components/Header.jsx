import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPizzaSlice, FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import Cart from './Cart';
import '../styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount, toggleCart } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <FaPizzaSlice className="logo-icon" />
            <span>Pizza Brava</span>
          </Link>
        </div>

        <div className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" onClick={() => setIsOpen(false)}>Menú</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" onClick={() => setIsOpen(false)}>Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contacto</Link>
            </li>
          </ul>
        </nav>

        <div className="cart-badge" onClick={toggleCart}>
          <FaShoppingCart />
          {getCartCount() > 0 && <span className="count">{getCartCount()}</span>}
        </div>

        <Cart />
      </div>
    </header>
  );
};

export default Header;