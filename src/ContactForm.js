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
    <section id="contact" className="col-md-6">
      <div className="p-4 bg-white shadow rounded h-100" style={{ backgroundColor: "#f8f9fa" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Your Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-semibold">Message</label>
            <textarea
              className="form-control"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              required
            ></textarea>
          </div>
          <div className="d-grid">
              <button type="submit" className="btn btn-info text-white fw-semibold py-2">Send Message</button>
          </div>
        </form>
        {status && <p>{status}</p>}
          
      </div>      
    </section>
  );
};

export default ContactForm;
