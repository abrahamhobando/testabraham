import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For example, sending the data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
  };

  // WhatsApp number - replace with your actual number
  const whatsappNumber = '50612345678'; // Example Costa Rica number
  const whatsappMessage = 'Hola, me gustaría obtener más información sobre sus pizzas.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="contact-page">
      {/* Contact Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1>Contáctanos</h1>
          <p>Estamos aquí para atenderte y responder todas tus preguntas</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Información de Contacto</h2>
              <p>Estamos disponibles para atenderte por diferentes medios. ¡Contáctanos!</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <FaPhone className="contact-icon" />
                  <div>
                    <h3>Teléfono</h3>
                    <a href="tel:+50612345678">+506 1234-5678</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <h3>Correo Electrónico</h3>
                    <a href="mailto:info@pizzasbrava.com">info@pizzasbrava.com</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <h3>Ubicación</h3>
                    <p>Av. Central, San José, Costa Rica</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h3>Síguenos en Redes Sociales</h3>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Envíanos un Mensaje</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Enviar Mensaje</button>
              </form>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="map-section">
            <h2>Nuestra Ubicación</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15721.553186229368!2d-84.08800565!3d9.9325367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e342c50d15c5%3A0xe6746c7966cf7bbe!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1sen!2sus!4v1625764215694!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Ubicación de la Pizzería"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* WhatsApp Floating Button */}
      <a href={whatsappUrl} className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="whatsapp-icon" />
        <span>¡Contáctanos por WhatsApp!</span>
      </a>
    </div>
  );
};

export default Contact;