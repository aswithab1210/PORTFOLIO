import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('All fields are required.');
      return;
    }

    // Modify the Formspree URL if necessary
    const response = await fetch('https://formspree.io/f/xanookzk', {  // Replace this with your correct Form ID
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });


    if (response.ok) {
      setStatus('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="container my-5">
      <h2 className="text-info">Contact Me</h2>
      <p>If you'd like to work with me, feel free to get in touch!</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-info text-black">Send Message</button>
      </form>
      {status && <p>{status}</p>}
    </section>
  );
};

export default ContactForm;
