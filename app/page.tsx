'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Users, Building, Award, Clock, Phone } from 'lucide-react';
import Link from 'next/link';
import PallidiumCarousel from './projects/PCarousel';
import IITPowaiCarousel from './projects/IITPowaiCarousel';
import TaibaMosqueCarousel from './projects/TaibaMosqueCarousel';



const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setHasAnimated(true);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [end, duration, hasAnimated]);

  return <span>{count}</span>;
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-navy/70">
          <div className="absolute inset-0 hero-pattern"></div>
        </div>

        {/* Workshop Background Placeholder */}
        <div className="absolute inset-0 bg-gray-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-gray-600 text-center">
              <Building size={120} className="mx-auto mb-4 opacity-20" />
              <p className="text-lg opacity-40">

              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gold">THE BEST</span><br />
              IN THE BUSINESS
            </h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Modern office, service center, and workshop in Mumbai – managing
              <span className="text-gold font-semibold"> end-to-end HVAC solutions </span>
              under one roof since 2014.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-colors flex items-center gap-2"
                >
                  View Our Projects
                  <ArrowRight size={20} />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-navy transition-colors flex items-center gap-2 justify-center"
              >
                <Phone size={20} />
                Get Free Quote
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
                <Users className="text-gold" size={32} />
              </div>
              <div className="text-4xl font-bold text-navy mb-2">
                <CountUp end={20} />+
              </div>
              <p className="text-gray-600 font-medium">Licensed Technicians</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
                <Building className="text-gold" size={32} />
              </div>
              <div className="text-4xl font-bold text-navy mb-2">
                <CountUp end={200} duration={3000} />+
              </div>
              <p className="text-gray-600 font-medium">Completed Projects</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
                <Clock className="text-gold" size={32} />
              </div>
              <div className="text-4xl font-bold text-navy mb-2">
                <CountUp end={2024 - 2014} />+
              </div>
              <p className="text-gray-600 font-medium">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-700 font-medium">
              <span className="text-navy font-bold">Mumbai & Navi Mumbai</span> |
              Serving Hotels, Hospitals, Malls, Holy Places & More
            </p>
          </motion.div>
        </div>
      </section>


      {/* Featured Projects Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
              Our <span className="text-gold">Signature</span> Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From luxury hotels to critical healthcare facilities, we deliver excellence across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Palladium Hotel",
                category: "VRF System Installation",
                achievement: "30% Energy Savings",
                image: "/projects/palladium.jpeg",
              },
              {
                title: "IIT Powai",
                category: "Campus HVAC Upgrade",
                achievement: "2 Weeks Ahead of Schedule",
                image: "Engineers with ductable splits"
              },
              {
                title: "Taiba Mosque",
                category: "Holy Place Ventilation",
                achievement: "40% Energy Reduction",
                image: "Mosque ventilation system"
              }
            ].map((project, index) => (
              <Link href="/projects" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                >
            <div className="h-48 relative overflow-hidden">
  {project.title === "Palladium Hotel" ? (
    <PallidiumCarousel />
  ) : project.title === "IIT Powai" ? (
    <IITPowaiCarousel />
  ) : project.title === "Taiba Mosque" ? (
    <TaibaMosqueCarousel />
  ) : (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
  )}
</div>

                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-navy mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{project.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-medium">
                        {project.achievement}
                      </span>
                      <ArrowRight
                        className="text-navy group-hover:translate-x-2 transition-transform"
                        size={20}
                      />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy/90 transition-colors"
              >
                View All Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>


      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
              Complete <span className="text-gold">HVAC</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design to maintenance, we handle every aspect of your HVAC needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building, title: "VRF Systems", desc: "Energy-efficient variable refrigerant flow installations" },
              { icon: Award, title: "Chiller Services", desc: "Industrial chiller installation and maintenance" },
              { icon: Users, title: "Preventive Care", desc: "Scheduled maintenance to prevent breakdowns" },
              { icon: Clock, title: "24/7 Support", desc: "Emergency repair services across Mumbai" }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl border-2 border-gray-100 hover:border-gold/50 transition-colors"
              >
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-navy" size={32} />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}