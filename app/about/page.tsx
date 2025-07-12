'use client';

import { motion } from 'framer-motion';
import { Shield, Smile, Trophy, Users, Award, Clock, CheckCircle, Target, Eye, Heart, Star } from 'lucide-react';
import Link from 'next/link';
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
      color: "from-yellow-500 to-yellow-600"
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
    { number: "15+", label: "Licensed Technicians" },
    { number: "20+", label: "Years Experience" },
    { number: "200+", label: "Happy Clients" },
    { number: "99%", label: "Project Success Rate" }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 to-navy-700 text-white pt-32 pb-28 -mt-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:100px_100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-gold">Expertise</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              A decade of excellence in HVAC solutions with unwavering commitment to quality and innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
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
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-gold/50 transition-all duration-300 h-full flex flex-col items-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
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

      {/* Founder Section */}
      <div className="border-t border-navy-800 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/grid-pattern-light.svg')] bg-[length:100px_100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Founder Picture & Info */}
            <div className="lg:w-1/3 flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gold rounded-xl opacity-20 group-hover:opacity-30 transition-all duration-300 blur"></div>
                <img
                  src="/founder.jpeg"
                  alt="Founder"
                  className="relative rounded-lg shadow-2xl w-full max-w-md mx-auto border-4 border-white"
                />
              </div>
              <div className="mt-6 text-center">
                <h4 className="text-gold font-semibold text-2xl">Ilyas Ahmed Shaikh</h4>
                <p className="text-gray-400 mt-2">
                  Visionary leader with 20+ years of HVAC experience
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <div className="bg-navy-800 px-4 py-2 rounded-lg">
                    <p className="text-gold font-bold text-lg">20+</p>
                    <p className="text-gray-400 text-sm">Years Experience</p>
                  </div>
                  <div className="bg-navy-800 px-4 py-2 rounded-lg">
                    <p className="text-gold font-bold text-lg">200+</p>
                    <p className="text-gray-400 text-sm">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Message */}
            <div className="lg:w-2/3">
              <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-navy-700">
                <h3 className="font-display text-2xl font-semibold mb-6 text-gold">
                  From the Founder's Desk
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    We initiated our journey in 2014 by establishing a company that is specialized and highly professional in the installation & maintenance of air conditioning systems.
                  </p>
                  <p className="leading-relaxed">
                    Our business ideology is based on four strong pillars: trust, reliability, superior quality, and optimum pricing. These are not just words — they are principles we have embodied in every project, big or small.
                  </p>
                  <p className="leading-relaxed">
                    From the very beginning, we understood that customer satisfaction would be our greatest asset. That's why we've built our processes around the philosophy that exceptional service must come first.
                  </p>
                  <p className="leading-relaxed">
                    With a dedicated team of 20+ skilled HVAC professionals, we've successfully delivered results across residential, commercial, and industrial spaces — adapting to the ever-evolving needs of the market.
                  </p>
                  <p className="leading-relaxed">
                    At AIR TECHNIC SERVICES, we have gone beyond traditional service models by introducing a proactive maintenance system. Our modern digital approach ensures accurate record-keeping, efficient upkeep, and fewer breakdowns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
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
              Our <span className="text-gold">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skilled professionals dedicated to your comfort and satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="h-64 rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-[1.02]">
                  <img 
                    src="/projects/team/chiller-repair.jpeg" 
                    alt="Technicians repairing chiller" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="h-48 rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-[1.02]">
                  <img 
                    src="/projects/team/workshop.jpeg" 
                    alt="Workshop interior" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="h-48 rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-[1.02]">
                  <img 
                    src="/projects/team/workbench.jpeg" 
                    alt="Team at workbench" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="h-64 rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-[1.02]">
                  <img 
                    src="/projects/team/group-photo.jpeg" 
                    alt="Group photo at Jogeshwari workshop" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="font-display text-2xl font-bold text-navy mb-6">
                  Why Choose Our Team
                </h3>
                <ul className="space-y-5">
                  {[
                    "Licensed and certified technicians",
                    "Continuous training and skill development",
                    "Safety-first approach to all installations",
                    "Quality assurance at every step",
                    "Industry-compliant Processes ",
                    "Multi-sector Expertise",
                    "Pan-India Reach "
                  ].map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {teamStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white p-4 rounded-lg shadow-md border border-gray-100 text-center"
                  >
                    <p className="text-3xl font-bold text-gold mb-1">{stat.number}</p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern-light.svg')] bg-[length:100px_100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gold">Purpose</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The guiding principles that shape our company's direction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-navy-700"
            >
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={40} className="text-navy" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-6 text-gold text-center">Our Mission</h3>
              <p className="text-lg text-gray-200 leading-relaxed text-center">
                To deliver world-class HVAC solutions that exceed client expectations through innovation, reliability, and exceptional service quality.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-navy-700"
            >
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye size={40} className="text-navy" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-6 text-gold text-center">Our Vision</h3>
              <p className="text-lg text-gray-200 leading-relaxed text-center">
                To be Mumbai's most trusted HVAC partner, recognized for transforming spaces through innovative climate solutions.
              </p>
            </motion.div>
          </div>

          {/* Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-12 border border-navy-700 mt-16"
          >
            <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={40} className="text-navy" />
            </div>
            <h3 className="font-display text-3xl font-bold mb-6 text-gold text-center">Our Commitment</h3>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed text-center">
              "Dedicated to the highest quality customer service with warmth, friendliness, and company spirit."
            </p>
            <p className="text-lg text-gray-300 mt-6 italic text-center max-w-3xl mx-auto">
              This commitment drives every interaction, every installation, and every service call we make.
            </p>
          </motion.div>

          
        </div>
      </section>

 {/* CTA Section */}
<section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto text-center px-4">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white p-12 rounded-2xl border border-gray-200 shadow-xl"
    >
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-navy">
        Experience the <span className="text-gold">ATS Difference</span>
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Join hundreds of satisfied clients who trust us with their HVAC needs.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
  <motion.button 
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(210, 170, 80, 0.4)"
  }} 
  whileTap={{ scale: 0.95 }} 
  onClick={() => window.location.href = '/contact'}
  className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-all duration-300 shadow-md"
>
  Start Your Project Today
</motion.button>

   
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
};
