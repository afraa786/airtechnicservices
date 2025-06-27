import Link from 'next/link';
import { Phone, Mail, MapPin, Award, Users, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/ats-logo.png"  // Make sure this path is correct and image is in your public folder
                  alt="ATS Logo"
                />
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold">Air Technic Services</h3>
                <p className="text-gold text-sm">The Best in the Business</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Modern office, service center, and workshop in Mumbai – managing end-to-end HVAC solutions
              under one roof since 2014. Dedicated to the highest quality customer service with warmth,
              friendliness, and company spirit.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-navy-800 px-3 py-1 rounded-lg">
                <Award size={16} className="text-gold" />
                <span className="text-sm">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2 bg-navy-800 px-3 py-1 rounded-lg">
                <Users size={16} className="text-gold" />
                <span className="text-sm">20+ Technicians</span>
              </div>
              <div className="flex items-center gap-2 bg-navy-800 px-3 py-1 rounded-lg">
                <Clock size={16} className="text-gold" />
                <span className="text-sm">Since 2014</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/projects', label: 'Top 10 Projects' },
                { href: '/about', label: 'Our Expertise' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/certifications', label: 'Certifications' },
                { href: '/careers', label: 'Careers' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-gold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    NASHEMAN CHS LTD, SHOP NO 8,<br />
                    BLDG NO 17, AMRUT NAGAR,<br />
                    NEAR AJIT GLASS FACTORY,<br />
                    JOGESHWARI (WEST)<br />
                    MUMBAI – 400 102
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="text-gold" />
                <span className="text-gray-300">+91 9136283995</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} className="text-gold" />
                <span className="text-gray-300">airtechnicservice@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="border-t border-navy-800 pt-8 mt-12">
          <h3 className="font-display text-lg font-semibold mb-6 text-center text-gold">
            Trusted Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="bg-white/10 px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">Zamil</span>
            </div>
            <div className="bg-white/10 px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">Panasonic</span>
            </div>
            <div className="bg-white/10 px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">O'General</span>
            </div>
          </div>
        </div>
      </div>

      

      {/* Bottom Bar */}
      <div className="border-t border-navy-800 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Air Technic Services. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Pan India | Licensed & Insured
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
