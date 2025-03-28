'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_ta1217u',
        'template_f7sbu5o',
        {
          email: formData.email,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        'W4-P6wDlmYXDug-KG'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">
                    Alumni Of The Sacreds<br />
                    Sacred Heart English Medium H.S.S<br />
                    QRVW+X87, Moolamattom<br />
                    Kerala- 685 589, India
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">29013shemhs@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">
                    Tel: 04862 252001<br />
                    Mobile & WhatsApp: +91 94463 02001<br />
                    Mobile: +91 94477 12149<br />
                    Mobile: +91 96334 48855<br />

                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && (
                  <p className="text-green-600 text-center">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Map Section - 80% Width */}
        <div className="w-4/5 mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-6">Map and Driving Directions</h2>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=9.795105830109158,76.84582178927992&travelmode=driving"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full hover:opacity-95 transition-opacity"
          >
            <img
              src="/images/sh_google_map.png"
              alt="Sacred Heart School Location Map"
              className="w-full h-[800px] object-contain bg-gray-50 rounded-lg shadow-lg"
            />
          </a>
        </div>
      </main>
    </div>
  );
}