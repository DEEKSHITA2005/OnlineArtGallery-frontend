import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaBars, FaShoppingCart } from 'react-icons/fa';
import '../styles/Navbar.css';
import SearchBar from './SearchBar';

const Navbar = ({ onSearch, cartQuantity }) => {
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState(null);  // State to store the user's name
  const dropdownRef = useRef(null);  // Ref to handle outside clicks for user dropdown

  // Function to check localStorage and update state
  const checkLocalStorage = () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const name = localStorage.getItem('name');

    console.log('Checking localStorage values:');
    console.log('Token:', token);
    console.log('Role:', role);
    console.log('Name:', name);

    if (token && role && name) {
      setUserRole(role);
      setUserName(name);  // Set the user's name
    } else {
      setUserRole(null);
      setUserName(null);
    }
  };

  // Check localStorage when the component mounts
  useEffect(() => {
    checkLocalStorage();
  }, []);

  const handleLogout = () => {
    localStorage.clear();  // Clear the stored data
    setUserRole(null);
    setUserName(null);
    window.location.reload();  // Reload the page to reset the state
  };

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">ArtGallery</Link>
        </div>

        <div className="navbar-center">
          <SearchBar onSearch={onSearch} />
        </div>

        <div className="navbar-icons">
          {/* Hamburger Icon and Dropdown */}
          <div className="hamburger-container">
            <FaBars className="hamburger-icon" aria-label="Toggle menu" role="button" />
            <div className="hamburger-dropdown">
              <Link to="/about-us">About Us</Link>
              <Link to="/contact-us">Contact Us</Link>
            </div>
          </div>

          <Link to="/cart">
            <div className="cart-icon-container">
              <FaShoppingCart className="cart-icon" aria-label="Cart" role="button" />
              {cartQuantity > 0 && <span className="cart-quantity">{cartQuantity}</span>}
            </div>
          </Link>

          {/* User Icon and Dropdown */}
          <div className="user-icon-container" ref={dropdownRef}>
            <FaUserCircle className="user-icon" aria-label="User menu" role="button" />
            <div className="user-dropdown">
              {userName ? (
                <>
                  <p>Hello, {userName}</p>
                  <Link to="/" onClick={handleLogout}>Logout</Link>
                </>
              ) : (
                <>
                  <Link to="/login">Log In</Link>
                  <Link to="/signup">Sign Up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="navbar-items">
        <Link to="/Paintings">Paintings</Link>
        <Link to="/sculptures">Sculptures</Link>
        {/* <Link to="/artists">Artists</Link> */}
        <Link to="/exhibitions">Exhibitions</Link>
        <Link to="/VirtualTours">Virtual Tours</Link>
        <Link to="/featured">Featured Art Works</Link>
        <Link to="/blogs">Blogs</Link>

        {(userRole === 'ROLE_ADMIN' || userRole === 'ROLE_ARTIST') && (
          <Link to="/upload-artwork">Add Arts</Link>
        )}
      </div>
    </React.Fragment>
  );
};

export default Navbar;
