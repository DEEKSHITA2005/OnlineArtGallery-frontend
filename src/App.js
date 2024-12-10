import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FormComponent from './pages/FormComponent';
import Blogs from './pages/Blogs';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';
import UploadArtwork from './components/UploadArtwork';
import VirtualTours from './pages/VirtualTours'; 
import Paintings from './pages/Paintings'; 
import Sculptures from './pages/Sculptures'; 
import Exhibitions from './pages/Exhibitions'; // Import Exhibitions page
import AboutUs from './pages/AboutUs'; // Import About Us page
import ContactUs from './pages/ContactUs';
import FeaturedArtworks from './pages/FeaturedArtworks';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [userRole, setUserRole] = useState(''); // Track user's role for access control
  const [userName, setUserName] = useState(''); // Track user's name
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state

  // Configure Axios base URL (adjust if needed)
  axios.defaults.baseURL = 'http://localhost:8080/api';

  // Fetch user role and name on component mount
  useEffect(() => {
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    if (email && token) {
      axios
        .get(`/users/role/${email}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log('Full response from server:', response); 
          if (response.data && response.data.role) {
            setUserRole(response.data.role); 
            setIsAuthenticated(true);
          } else {
            console.error('Invalid response from server:', response);
            setIsAuthenticated(false);
            localStorage.removeItem('token');
          }
        })
        .catch((error) => {
          console.error('Error fetching user role:', error);
          localStorage.removeItem('token');
          setUserRole('');
          setIsAuthenticated(false);
        });
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleAddToCart = (artwork) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === artwork.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === artwork.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...artwork, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('email'); 
    localStorage.removeItem('name'); 
    setUserRole(''); 
    setUserName(''); 
    setIsAuthenticated(false); 
    window.location.href = '/'; 
  };

  return (
    <Router>
      <Navbar
        onSearch={handleSearch}
        cartQuantity={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        userRole={userRole} 
        userName={userName} 
        isAuthenticated={isAuthenticated} 
        onLogout={handleLogout} 
      />

      <Routes>
        <Route
          path="/"
          element={<Home searchQuery={searchQuery} onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/paintings"
          element={<Paintings />}
        />
        <Route
          path="/sculptures"
          element={<Sculptures />}
        />
        <Route
          path="/exhibitions" 
          element={<Exhibitions />}
        />
        <Route
          path="/product/:id"
          element={<ProductPage onAddToCart={handleAddToCart} />}
        />
        <Route path="/login" element={<FormComponent formType="login" />} />
        <Route path="/signup" element={<FormComponent formType="signup" />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} />}
        />
        <Route
          path="/virtualtours"
          element={<VirtualTours />}
        />
        <Route
          path="/about-us" 
          element={<AboutUs />} // Added the route for About Us page
        />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/featured" element={<FeaturedArtworks />} />

        <Route
          element={<ProtectedRoute allowedRoles={['ROLE_ADMIN', 'ROLE_ARTIST']} isAuthenticated={isAuthenticated} />}
        >
          <Route path="/upload-artwork" element={<UploadArtwork />} />
        </Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
