// src/components/ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <div id="contact" className="py-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <textarea className="w-full p-2 border border-gray-300 rounded" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
