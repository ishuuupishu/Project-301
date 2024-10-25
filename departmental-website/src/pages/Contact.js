// src/pages/Contact.js
import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div>
          <h4>Our Main Office</h4>
          <p>Soho 94 Broadway St New York, NY 1001</p>
        </div>
        <div>
          <h4>Phone Number</h4>
          <p>234-9876-5400</p>
        </div>
        <div>
          <h4>Fax</h4>
          <p>1-234-567-8900</p>
        </div>
        <div>
          <h4>Email</h4>
          <p>hello@theme.com</p>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Enter your Name" />
        <input type="email" placeholder="Enter a valid email address" />
        <textarea placeholder="Enter your message"></textarea>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
