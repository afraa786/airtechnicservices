'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Award } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        alert(`Failed to send email: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Something went wrong. Please try again later.');
    }
  };
  

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'VRF System Installation',
    'Central Air Conditioning',
    'Chiller Services',
    'Preventive Maintenance',
    'Emergency Repair',
    'System Upgrade',
    'Other'
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
 {/* Contact Hero Section */}
<section className="bg-gradient-to-br from-navy to-navy-800 text-white pt-0 pb-20 -mt-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
        Get In <span className="text-gold">Touch</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
        Ready to experience the best HVAC solutions in Mumbai? Let's discuss your project.
      </p>
    </motion.div>
  </div>
</section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Form + Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl font-bold text-navy mb-6">
              Request a <span className="text-gold">Free Quote</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our experts will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gold text-navy py-4 px-6 rounded-lg font-bold text-lg hover:bg-gold/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Get Free Quote
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy mb-3">
                    Visit Our Workshop
                  </h3>
                  <address className="text-gray-600 not-italic leading-relaxed">
                    NASHEMAN CHS LTD, SHOP NO 8,<br />
                    BLDG NO 17, AMRUT NAGAR,<br />
                    NR AJIT GLASS FACTORY,<br />
                    JOGESHWARI (WEST)<br />
                    MUMBAI – 400 102
                  </address>
                </div>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Call Us</h3>
                    <p className="text-gray-600">+91 9820418015</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Email Us</h3>
                    <p className="text-gray-600">info@airtechnicservices.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-gold" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-navy mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Emergency Only</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm font-medium">🚨 24/7 Services Available</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-navy p-8 rounded-xl text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="text-navy" size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-gold">
                  Certified & Licensed
                </h3>
                <div className="space-y-2 text-gray-200">
                  <p>✓ ISO 9001:2015 Certified</p>
                  <p>✓ Licensed HVAC Contractors</p>
                  <p>✓ Insured & Bonded</p>
                  <p>✓ 10+ Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="font-display text-3xl font-bold text-navy text-center mb-8">
            Find Us in Mumbai
          </h2>

          <div className="bg-gray-200 rounded-xl p-4">
            <div className="text-center mb-4 text-gray-600">
              <MapPin size={48} className="mx-auto mb-2" />
              <p className="text-lg font-medium">Google Maps Integration</p>
              <p className="text-sm">Interactive map showing workshop location</p>
              <p className="text-sm mt-2">Street view of NASHEMAN CHS LTD building entrance</p>
            </div>

            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                title="NASHEMAN CHS LTD"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!4v1750490698343!6m8!1m7!1sjrJ7lpaQA-TCmM6f7YObtw!2m2!1d19.14554422087981!2d72.84763495567314!3f292.1368412292298!4f-2.199918703658156!5f2.29996862695299https://www.google.com/maps/embed?pb=!4v1750490828347!6m8!1m7!1sjrJ7lpaQA-TCmM6f7YObtw!2m2!1d19.14554422087981!2d72.84763495567314!3f291.71534714856364!4f-4.4342255873014125!5f0.7820865974627469"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
