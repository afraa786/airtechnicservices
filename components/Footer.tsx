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
              <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-navy font-bold text-xl">ATS</span>
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
                { href: '/clients/hotels', label: 'Hotel Clients' },
                { href: '/clients/hospitals', label: 'Hospital Clients' },
                { href: '/contact', label: 'Contact Us' },
                 { href: '/certifications', label: 'Certifications' },
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
                    NR AJIT GLASS FACTORY,<br />
                    JOGESHWARI (WEST)<br />
                    MUMBAI – 400 102
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-gold" />
                <span className="text-gray-300">+91 XXXX-XXXXXX</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-gold" />
                <span className="text-gray-300">info@airtechnicservices.com</span>
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
              <span className="text-white font-semibold">General</span>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
   <div className="border-t border-navy-800 bg-navy-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
      {/* Founder Message */}
     <div className="md:w-2/3 text-left">
  <h3 className="font-display text-xl font-semibold mb-4 text-gold">
    From the Founder’s Desk
  </h3>
  <p className="text-gray-300 text-lg mb-2">
    We initiated our journey in 2014 by establishing a company that is specialized and highly professional in the installation & maintenance of air conditioning systems.
  </p>
  <p className="text-gray-400 text-sm mb-2">
    Our business ideology is based on four strong pillars: trust, reliability, superior quality, and optimum pricing. These are not just words — they are principles we have embodied in every project, big or small.
  </p>
  <p className="text-gray-400 text-sm mb-2">
    From the very beginning, we understood that customer satisfaction would be our greatest asset. That’s why we’ve built our processes around the philosophy that exceptional service must come first.
  </p>
  <p className="text-gray-400 text-sm mb-2">
    With a dedicated team of 20+ skilled HVAC professionals, we’ve successfully delivered results across residential, commercial, and industrial spaces — adapting to the ever-evolving needs of the market.
  </p>
  <p className="text-gray-400 text-sm mb-2">
    At AIR TECHNIC SERVICES, we have gone beyond traditional service models by introducing a proactive maintenance system. Our modern digital approach ensures accurate record-keeping, efficient upkeep, and fewer breakdowns.
  </p>
  <p className="text-gray-400 text-sm mb-2">
    We do not believe in short-term fixes or reactive repairs. Instead, our goal is to extend the life of every HVAC system we service — saving our clients both time and money in the long run.
  </p>
  <p className="text-gray-400 text-sm mb-2">
    Over the years, we have gained the respect of our industry peers and the unwavering trust of our clients — thanks to our consistent delivery, punctuality, and ethical business conduct.
  </p>
  <p className="text-gray-400 text-sm mb-2">
    With our operations headquartered in Mumbai, we are strategically positioned to serve key regions while being deeply rooted in our community.
  </p>
  <p className="text-gray-400 text-sm">
    As we look ahead, our vision remains clear: to be a benchmark in HVAC excellence, driven by innovation, responsibility, and an unshakeable commitment to quality.
  </p>
</div>


      {/* Founder Picture & Info */}
      <div className="md:w-1/3 text-center">
        <img
        src="/founder.jpeg" // replace with actual image
          alt="Founder"
          className="rounded-lg shadow-lg mx-auto mb-4"
        />
        <h4 className="text-gold font-semibold text-lg">Ilyas Ahmed Shaikh</h4>
        <p className="text-gray-400 text-sm">
          Visionary leader with 10+ years in HVAC industry
        </p>
      </div>
    </div>
  </div>
</div>


      {/* Bottom Bar */}
      <div className="border-t border-navy-800 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Air Technic Services. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Mumbai & Navi Mumbai | Licensed & Insured
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;