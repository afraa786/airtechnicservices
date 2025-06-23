'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, MapPin, Calendar, TrendingUp, Filter } from 'lucide-react';
import ProjectCarousel from "./ProjectCarousel";
import { yearsToDays } from 'date-fns';
import CacCarousel from "./CacCarousel";
import TaibaMosqueCarousel from "./TaibaMosqueCarousel";
import IITPowaiCarousel from './IITPowaiCarousel';
import BBluntCarousel from './bblunt';
import PCarousel from './PCarousel';
import SIESCarousel from './sies';
import OasisCarousel from './oasis';
import ShethCarousel from './sheth';
import GoregoanCarousel from './goregoan';
import CinepolisCarousel from './cinepolis';


const projects = [
  {
    id: 1,
    title: "Palladium Hotel",
    category: "Hotels",
    location: "Mumbai",
    year: "2023",
    service: "VRF System Installation",
    achievement: "30% Energy Savings",
    description: "Complete VRF system installation for luxury hotel with advanced climate control.",
    image: "/projects/pallidium.jpeg", // ✅ Correct
    tags: ["VRF", "Energy Efficient", "Luxury"]
  },
  {
    id: 2,
    title: "IIT Powai",
    category: "Educational",
    location: "Powai, Mumbai",
    year: "2023",
    service: "Campus HVAC Upgrade",
    achievement: "Delivered 2 Weeks Early",
    description: "Campus-wide HVAC system upgrade with ductable split installations.",
    image: "Engineers inspecting ductable splits",
    tags: ["Ductable Splits", "Large Scale", "Educational"]
  },
  {
    id: 3,
    title: "Air India",
    category: "Flight Operations",
    location: "Mumbai",
    year: "2022",
    service: "Chiller Installation Job",
    achievement: "40% Energy Reduction",
    description: "High-performance chiller system installation ensuring efficient cooling and energy optimization for large-scale facilities.",
    image: "/airindia.jpeg",
    tags: ["Ventilation", "energy optimization", "Energy Saving"]
  },
  {
    id: 4,
    title: "Sante Fe Hotel",
    category: "Hotels",
    location: "Navi Mumbai",
    year: "2023",
    service: "Ductwork Installation",
    achievement: "Zero Downtime",
    description: "Complete ductwork installation with time-lapse monitoring.",
    image: "Time-lapse ductwork installation",
    tags: ["Ductwork", "Hotel", "Precision"]
  },
  {
    id: 5,
    title: "Dr. Mahajan Hospital",
    category: "Hospitals",
    location: "Navi Mumbai",
    year: "2022",
    service: "Critical Care HVAC",
    achievement: "99.9% Uptime",
    description: "Critical healthcare HVAC system with redundancy and precision control.",
    image: "Hospital HVAC control room",
    tags: ["Healthcare", "Critical", "Redundancy"]
  },
  {
    id: 6,
    title: "Phoenix Mall",
    category: "Malls",
    location: "Mumbai",
    year: "2023",
    service: "Central Air Conditioning",
    achievement: "25% Cost Reduction",
    description: "Large-scale central air conditioning system for shopping complex.",
    image: "Mall central AC installation",
    tags: ["Retail", "Central AC", "Large Scale"]
  },
  {
    id: 7,
    title: "Shidhewar Temple",
    category: "Holy Places",
    location: "Mumbai",
    year: "2022",
    service: "Thermal Management",
    achievement: "Improved Air Quality",
    description: "Advanced thermal management system with thermal imaging verification.",
    image: "Thermal imaging of temple airflow",
    tags: ["Thermal", "Religious", "Air Quality"]
  },
  {
    id: 8,
    title: "Goregaon Sports Complex",
    category: "Sports",
    location: "Mumbai",
    year: "2023",
    service: "Sports Facility HVAC",
    achievement: "Optimal Climate Control",
    description: "Specialized HVAC system for sports facilities with humidity control.",
    image: "Sports facility HVAC system",
    tags: ["Sports", "Humidity Control", "Specialized"]
  },
  {
    id: 9,
    title: "B'blunt",
    category: "Salons",
    location: "Mumbai",
    year: "2023",
    service: "Multi-location HVAC",
    achievement: "Standardized Comfort",
    description: "Consistent HVAC solutions across multiple salon locations.",
    image: "Salon HVAC installation",
    tags: ["Multi-location", "Retail", "Comfort"]
  },
  {
    id: 10,
    title: "Yuva Dr. Sheth Clinic",
    category: "Clinics",
    location: "Mumbai",
    year: "2021",
    service: "Medical Grade HVAC",
    achievement: "Hospital Standards",
    description: "Medical-grade HVAC system meeting healthcare facility standards.",
    image: "Medical clinic HVAC system",
    tags: ["Medical", "Standards", "Healthcare"]
  },
  {
    id: 11,
    title: "CAC Air Conditioning",
    category: "Offices",
    location: "Navi Mumbai",
    years: "2018",
    service: "VRF, Chiller Controls and Chiller Installation",
    achievement: "Integrated Controls Delivered Precision Cooling & Reduced Downtime",
    description: "Complete HVAC solution for office spaces with VRF and chiller systems.",
    image: "CAC Air Conditioning Office",
    tags: ["VRF", "Chiller", "Energy Efficient"]
  },
  {
    id: 12,
    title: "Taiba Mosque",
    category: "Holy Places",
    location: "Mumbai",
    year: "2022",
    service: "AC Installation",
    achievement: "Centralised Air Conditioning",
    description: "Centralised air conditioning system for religious place with thermal imaging verification.",
    image: "Thermal imaging of temple airflow",
    tags: ["AC", "Religious", "Air Quality"]
  },
  {
    id: 14,
    title: "SIES College",
    category: "Educational",
    location: "Navi Mumbai",
    year: "2020",
    service: "Ducting, Kitchen Ventilation, and Chiller Installation",
    achievement: "Ventilation System for Kitchen",
    description: "Complete HVAC solution for educational institution with ducting and kitchen ventilation.",
    image: "/projects/sies.jpeg", // ✅ Correct
    tags: ["VRF", "Energy Efficient", "Luxury"]
  },
    {
    id: 15,
    title: "The Great Oasis",
    category: "Commercial",
    location: "Mumbai",
    year: "2019",
    service: "Comprehensive Air Conditioning Installation",
    achievement: "From Design to Cool Air – Hassle-Free",
    description: "Complete air conditioning installation for commercial space with energy-efficient systems.",
    image: "/projects/oasis.jpeg", // ✅ Correct
    tags: ["VRF", "Energy Efficient", "Luxury"]
  },
    {
    id: 16,
    title: "Cinepolis",
    category: "Malls",
    location: "Mumbai",
    year: "2020",
  service: "Cinepolis HVAC System Installation",
  achievement: "Silent Airflow, Zero Disruptions",
  description: "Engineered and installed a customized HVAC system for Cinepolis, ensuring silent air distribution with time-lapse monitored ducting work suited for cinema acoustics.",
  image: "Cinepolis HVAC installation time-lapse",
  tags: ["Cinepolis", "Cinema HVAC", "Acoustic Ducting", "Precision"]
},
];

const categories = ["All", "Hotels", "Hospitals", "Holy Places", "Malls", "Educational", "Sports", "Salons", "Clinics", "Offices", "Flight Operations", "Commercial"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      {/* Header - Modified to remove top white space */}
      <section className="bg-gradient-to-br from-navy to-navy-800 text-white pt-0 pb-20 -mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gold">Top 15</span> Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Showcasing excellence across diverse sectors with innovative HVAC solutions
            </p>
          </motion.div>
        </div>
      </section>


      {/* Filter Bar */}
      <section className="bg-white py-6 border-b">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-3">
            <Filter className="text-navy" size={20} />
            <span className="font-semibold text-navy">Filter by Category:</span>
          </div>

          {/* Mobile dropdown for small screens */}

          <div className="md:hidden mb-2">
            <select
              onChange={(e) => handleCategoryChange(e.target.value)}
              value={selectedCategory}
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-navy focus:ring-2 focus:ring-navy/50"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>


          {/* Horizontal scroll for medium screens, full flex for large screens */}
          <div className="hidden md:block">
            <div className="flex flex-wrap gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 md:px-6 md:py-2 rounded-full font-medium transition-all text-sm md:text-base whitespace-nowrap ${selectedCategory === category
                      ? 'bg-navy text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                >
                  {/* Project Image Carousel or Placeholder */}
                  <div className="h-56 relative overflow-hidden">
                    {project.id === 3 ? (
                      <div className="w-full h-full">
                        <ProjectCarousel />
                      </div>
                    ) : project.id === 11 ? (
                      <div className="w-full h-full">
                        <CacCarousel />
                      </div>
                    ) : project.id === 12 ? (
                      <div className="w-full h-full">
                        <TaibaMosqueCarousel />
                      </div>
                         ) : project.id === 2 ? (
                      <div className="w-full h-full">
                        <IITPowaiCarousel />
                      </div>
                           ) : project.id === 9 ? (
                      <div className="w-full h-full">
                        <BBluntCarousel />
                      </div>
                           ) : project.id === 1 ? (
                      <div className="w-full h-full">
                        <PCarousel />
                      </div>
                           ) : project.id === 14 ? (
                      <div className="w-full h-full">
                        <SIESCarousel />
                      </div>
                          ) : project.id === 15 ? (
                      <div className="w-full h-full">
                        <OasisCarousel />
                      </div>
                          ) : project.id === 10 ? (
                      <div className="w-full h-full">
                        <ShethCarousel />
                      </div>
                             ) : project.id === 8 ? (
                      <div className="w-full h-full">
                        <GoregoanCarousel />
                      </div>
                               ) : project.id === 16 ? (
                      <div className="w-full h-full">
                        <CinepolisCarousel />
                      </div>
                    ) : project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 relative">
                        <div className="text-center z-10">
                          <Building size={40} className="mx-auto mb-2" />
                          <p className="text-sm px-4">{project.image}</p>
                        </div>
                        <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/20 transition-colors"></div>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Calendar size={14} />
                        {project.year}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-navy mb-2">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <MapPin size={14} />
                      <span className="text-sm">{project.location}</span>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-navy">
                        {project.service}
                      </span>
                      <div className="flex items-center gap-1 text-green-600">
                        <TrendingUp size={14} />
                        <span className="text-sm font-medium">{project.achievement}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Building size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our satisfied clients with premium HVAC solutions tailored to your needs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-colors"
            >
              Get Your Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}