'use client';

import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle, Download, ExternalLink, Building, Users, Calendar, Star } from 'lucide-react';

const certifications = [
  {
    id: 1,
    company: "O General",
    type: "Authorized Dealer & Service Partner",
    year: "2020-2024",
    description: "Certified for installation, maintenance, and service of O General VRF systems, split ACs, and commercial HVAC solutions.",
    features: ["VRF Systems", "Split AC Units", "Commercial HVAC", "Warranty Support"],
    certificateImage: "O General dealer certificate",
    logo: "O General logo",
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
    certificateImage: "Zamil partnership certificate",
    logo: "Zamil logo",
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
    logo: "Samsung logo",
    status: "Active",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    company: "Panasonic",
    type: "Authorized Dealer & Installer",
    year: "2018-2024",
    description: "Certified dealer and installer for Panasonic VRF systems, split ACs, and commercial HVAC solutions with advanced technical training.",
    features: ["VRF Technology", "Eco Solutions", "Smart Systems", "Energy Efficiency"],
    certificateImage: "Panasonic dealer certificate",
    logo: "Panasonic logo",
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
  title: "ISO 9001:2015 - Quality Management System",
  description: "Certified for establishing and maintaining a robust Quality Management System in the field of HVAC and Electrical Contracting, including supply, installation, and AMC of HVAC and electrical equipment.",
  issuer: "Magnitude Management Services Pvt. Ltd.",
  certificationBody: "ISO (International Organization for Standardization)",
  certificateNumber: "22FQIC90",
  issuedDate: "2022-11-02",
  expiryDate: "2025-11-01"
},
{
  title: "Client Recommendation Letter",
  description: "Endorsed by Goregaon Sports Club for being a prominent and reliable HVAC vendor. The certificate acknowledges that services provided by Air Technic Services were excellent and satisfactory, and the client had no hesitation in recommending them for future projects.",
  issuer: "Goregaon Sports Club, Mumbai",
  year: "2016"
},
  {
    title: "Electrical Contractor License",
    description: "Licensed Electrical Contractor for HVAC Systems",
    issuer: "Maharashtra State Electricity Board",
    year: "2015"
  },
  {
  title: "Work Completion Certificate",
  description: "Certification of successful completion of system installation and adherence to all safety and performance standards.",
  issuer: "Indian Institute of Technology (Bombay)",
  year: "2023"
}

];

export default function Certifications() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                {/* Certificate Header */}
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

                  {/* Certificate Document Placeholder */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <div className="text-gray-500 mb-2">
                      <Download size={24} className="mx-auto mb-2" />
                      <p className="text-sm">[{cert.certificateImage}]</p>
                    </div>
                    <button className="text-navy hover:text-gold transition-colors text-sm font-medium flex items-center gap-1 mx-auto">
                      <ExternalLink size={14} />
                      View Certificate
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Industry <span className="text-gold">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compliance with international standards and local regulatory requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100 hover:border-gold/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="text-gold" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-navy mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{cert.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Issued by: {cert.issuer}</span>
                      <span className="bg-gold/20 text-gold px-2 py-1 rounded-full font-medium">
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

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Trust the <span className="text-gold">Certified</span> Experts
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Work with Mumbai's most certified HVAC professionals for guaranteed quality and peace of mind
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-colors"
            >
              Get Certified Installation Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}