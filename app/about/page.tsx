'use client';

import { motion } from 'framer-motion';
import { Shield, Smile, Trophy, Users, Award, Clock, CheckCircle, Target, Eye, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Quality",
      description: "Uncompromising standards in every installation and service",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Smile,
      title: "Customer Satisfaction",
      description: "Your comfort and satisfaction drive everything we do",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Trophy,
      title: "Leadership",
      description: "Setting industry benchmarks with innovative solutions",
      color: "from-gold to-yellow-600"
    },
    {
      icon: Users,
      title: "Team Excellence",
      description: "Licensed professionals committed to continuous improvement",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      title: "Certified Standards",
      description: "ISO 9001:2015 certified processes and quality assurance",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "On-time delivery and 24/7 emergency support",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const teamStats = [
    { number: "20+", label: "Licensed Technicians" },
    { number: "10+", label: "Years Experience" },
    { number: "1000+", label: "Happy Clients" },
    { number: "99%", label: "Project Success Rate" }
  ];

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
              Our <span className="text-gold">Expertise</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              A decade of excellence in HVAC solutions with unwavering commitment to quality and innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values - Hexagonal Grid */}
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
              Our <span className="text-gold">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                    <value.icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy mb-4 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="h-64 rounded-xl overflow-hidden">
                  <img src="/projects/team/chiller-repair.jpeg" alt="Technicians repairing chiller" className="w-full h-full object-cover" />
                </div>
                <div className="h-48 rounded-xl overflow-hidden">
                  <img src="/projects/team/workshop.jpeg" alt="Workshop interior" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-48 rounded-xl overflow-hidden">
                  <img src="/projects/team/workbench.jpeg" alt="Team at workbench" className="w-full h-full object-cover" />
                </div>
                <div className="h-64 rounded-xl overflow-hidden">
                  <img src="/projects/team/group-photo.jpeg" alt="Group photo at Jogeshwari workshop" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            <div className="space-y-4">
              {["Licensed and certified technicians", "Continuous training and skill development", "Safety-first approach to all installations", "Quality assurance at every step"].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-navy" />
                  </div>
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={40} className="text-navy" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-6 text-gold">Our Mission</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                To deliver world-class HVAC solutions that exceed client expectations through innovation, reliability, and exceptional service quality.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} viewport={{ once: true }} className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye size={40} className="text-navy" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-6 text-gold">Our Vision</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                To be Mumbai's most trusted HVAC partner, recognized for transforming spaces through innovative climate solutions.
              </p>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} viewport={{ once: true }} className="text-center mt-16 pt-16 border-t border-navy-700">
            <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={40} className="text-navy" />
            </div>
            <h3 className="font-display text-3xl font-bold mb-6 text-gold">Our Commitment</h3>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              "Dedicated to the highest quality customer service with warmth, friendliness, and company spirit."
            </p>
            <p className="text-lg text-gray-300 mt-4 italic">
              This commitment drives every interaction, every installation, and every service call we make.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Experience the <span className="text-gold">ATS Difference</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who trust us with their HVAC needs.
            </p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-colors">
              Start Your Project Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}