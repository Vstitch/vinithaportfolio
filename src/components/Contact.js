import React, { useState } from 'react';
import { Mail, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:vinitharameshchand@gmail.com?subject=${encodeURIComponent(
      `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section id="contact" className="contact">
      <img
        src={process.env.PUBLIC_URL + '/assest/stitchcall.png'}
        alt="decorative"
        className="contact-side-image"
        loading="lazy"
      />
      <div className="section-container">
        <div className="section-header">
          <h2>Contact</h2>
          <div className="header-line"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <p>
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <a href="mailto:vinitharameshchand@gmail.com" className="email-link">
              <Mail size={20} />
              <span>vinitharameshchand@gmail.com</span>
            </a>
            <a
              href="https://wa.me/917845411355"
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              <Send size={18} />
              <span>{submitted ? 'Message Sent!' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
