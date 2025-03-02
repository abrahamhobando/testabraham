import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPizzaSlice, FaIceCream, FaGlassWhiskey, FaPercentage } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import '../styles/Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  // Sample menu data - in a real app, this would come from an API
  const menuItems = [
    {
      id: 1,
      name: 'Pizza Margherita',
      description: 'Tomate, mozzarella, albahaca fresca y aceite de oliva',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'pizzas'
    },
    {
      id: 2,
      name: 'Pizza Pepperoni',
      description: 'Tomate, mozzarella, pepperoni y orégano',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'pizzas'
    },
    {
      id: 3,
      name: 'Pizza Vegetariana',
      description: 'Tomate, mozzarella, pimientos, cebolla, champiñones y aceitunas',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1604917877934-07d8d248d396?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'pizzas'
    },
    {
      id: 4,
      name: 'Pizza Hawaiana',
      description: 'Tomate, mozzarella, jamón y piña',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'pizzas'
    },
    {
      id: 5,
      name: 'Pizza 4 Quesos',
      description: 'Tomate, mozzarella, gorgonzola, parmesano y queso de cabra',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'pizzas'
    },
    {
      id: 6,
      name: 'Combo Familiar',
      description: 'Pizza grande, 4 bebidas y postre para compartir',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'promociones'
    },
    {
      id: 7,
      name: '2x1 Martes',
      description: 'Compra una pizza y llévate otra gratis todos los martes',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'promociones'
    },
    {
      id: 8,
      name: 'Coca-Cola',
      description: 'Refresco de cola (330ml)',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'bebidas'
    },
    {
      id: 9,
      name: 'Agua Mineral',
      description: 'Agua mineral natural (500ml)',
      price: 1.50,
      image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'bebidas'
    },
    {
      id: 10,
      name: 'Tiramisú',
      description: 'Postre italiano tradicional con café y mascarpone',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'postres'
    },
    {
      id: 11,
      name: 'Helado Artesanal',
      description: 'Helado cremoso de vainilla con salsa de chocolate',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'postres'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos', icon: null },
    { id: 'pizzas', name: 'Pizzas', icon: <FaPizzaSlice /> },
    { id: 'promociones', name: 'Promociones', icon: <FaPercentage /> },
    { id: 'bebidas', name: 'Bebidas', icon: <FaGlassWhiskey /> },
    { id: 'postres', name: 'Postres', icon: <FaIceCream /> }
  ];

  useEffect(() => {
    // Simulate loading data from an API
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(menuItems);
    } else {
      setFilteredProducts(menuItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container" style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Nuestro Menú
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Descubre nuestras deliciosas pizzas artesanales hechas en horno de leña
            </motion.p>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Menu Section */}
      <section className="section menu-section">
        <div className="container">
          {/* Category Filters */}
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.icon && <span className="category-icon">{category.icon}</span>}
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Cargando menú...</p>
            </div>
          ) : (
            <motion.div 
              className="products-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProducts.map((product) => (
                <motion.div 
                  className="product-card" 
                  key={product.id}
                  variants={itemVariants}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-price-row">
                      <span className="product-price">${product.price.toFixed(2)}</span>
                      <button 
                        className="add-to-cart-btn"
                        onClick={() => addToCart(product)}
                      >
                        Añadir
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;