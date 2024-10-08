import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css'; // Ensure appropriate styles are available

const Cart = ({ cartItems }) => {
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-page-container">
      <div className="cart-items-section">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td className="cart-product-info">
                    <Link to={`/product/${item.id}`}>
                      <img src={item.image} alt={item.title} className="cart-item-image" />
                    </Link>
                    <div className="cart-item-details">
                      <Link to={`/product/${item.id}`}>
                        <h3>{item.title}</h3>
                      </Link>
                      <p>By {item.artist}</p>
                    </div>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="cart-totals-section">
        <h2>Cart totals</h2>
        <div className="cart-summary">
          <div className="cart-summary-row">
            <span>Subtotal</span>
            <span>${calculateSubtotal()}</span>
          </div>
          <div className="cart-summary-row">
            <span>Shipping</span>
            <span>Free shipping</span>
          </div>
          <div className="cart-summary-row">
            <span>Total</span>
            <span>${calculateSubtotal()}</span>
          </div>
          <button className="checkout-button">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
