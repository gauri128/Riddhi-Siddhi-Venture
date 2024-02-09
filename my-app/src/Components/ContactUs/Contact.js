import React, { useState } from 'react';
import './Contact.css';

function ContactUs() {
  // state variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // send the form data to your backend or email service
    // you can use fetch, axios, emailjs or any other library
    // for simplicity, we will just log the data to the console
    console.log({ name, email, message });
    // reset the form inputs
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          If you have any questions, suggestions, or feedback, please fill out
          the form below and we will get back to you as soon as possible.
        </p>
        <ul>
          <li>
            <span>Address:</span> xyz, Nagpur(440024)
          </li>
          <li>
            <span>Phone:</span> 9767052589
          </li>
          <li>
            <span>Email:</span> xyz@gmail.com
          </li>
        </ul>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </div>
      <div className="contact-map">
        <h3>Our location:</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.220267212406!2d79.0881543149346!3d21.14663338587914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4a0f8c2d2a0a1%3A0x5b0f34dc4e7e81b8!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1634738578940!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        > </iframe>
      </div>
    </div>
  );
}

export default ContactUs;