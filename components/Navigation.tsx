'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/certifications', label: 'Certifications' },
    { href: '/careers', label: 'Careers' },
  ];

  return (
    <>
      {/* Top Bar - Hidden on mobile to save space */}
      <div className="hidden sm:block bg-navy text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91 XXXX-XXXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>info@airtechnicservices.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Mumbai & Navi Mumbai | Since 2014</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <img 
                  src="/ats-logo.png" 
                  alt="ATS Air Technic Services Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-gold rounded-lg flex items-center justify-center">
                        <span class="text-navy font-bold text-lg">ATS</span>
                      </div> `;
                  }}
                />
              </div>
         <div className="block text-center sm:text-left min-w-0">

                <h3 className="font-display text-xl font-bold">Air Technic Services</h3>
                <p className="text-gold text-xs">The Best in the Business</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-navy transition-colors duration-200 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-navy text-white px-6 py-2 rounded-lg font-medium hover:bg-navy/90 transition-colors"
              >
                Get Quote
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-navy" />
              ) : (
                <Menu size={24} className="text-navy" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white shadow-lg overflow-hidden"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-3 text-gray-700 hover:text-navy hover:bg-gray-50 rounded-md font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-2 bg-navy text-white px-3 py-3 rounded-md font-medium"
                >
                  Get Quote
                </motion.button>
                
                {/* Mobile contact info */}
                <div className="pt-3 border-t mt-3">
                  <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700">
                    <Phone size={16} />
                    <span>+91 XXXX-XXXXXX</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700">
                    <Mail size={16} />
                    <span>info@airtechnicservices.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;