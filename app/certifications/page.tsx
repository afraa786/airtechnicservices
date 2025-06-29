'use client';

import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle, Download, ExternalLink, Building, Users, Calendar, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const certifications = [
  {
    id: 1,
    company: "O'General",
    type: "Authorized Dealer & Service Partner",
    year: "2020-2024",
    description: "Certified for installation, maintenance, and service of O'General VRF systems, split ACs, and commercial HVAC solutions.",
    features: ["VRF Systems", "Split AC Units", "Commercial HVAC", "Warranty Support"],
    certificateImage: "O'General dealer certificate",
    logo: "O'General",
    status: "Active",
    color: "from-red-500 to-red-600"
  },
  {
    id: 2,
    company: "Zamil Air Conditioners",
    type: "Authorized Installation Partner",
    year: "2019-2024",
    description: "Certified partner for Zamil industrial and commercial air conditioning systems with specialized training in large-scale installations.",
    features: ["Industrial HVAC", "Commercial Systems", "Chiller Units", "Maintenance"],
    certificateImage: "/zamil-cert.jpeg",
    certificateLink: "/zamil-cert.pdf",
    logo: "Zamil",
    status: "Active",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 3,
    company: "Samsung HVAC",
    type: "Certified Service Provider",
    year: "2021-2024",
    description: "Authorized service provider for Samsung DVM (Digital Variable Multi) systems and commercial air conditioning solutions.",
    features: ["DVM Systems", "Multi-Split Units", "Smart Controls", "Energy Solutions"],
    certificateImage: "Samsung HVAC certification",
    logo: "Samsung",
    status: "Active",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    company: "Panasonic",
    type: "work",
    year: "2018-2024",
    description: "Certified dealer and installer for Panasonic VRF systems, split ACs, and commercial HVAC solutions with advanced technical training.",
    features: ["VRF Technology", "Eco Solutions", "Smart Systems", "Energy Efficiency"],
    certificateImage: "Panasonic dealer certificate",
    logo: "Panasonic",
    status: "Active",
    color: "from-green-500 to-green-600"
  }
];

const companyStats = [
  { number: "4", label: "Major Brand Partnerships" },
  { number: "10+", label: "Years of Certified Experience" },
  { number: "500+", label: "Certified Installations" },
  { number: "100%", label: "Warranty Compliance" }
];

const additionalCertifications = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management System Certification",
    issuer: "International Organization for Standardization",
    year: "2022"
  },
  {
    title: "HVAC Contractor License",
    description: "Mumbai Municipal Corporation Licensed Contractor",
    issuer: "BMC",
    year: "2014"
  },
  {
    title: "Electrical Contractor License",
    description: "Licensed Electrical Contractor for HVAC Systems",
    issuer: "Maharashtra State Electricity Board",
    year: "2015"
  },
  {
    title: "Safety Compliance Certificate",
    description: "Workplace Safety and Installation Standards",
    issuer: "Industrial Safety Department",
    year: "2023"
  }
];

export default function Certifications() {
  return (
    <div className="min-h-screen pt-24">
      {/* Certifications Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-800 text-white pt-0 pb-20 -mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Award size={40} className="text-navy" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gold">Certifications</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Authorized partnerships with leading HVAC manufacturers and certified compliance with industry standards
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="text-gold" size={16} />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-gold" size={16} />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-gold" size={16} />
                <span>Authorized Dealer Network</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="text-4xl font-bold text-navy mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Authorized <span className="text-gold">Brand Partners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are certified dealers and service providers for leading HVAC manufacturers worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-gold/50 transition-all"
              >
                <div className={`h-32 bg-gradient-to-r ${cert.color} flex items-center justify-center text-white relative overflow-hidden`}>
                  <div className="text-center z-10">
                    <Award size={40} className="mx-auto mb-2" />
                    <p className="text-sm font-medium">[{cert.logo}]</p>
                  </div>
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-2xl font-bold text-navy">
                      {cert.company}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600 font-medium">{cert.status}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-medium">
                      {cert.type}
                    </span>
                    <span className="ml-3 text-gray-500 text-sm flex items-center gap-1 mt-2">
                      <Calendar size={14} />
                      {cert.year}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-3">Certified Services:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {cert.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                    <div className="h-40 relative mb-4">
                      <Image
                        src={cert.certificateImage}
                        alt={`${cert.company} Certificate`}
                        fill
                        className="object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = '/certificates/cert-placeholder.jpg';
                        }}
                      />
                    </div>
                    {cert.certificateLink && (
                      <Link
                        href={cert.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy hover:text-gold transition-colors text-sm font-medium flex items-center justify-center gap-1"
                      >
                        <Download size={14} />
                        Download Certificate (PDF)
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Certification Benefits */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Why Our <span className="text-gold">Certifications</span> Matter
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our certifications ensure quality, reliability, and compliance with the highest industry standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Certified processes ensure consistent quality in every installation and service"
              },
              {
                icon: Users,
                title: "Expert Training",
                description: "Our technicians receive ongoing training from manufacturer experts"
              },
              {
                icon: Award,
                title: "Warranty Protection",
                description: "Full manufacturer warranties and extended service guarantees"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="text-navy" size={32} />
                </div>
                <h3 className="font-display text-xl font-bold mb-4 text-gold">
                  {benefit.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Additional Certifications */}
<section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-800 mb-6">
        Additional <span className="text-gold-500">Certifications</span>
      </h2>
      <div className="w-24 h-1.5 bg-gold-400 mx-auto mb-6 rounded-full"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        We are also accredited by government and global agencies for safety, electrical, and quality compliance
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {additionalCertifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold-100 group"
        >
          <div className="flex items-start mb-4">
            <div className="bg-gold-50 p-3 rounded-lg mr-4 group-hover:bg-gold-100 transition-colors">
              <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy-800 mb-2 group-hover:text-gold-600 transition-colors">{cert.title}</h3>
              <p className="text-gray-600 mb-3 leading-relaxed">{cert.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-navy-700 flex items-center">
                  <svg className="w-4 h-4 mr-1 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {cert.issuer}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-navy-700 flex items-center">
                  <svg className="w-4 h-4 mr-1 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {cert.year}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
{/* Trust the Certified Experts */}
<section className="py-20 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-4xl mx-auto text-center px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-800 mb-6">
        Trust the <span className="text-gold-500">Certified</span> Experts
      </h2>
      <div className="w-20 h-1.5 bg-gold-400 mx-auto mb-6 rounded-full"></div>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
        Work with Mumbai's most certified HVAC professionals for guaranteed quality and peace of mind
      </p>
          <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => (window.location.href = 'http://localhost:3000/contact')}
                 className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-colors"
               >
                 Contact Us Today
               </motion.button>
   
    </motion.div>
  </div>
</section>
    </div>
  );
}