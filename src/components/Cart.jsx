import { FaShoppingCart, FaTimes, FaPlus, FaMinus, FaTrash, FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    isCartOpen,
    toggleCart
  } = useCart();

  const handleWhatsAppOrder = () => {
    const phoneNumber = '50686322460';
    let message = '¡Hola! Me gustaría hacer el siguiente pedido:\n\n';
    
    cartItems.forEach(item => {
      message += `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\nTotal: $${getCartTotal().toFixed(2)}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`cart-container ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-overlay" onClick={toggleCart}></div>
      <div className="cart-panel">
        <div className="cart-header">
          <h2>
            <FaShoppingCart /> Carrito de Compras
          </h2>
          <button className="close-cart" onClick={toggleCart}>
            <FaTimes />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <FaShoppingCart />
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="cart-actions">
              <button className="clear-cart" onClick={clearCart}>
                Vaciar Carrito
              </button>
              <button className="checkout-btn" onClick={handleWhatsAppOrder}>
                <FaWhatsapp /> Hacer Pedido
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;