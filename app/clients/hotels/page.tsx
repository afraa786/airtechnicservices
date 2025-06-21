'use client';

import { motion } from 'framer-motion';
import { Building, MapPin, TrendingUp, Quote, Star, Calendar } from 'lucide-react';

const hotelProjects = [
  {
    id: 1,
    name: "Palladium Hotel",
    location: "Mumbai",
    service: "VRF System Installation",
    achievement: "30% Energy Savings",
    year: "2023",
    description: "Complete VRF system installation for luxury hotel with advanced climate control and energy management.",
    features: ["Variable Refrigerant Flow", "Zone Control", "Energy Monitoring", "24/7 Support"],
    image: "Before/after slider of chiller installation",
    rating: 5
  },
  {
    id: 2,
    name: "Sante Fe Hotel",
    location: "Navi Mumbai",
    service: "Ductwork Installation",
    achievement: "Zero Downtime During Installation",
    year: "2023",
    description: "Complete ductwork installation with precision timing to avoid disrupting hotel operations.",
    features: ["Precision Installation", "Time-lapse Monitoring", "Noise Control", "Guest Comfort Priority"],
    image: "Time-lapse video still of ductwork",
    rating: 5
  },
  {
    id: 3,
    name: "Grand Plaza Hotel",
    location: "Mumbai",
    service: "Central Air Conditioning",
    achievement: "40% Reduction in Maintenance",
    year: "2022",
    description: "Comprehensive central air conditioning system with preventive maintenance program.",
    features: ["Central Control", "Preventive Maintenance", "Emergency Support", "Cost Optimization"],
    image: "Hotel lobby HVAC system",
    rating: 5
  }
];

const testimonial = {
  text: "ATS's preventive maintenance program has been a game-changer for our operations. We've seen a 60% reduction in HVAC failures and our guests consistently praise the comfortable environment.",
  author: "Hotel Manager",
  hotel: "Palladium Hotel",
  rating: 5
};

const benefits = [
  {
    title: "Guest Comfort Priority",
    description: "Ensuring optimal temperature and air quality for superior guest experience"
  },
  {
    title: "Energy Efficiency",
    description: "Advanced systems that reduce operational costs while maintaining performance"
  },
  {
    title: "Minimal Disruption",
    description: "Installation and maintenance scheduled to avoid impact on hotel operations"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock emergency support to maintain uninterrupted service"
  }
];

export default function HotelsPage() {
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
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gold">Hotel</span> HVAC Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Creating exceptional guest experiences through superior climate control and energy-efficient systems
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="text-gold" size={16} />
                <span>5-Star Hotel Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-gold" size={16} />
                <span>30% Average Energy Savings</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="text-gold" size={16} />
                <span>Zero Downtime Installations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
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
              Featured <span className="text-gold">Hotel Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering excellence in hospitality through advanced HVAC solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {hotelProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-gold/50 transition-all"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <Building size={40} className="mx-auto mb-2" />
                    <p className="text-sm px-4">[{project.image}]</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-xl font-bold text-navy">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-gold fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin size={14} />
                    <span className="text-sm">{project.location}</span>
                    <span className="text-gray-400">•</span>
                    <Calendar size={14} />
                    <span className="text-sm">{project.year}</span>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-navy">{project.service}</span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        {project.achievement}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-navy">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-gold rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Quote size={48} className="text-gold mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 mb-8 leading-relaxed italic">
              "{testimonial.text}"
            </blockquote>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={20} className="text-gold fill-current" />
              ))}
            </div>
            <div className="text-center">
              <p className="font-semibold text-navy text-lg">{testimonial.author}</p>
              <p className="text-gray-600">{testimonial.hotel}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Hotels Choose <span className="text-gold">ATS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions designed for the unique demands of the hospitality industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-navy rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Elevate Your <span className="text-gold">Guest Experience</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Partner with ATS for HVAC solutions that enhance comfort, reduce costs, and exceed guest expectations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-colors"
            >
              Schedule Hotel Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}