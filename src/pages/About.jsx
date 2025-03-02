import React from 'react';
import '../styles/About.css';
import { FaHeart, FaStar, FaHandshake, FaLeaf } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>Nuestra Historia</h1>
          <p>Descubre la pasión detrás de cada pizza que creamos</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-intro-section">
        <div className="container">
          <h2>Bienvenidos a Pizza Brava</h2>
          <p>
            En Pizza Brava, no solo hacemos pizzas; creamos experiencias memorables 
            que unen a las personas alrededor de la mejor comida italiana. Nuestra 
            pasión por la autenticidad y la calidad nos impulsa a seleccionar los 
            mejores ingredientes y a mantener vivas las tradiciones de la verdadera 
            pizza artesanal.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-box">
              <h3>Nuestra Misión</h3>
              <p>
                Crear las mejores pizzas artesanales, combinando tradición italiana 
                con innovación culinaria, para brindar a nuestros clientes una 
                experiencia gastronómica única y memorable.
              </p>
            </div>
            <div className="vision-box">
              <h3>Nuestra Visión</h3>
              <p>
                Ser reconocidos como la pizzería artesanal líder en innovación y 
                calidad, expandiendo nuestra presencia mientras mantenemos la 
                esencia y autenticidad que nos caracteriza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaHeart className="value-icon" />
              <h3>Pasión</h3>
              <p>Amamos lo que hacemos y eso se refleja en cada pizza que preparamos.</p>
            </div>
            <div className="value-card">
              <FaStar className="value-icon" />
              <h3>Calidad</h3>
              <p>Utilizamos los mejores ingredientes para crear productos excepcionales.</p>
            </div>
            <div className="value-card">
              <FaHandshake className="value-icon" />
              <h3>Compromiso</h3>
              <p>Nos dedicamos a superar las expectativas de nuestros clientes.</p>
            </div>
            <div className="value-card">
              <FaLeaf className="value-icon" />
              <h3>Sostenibilidad</h3>
              <p>Trabajamos con responsabilidad hacia el medio ambiente y nuestra comunidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <div className="history-content">
            <h2>Nuestra Historia</h2>
            <div className="history-text">
              <p>
                Todo comenzó en 2015, cuando nuestro fundador decidió traer el 
                auténtico sabor de la pizza italiana a nuestra ciudad. Después de 
                años de aprendizaje en Nápoles, regresó con una misión clara: crear 
                las mejores pizzas artesanales con el toque único que hoy nos caracteriza.
              </p>
              <p>
                Lo que comenzó como un pequeño local con un horno de leña, se ha 
                convertido en uno de los destinos favoritos para los amantes de la 
                pizza auténtica. Cada día nos esforzamos por mantener viva esa pasión 
                y tradición que nos dio origen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Nuestro Equipo</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/src/assets/images/team/chef1.jpg" alt="Chef Principal" />
              </div>
              <h3>Carlos Rodríguez</h3>
              <p>Chef Principal</p>
              <p>Maestro pizzero con más de 15 años de experiencia</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/src/assets/images/team/chef2.jpg" alt="Sous Chef" />
              </div>
              <h3>María González</h3>
              <p>Sous Chef</p>
              <p>Especialista en masas y fermentación natural</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/src/assets/images/team/manager.jpg" alt="Gerente" />
              </div>
              <h3>Ana Martínez</h3>
              <p>Gerente</p>
              <p>Experta en atención al cliente y gestión de calidad</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;