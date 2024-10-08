import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/FeaturedArtworks.css';

const featuredArtworks = [
  {
    id: 1,
    image: '/images/artwork1.jpg',
    title: 'Sunset Over the City',
    artist: 'John Doe',
    price: '$500',
  },
  {
    id: 2,
    image: '/images/artwork2.jpg',
    title: 'Abstract Reality',
    artist: 'Jane Smith',
    price: '$300',
  },
  {
    id: 3,
    image: '/images/artwork3.jpeg',
    title: 'The Color Explosion',
    artist: 'Bob Ross',
    price: '$450',
  },
  {
    id: 4,
    image: '/images/artwork4.jpg',
    title: 'Modern Sculpture',
    artist: 'Sarah Wilson',
    price: '$700',
  },
  // Add more featured artworks as needed
];

const FeaturedArtworks = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  // Handle artwork click, redirecting to product page
  const handleArtworkClick = (id) => {
    navigate(`/product/${id}`); // Redirect to the product page with the artwork id
  };

  return (
    <div className="featured-artworks-container">
      <h1 className="page-title">Featured Artworks</h1>
      <div className="artworks-grid">
        {featuredArtworks.map((artwork) => (
          <div 
            key={artwork.id} 
            className="artwork-card" 
            onClick={() => handleArtworkClick(artwork.id)} // Navigate when the card is clicked
          >
            <img
              src={artwork.image}
              alt={artwork.title}
              className="artwork-image"
            />
            <div className="artwork-info">
              <h3>{artwork.title}</h3>
              <p>By {artwork.artist}</p>
              <p>{artwork.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArtworks;
