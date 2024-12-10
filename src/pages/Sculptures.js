import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sculptures.css'; // Import CSS file for Sculptures page

const Sculptures = () => {
  // Simulated sculpture data
  const sculptures = [
    { id: 1, image: '/images/sculpture1.png', title: 'The Thinker', artist: 'Auguste Rodin', price: 2000 },
    { id: 2, image: '/images/sculpture2.jpg', title: 'David', artist: 'Michelangelo', price: 2500 },
    { id: 3, image: '/images/sculpture3.avif', title: 'Venus de Milo', artist: 'Alexandros of Antioch', price: 1800 },
    { id: 4, image: '/images/sculpture4.avif', title: 'Discobolus', artist: 'Myron', price: 2200 }
  ];

  return (
    <div className="sculptures-container">
      <h2 className="page-title">Explore Our Sculptures</h2>
      <div className="sculptures-grid">
        {sculptures.map((sculpture) => (
          <Link to={`/product/${sculpture.id}`} key={sculpture.id} className="sculpture-card">
            <img src={sculpture.image} alt={sculpture.title} className="sculpture-image" />
            <div className="sculpture-info">
              <h3>{sculpture.title}</h3>
              <p>By {sculpture.artist}</p>
              <p>${sculpture.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sculptures;
