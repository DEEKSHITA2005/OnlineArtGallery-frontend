import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductPage.css';

const ProductPage = ({ onAddToCart }) => {
  const { id } = useParams(); // Get product id from URL
  const [isAddedToCart, setIsAddedToCart] = useState(false); // Track if the product is added to the cart
  const [selectedImage, setSelectedImage] = useState(''); // Track the selected main image

  // Define the path for images
  const imagePath = process.env.PUBLIC_URL + '/images/';

  // Simulated products data (replace with API calls if needed)
  const products = {
    1: {
      id: 1,
      image: `${imagePath}artwork1.jpg`,
      thumbnails: [`${imagePath}thumb1.webp`, `${imagePath}thumb2.jpg`, `${imagePath}thumb3.webp`],
      title: 'Wellness Planner - Take Care',
      price: 500.00,
      description: `
        This wellness planner helps you focus on yourself with a dedicated space to track health, goals, and more. 
        It comes with inspirational quotes and ample space for planning activities, habit tracking, goal setting, 
        and self-reflection. Each page has a unique design that motivates you to stay on track with your wellness journey.
        The cover features beautiful art by Melody Hansen, and the planner is designed with a durable hardcover and 
        a convenient 3-ring binder.
      `,
      artist: 'Melody Hansen',
    },
    2: {
      id: 2,
      image: `${imagePath}artwork2.jpg`, 
      thumbnails: [`${imagePath}thumb4.avif`, `${imagePath}thumb5.avif`, `${imagePath}thumb6.jpg`],
      title: 'Abstract Art - Color Play',
      price: 300.00,
      description: `
        This abstract art piece brings a modern, vibrant energy to any space. The bold colors and dynamic shapes evoke a sense of movement
        and creativity, making it a perfect addition to a contemporary setting. The cover art is by renowned abstract artist John Smith.
      `,
      artist: 'John Smith',
    },
    3: {
      id: 3,
      image: `${imagePath}artwork3.jpeg`, 
      thumbnails: [`${imagePath}thumb7.webp`, `${imagePath}thumb8.avif`, `${imagePath}thumb9.jpg`],
      title: 'Modern Sculptures',
      price: 150.00,
      description: `
        A captivating collection of modern sculptures that exemplify the harmony between traditional craftsmanship and contemporary design. 
        Featuring artwork from various global artists, this collection is a must-have for modern art enthusiasts.
      `,
      artist: 'Sarah Wilson',
    },
    4: {
      id: 4,
      image: `${imagePath}artwork4.jpg`,
      thumbnails: [`${imagePath}thumb1.webp`, `${imagePath}thumb2.jpg`, `${imagePath}thumb3.webp`],
      title: 'Wellness Planner - Take Care',
      price: 500.00,
      description: `
        This wellness planner helps you focus on yourself with a dedicated space to track health, goals, and more. 
        It comes with inspirational quotes and ample space for planning activities, habit tracking, goal setting, 
        and self-reflection. Each page has a unique design that motivates you to stay on track with your wellness journey.
        The cover features beautiful art by Melody Hansen, and the planner is designed with a durable hardcover and 
        a convenient 3-ring binder.
      `,
      artist: 'Melody Hansen',
    },
    5: {
      id: 5,
      image: `${imagePath}artwork5.jpg`,
      thumbnails: [`${imagePath}thumb1.webp`, `${imagePath}thumb2.jpg`, `${imagePath}thumb3.webp`],
      title: 'Wellness Planner - Take Care',
      price: 500.00,
      description: `
        This wellness planner helps you focus on yourself with a dedicated space to track health, goals, and more. 
        It comes with inspirational quotes and ample space for planning activities, habit tracking, goal setting, 
        and self-reflection. Each page has a unique design that motivates you to stay on track with your wellness journey.
        The cover features beautiful art by Melody Hansen, and the planner is designed with a durable hardcover and 
        a convenient 3-ring binder.
      `,
      artist: 'Melody Hansen',
    },
    6: {
      id: 6,
      image: `${imagePath}artwork6.jpg`, 
      thumbnails: [`${imagePath}thumb4.avif`, `${imagePath}thumb5.avif`, `${imagePath}thumb6.jpg`],
      title: 'Abstract Art - Color Play',
      price: 300.00,
      description: `
        This abstract art piece brings a modern, vibrant energy to any space. The bold colors and dynamic shapes evoke a sense of movement
        and creativity, making it a perfect addition to a contemporary setting. The cover art is by renowned abstract artist John Smith.
      `,
      artist: 'John Smith',
    },
    7: {
      id: 7,
      image: `${imagePath}artwork7.jpg`, 
      thumbnails: [`${imagePath}thumb7.webp`, `${imagePath}thumb8.avif`, `${imagePath}thumb9.jpg`],
      title: 'Modern Sculptures',
      price: 150.00,
      description: `
        A captivating collection of modern sculptures that exemplify the harmony between traditional craftsmanship and contemporary design. 
        Featuring artwork from various global artists, this collection is a must-have for modern art enthusiasts.
      `,
      artist: 'Sarah Wilson',
    },
    8: {
      id: 8,
      image: `${imagePath}artwork8.jpg`,
      thumbnails: [`${imagePath}thumb1.webp`, `${imagePath}thumb2.jpg`, `${imagePath}thumb3.webp`],
      title: 'Wellness Planner - Take Care',
      price: 500.00,
      description: `
        This wellness planner helps you focus on yourself with a dedicated space to track health, goals, and more. 
        It comes with inspirational quotes and ample space for planning activities, habit tracking, goal setting, 
        and self-reflection. Each page has a unique design that motivates you to stay on track with your wellness journey.
        The cover features beautiful art by Melody Hansen, and the planner is designed with a durable hardcover and 
        a convenient 3-ring binder.
      `,
      artist: 'Melody Hansen',
    },
  };

  // Fetch product data based on id from URL
  const product = products[id];

  if (!product) {
    return <div>Product not found</div>;
  }

  // Set initial selected image to the main product image
  if (!selectedImage) {
    setSelectedImage(product.image);
  }

  // Handle adding to cart
  const handleAddToCart = () => {
    onAddToCart(product); // Pass the product data to the parent component's add to cart handler
    setIsAddedToCart(true); // Update the state to reflect that the product has been added to the cart
  };

  return (
    <div className="product-page">
      <div className="product-page-container">
        {/* Image Section */}
        <div className="product-image-section">
          <div className="product-thumbnails">
            {product.thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumbnail ${index}`}
                className="product-thumbnail"
                onClick={() => setSelectedImage(thumb)} // Set the clicked thumbnail as the main image
              />
            ))}
          </div>
          <img src={selectedImage} alt={product.title} className="product-main-image" />
        </div>

        {/* Product Details Section */}
        <div className="product-details-section">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-bestseller">BESTSELLER!</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-interest-free">
            Interest-free installments available between $35.00 - $1000.00.
          </p>

          {/* Add to Cart Button */}
          <button
            className={`add-to-bag-button ${isAddedToCart ? 'added' : ''}`}
            onClick={handleAddToCart}
            disabled={isAddedToCart} // Disable the button if already added to cart
          >
            {isAddedToCart ? 'Already Added to Cart' : 'ADD TO BAG'}
          </button>

          {/* Product Description */}
          <p className="product-description">{product.description}</p>

          {/* Additional Product Details */}
          <div className="product-details">
            <h3>The Details</h3>
            <ul>
              <li>Dimensions: 8 in. x 6.5 in.</li>
              <li>Cover Art by {product.artist}</li>
              <li>Hardcover 3-ring binder</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
