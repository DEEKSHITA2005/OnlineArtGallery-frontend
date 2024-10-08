import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ArtworkCard.css';

const ArtworkCard = ({ id, image, title, price, artist, onAddToCart }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`); // Redirect to the product page
  };

  return (
    <div className="artwork-card" onClick={handleCardClick}>
      {/* Image and details */}
      <div className="image-box">
        <img src={image} alt={title} className="artwork-image" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>By {artist}</p>
        <p>${price}</p>
      </div>
      {/* Add to Cart button - prevent navigation when clicked */}
      <button 
        className="cart-button" 
        onClick={(e) => {
          e.stopPropagation(); // Prevent navigation when clicking "Add to Cart"
          onAddToCart({ id, image, title, price, artist });
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ArtworkCard;
