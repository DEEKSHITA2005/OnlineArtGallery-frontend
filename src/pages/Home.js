import React from 'react';
import '../styles/Home.css';
import ArtworkCard from '../components/ArtworkCard';

// Define the correct image paths from the "public/images" folder
const imagePath = process.env.PUBLIC_URL + '/images/';

const Home = ({ searchQuery, onAddToCart }) => {
  const artworks = [
    { id: 1, image: `${imagePath}artwork1.jpg`, title: 'Sunset in Venice', price: 500, artist: 'John Doe' },
    { id: 2, image: `${imagePath}artwork2.jpg`, title: 'Abstract Thoughts', price: 300, artist: 'Jane Smith' },
    { id: 3, image: `${imagePath}artwork3.jpeg`, title: 'The Color Wheel', price: 150, artist: 'Bob Ross' },
    { id: 4, image: `${imagePath}artwork4.jpg`, title: 'Sunset in Venice', price: 500, artist: 'John Doe' },
    { id: 5, image: `${imagePath}artwork5.jpg`, title: 'Sunset in Venice', price: 500, artist: 'John Doe' },
    { id: 6, image: `${imagePath}artwork6.jpg`, title: 'Abstract Thoughts', price: 300, artist: 'Jane Smith' },
    { id: 7, image: `${imagePath}artwork7.jpg`, title: 'The Color Wheel', price: 150, artist: 'Bob Ross' },
    { id: 8, image: `${imagePath}artwork8.jpg`, title: 'Sunset in Venice', price: 500, artist: 'John Doe' },
    // Add more artworks as needed
  ];

  // Filter artworks based on search query
  const filteredArtworks = artworks.filter(artwork =>
    artwork.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <h2 className="home-title">Discover Unique Artworks</h2>
      <div className="artwork-grid">
        {filteredArtworks.map(artwork => (
          <ArtworkCard
            key={artwork.id}
            id={artwork.id}
            image={artwork.image}
            title={artwork.title}
            price={artwork.price}
            artist={artwork.artist}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
