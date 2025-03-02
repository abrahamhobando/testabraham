import { Link } from 'react-router-dom';
import { FaPizzaSlice, FaInstagram, FaFacebook, FaTiktok, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <Link to="/">
            <FaPizzaSlice className="logo-icon" />
            <span>Pizza Brava</span>
          </Link>
          <p>Las pizzas más bravas de la ciudad</p>
        </div>

        <div className="footer-links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/menu">Menú</Link></li>
            <li><Link to="/about">Nosotros</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contáctanos</h3>
          <p><FaPhone /> +506 8888-9999</p>
          <p><FaMapMarkerAlt /> San José, Costa Rica</p>
        </div>

        <div className="footer-social">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Pizza Brava. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;