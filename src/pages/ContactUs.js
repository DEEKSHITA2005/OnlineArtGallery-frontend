import React from 'react';
import '../styles/ContactUs.css'; // Ensure this file contains your CSS for the component

const ContactUs = () => {
  const backgroundImage = process.env.PUBLIC_URL + '/images/artwork1.jpg'; // Dynamic path for the image in the public folder

  return (
    <div 
      className="contact-us" 
      style={{ 
        backgroundImage: `url(${backgroundImage})` // Inline background image style
      }}
    >
      {/* Contact Info Section */}
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="info-box">
          <div className="info-item">
            <i className="fas fa-home"></i>
            <div>
              <h3>Address</h3>
              <p>4671 Sugar Camp Road, Owatonna, Minnesota, 55060</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>571-457-2321</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>ntamerrwael@mfono.ga</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form">
        <h2>Send Message</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Type your Message..." required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
