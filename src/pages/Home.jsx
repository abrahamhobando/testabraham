import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaQuoteLeft } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  // Featured pizzas data
  const featuredPizzas = [
    {
      id: 1,
      name: 'Pizza Margherita',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'La clásica italiana con tomate, mozzarella y albahaca fresca',
      price: '₡7,500'
    },
    {
      id: 2,
      name: 'Pizza Pepperoni',
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Deliciosa pizza con abundante pepperoni y queso derretido',
      price: '₡8,500'
    },
    {
      id: 3,
      name: 'Pizza Vegetariana',
      image: 'https://images.unsplash.com/photo-1604917877934-07d8d248d396?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Combinación de vegetales frescos sobre una base de tomate y queso',
      price: '₡8,000'
    },
    {
      id: 4,
      name: 'Pizza Suprema',
      image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'La favorita de la casa con jamón, champiñones, pimientos y aceitunas',
      price: '₡9,500'
    }
  ];

  // Promotions data
  const promotions = [
    {
      id: 1,
      title: '2x1 en Pizzas Grandes',
      description: 'Todos los martes y jueves, lleva 2 pizzas grandes por el precio de 1',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      validUntil: '31 de Diciembre'
    },
    {
      id: 2,
      title: '20% de Descuento',
      description: 'En tu primera orden a través de nuestra página web',
      image: 'https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      validUntil: 'Siempre disponible'
    },
    {
      id: 3,
      title: 'Pizza + Refresco',
      description: 'Combo especial: pizza mediana + refresco grande por solo ₡6,500',
      image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      validUntil: '15 de Noviembre'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'María Rodríguez',
      text: 'La mejor pizza que he probado en San José. Los ingredientes son frescos y la masa tiene el punto perfecto de crujiente y suave.',
      rating: 5
    },
    {
      id: 2,
      name: 'Carlos Méndez',
      text: 'El servicio es excelente y las pizzas son deliciosas. Mi favorita es la Suprema, no tiene comparación con otras pizzerías.',
      rating: 5
    },
    {
      id: 3,
      name: 'Laura Jiménez',
      text: 'Siempre pido a domicilio y llega caliente y en tiempo récord. Las promociones son geniales y la calidad nunca decepciona.',
      rating: 4
    }
  ];

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className="star-icon" />);
    }
    return stars;
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Las Pizzas Más Bravas de la Ciudad</h1>
          <p>Pizzas artesanales al horno de leña con ingredientes frescos y de la mejor calidad</p>
          <Link to="/menu" className="cta-button">
            Ver Menú <FaArrowRight className="arrow-icon" />
          </Link>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="section promotions-section">
        <div className="container">
          <h2 className="section-title">Promociones Especiales</h2>
          <div className="promotions-grid">
            {promotions.map((promo) => (
              <div className="promo-card" key={promo.id}>
                <div className="promo-image">
                  <img src={promo.image} alt={promo.title} />
                  <div className="promo-badge">Oferta</div>
                </div>
                <div className="promo-content">
                  <h3>{promo.title}</h3>
                  <p>{promo.description}</p>
                  <p className="valid-until">Válido hasta: {promo.validUntil}</p>
                  <Link to="/menu" className="promo-button">Ordenar Ahora</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section featured-section">
        <div className="container">
          <h2 className="section-title">Nuestras Pizzas Destacadas</h2>
          <div className="featured-grid">
            {featuredPizzas.map((pizza) => (
              <div className="product-card" key={pizza.id}>
                <div className="product-image">
                  <img src={pizza.image} alt={pizza.name} />
                </div>
                <div className="product-info">
                  <h3>{pizza.name}</h3>
                  <p className="product-description">{pizza.description}</p>
                  <div className="product-price-row">
                    <span className="product-price">{pizza.price}</span>
                    <Link to="/menu" className="add-to-cart-btn">Ver Más</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-container">
            <Link to="/menu" className="view-all-button">Ver Todo el Menú</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-name">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Listo para probar la mejor pizza?</h2>
            <p>Ordena ahora y disfruta de nuestras deliciosas pizzas artesanales</p>
            <Link to="/menu" className="cta-button large">Ordenar Ahora</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;