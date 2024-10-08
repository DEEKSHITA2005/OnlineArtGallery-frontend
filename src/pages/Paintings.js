import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Paintings.css'; // Create the CSS file for styling

const imagePath = process.env.PUBLIC_URL + '/images/';

const paintings = [
  { id: 1, title: 'Sunset in Venice', image: `${imagePath}artwork1.jpg`, price: 500, artist: 'John Doe' },
  { id: 2, title: 'Abstract Thoughts', image: `${imagePath}artwork2.jpg`, price: 300, artist: 'Jane Smith' },
  { id: 3, title: 'The Color Wheel', image: `${imagePath}artwork3.jpeg`, price: 150, artist: 'Bob Ross' },
  { id: 4, title: 'Nature’s Dream', image: `${imagePath}artwork4.jpg`, price: 450, artist: 'Alice Green' },
  // Add more paintings as needed
];

const Paintings = () => {
  return (
    <div className="paintings-container">
      <h2 className="page-title">Explore Our Paintings</h2>
      <div className="paintings-grid">
        {paintings.map((painting) => (
          <div key={painting.id} className="painting-card">
            <Link to={`/product/${painting.id}`}>
              <img src={painting.image} alt={painting.title} className="painting-image" />
              <div className="painting-info">
                <h3>{painting.title}</h3>
                <p>By {painting.artist}</p>
                <p>${painting.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paintings;
