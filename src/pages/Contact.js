import React from 'react';
import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [state, setState] = useState({ fname: '', email: '', message: '' });

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    alert(`Message sent!\nName: ${state.fname}\nEmail: ${state.email}`);
    setState({ fname: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="underline"></div>

      <div className="contact-form" id="contact-form">
        <label htmlFor="name">Full Name</label>
        <input
          name="fname"
          value={state.fname}
          placeholder="Enter full name..."
          type="text"
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={state.email}
          placeholder="Enter email..."
          type="email"
          onChange={handleChange}
        />

        <label htmlFor="message">Message</label>
        <textarea
          rows="6"
          placeholder="Enter message..."
          name="message"
          value={state.message}
          required
          onChange={handleChange}
        ></textarea>

        <button type="submit" onClick={handleSubmit}>Send Message</button>
      </div>

      <div className="contact-info">
        <p>Contact us: <a href="mailto:slaimankrayem@gmail.com">slaimankrayem@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Contact;
