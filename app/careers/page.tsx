'use client';

import { motion } from 'framer-motion';
import { Upload, Mail, Phone, User, Briefcase, FileText, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const jobOpenings = [
  {
    id: 1,
    title: "Installation Technician",
    type: "Full-time",
    location: "Mumbai",
    description: "Install, maintain, and repair HVAC systems for residential and commercial clients. Manufacturer certification training provided.",
    requirements: [
      "3+ years experience",
      "Technical diploma preferred",
      "Valid driver's license",
      "Physical fitness for installation work"
    ],
    benefits: [
      "Competitive salary + bonuses",
      "Ongoing training",
      "Tool allowance"
    ]
  },
  {
    id: 2,
    title: "Service Engineer",
    type: "Full-time",
    location: "Mumbai",
    description: "Diagnose and repair HVAC systems with a focus on VRF and commercial systems. Manufacturer certification required (training available).",
    requirements: [
      "2+ years service experience",
      "VRF system knowledge",
      "Electrical certification",
      "Problem-solving skills"
    ],
    benefits: [
      "Higher base salary",
      "Advanced training",
      "Performance bonuses",

    ]
  },
  {
    id: 3,
    title: "Sales Executive",
    type: "Full-time",
    location: "Mumbai Metropolitan Region",
    description: "Sell HVAC solutions to residential and commercial clients. Build relationships with contractors and architects.",
    requirements: [
      "Sales experience in HVAC/construction",
      "Technical product knowledge",
      "Strong communication skills",
      "Goal-oriented mindset"
    ],
    benefits: [
      "Lead generation support",
      "High earning potential",
      "Flexible schedule"
    ]
  }
];

const benefits = [
  {
    title: "Professional Growth",
    description: "Ongoing training and certification opportunities",
    icon: Briefcase
  },
  {
    title: "Competitive Compensation",
    description: "Salary plus bonuses and performance incentives",
    icon: FileText
  },
  {
    title: "Modern Equipment",
    description: "Work with the latest HVAC tools and technology",
    icon: User
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen pt-24">
      {/* Careers Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-800 text-white pt-0 pb-20 -mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase size={40} className="text-navy" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Come <span className="text-gold">Work With Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Join Mumbai's premier HVAC service team and grow your career with industry-leading training and support
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <User className="text-gold" size={16} />
                <span>Professional Development</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="text-gold" size={16} />
                <span>Competitive Benefits</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="text-gold" size={16} />
                <span>Modern Equipment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Openings */}
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
              Current <span className="text-gold">Job Openings</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore opportunities to join our growing team of HVAC professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-gold/50 transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-2xl font-bold text-navy">
                      {job.title}
                    </h3>
                    <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{job.location}</span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2">
                          <ArrowRight size={16} className="text-gold mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <ArrowRight size={16} className="text-gold mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href="#apply"
                    className="w-full bg-navy text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-navy/90 transition-colors"
                  >
                    Apply Now <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
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
              Why <span className="text-gold">Join Our Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in our team members' growth and provide opportunities for advancement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="text-navy" size={32} />
                </div>
                <h3 className="font-display text-xl font-bold mb-4 text-navy">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Apply <span className="text-gold">Now</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Submit your resume and we'll contact you about current opportunities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 text-navy"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold py-3"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold py-3"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold py-3"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    Position Applying For
                  </label>
                  <select
                    id="position"
                    name="position"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold py-3 pl-3 pr-10"
                  >
                    <option value="">Select a position</option>
                    {jobOpenings.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                    <option value="other">Other (Specify in Cover Letter)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Resume (PDF or DOC)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600 justify-center">
                      <label
                        htmlFor="resume-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-gold hover:text-gold/80 focus-within:outline-none"
                      >
                        <span>Upload a file</span>
                        <input id="resume-upload" name="resume" type="file" className="sr-only" accept=".pdf,.doc,.docx" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PDF, DOC, DOCX up to 5MB
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="cover-letter" className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Letter (Optional)
                </label>
                <textarea
                  id="cover-letter"
                  name="cover-letter"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold"
                  placeholder="Tell us why you'd be a great fit..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className="h-4 w-4 text-gold focus:ring-gold border-gray-300 rounded"
                  required
                />
                <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                  I consent to having my data collected and stored according to your Privacy Policy
                </label>
              </div>

              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gold text-navy py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-colors flex items-center justify-center gap-2"
                >
                  Submit Application <ArrowRight size={18} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50 text-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-2xl font-bold mb-6">
            Have questions about working with us?
          </h3>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-gold" />
              <span className="font-medium">careers@yourcompany.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-gold" />
              <span className="font-medium">+91 22 1234 5678</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}