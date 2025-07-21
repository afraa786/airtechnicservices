'use client';

import { motion } from 'framer-motion';
import { Hammer, Settings, Zap, Droplets, Fan, HardHat, Wrench, CircuitBoard, Wind, Cpu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Head from "next/head"

// Image carousel component
const ServiceImageCarousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-64 lg:h-full overflow-hidden rounded-l-xl">
            {images.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    alt={`Service Image ${index + 1}`}
                    fill
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}
        </div>
    );
};

const services = [
    {
        id: 1,
        title: "HVAC System Design & Installation",
        description: "Custom-engineered HVAC systems tailored for energy efficiency and indoor comfort across commercial and industrial buildings.",
        icon: Settings,
        images: [
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/grp.jpg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/hvac1.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/hvac3.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/hvac4.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/hvac5.jpeg",
        ],
        features: [
            "Energy-efficient HVAC layouts",
            "Customized ducted & ductless systems",
            "Certified system installation",
            "Post-installation performance check"
        ],
        process: [
            "Comprehensive load analysis and site inspection",
            "System type recommendation tailored to client needs",
            "Certified technician-led installation",
            "End-to-end commissioning with air balancing",
            "Handover with client walk-through and documentation"
        ]
    },
    {
        id: 2,
        title: "VRF Systems Installation",
        description: "Expert installation and commissioning of Chiller and Variable Refrigerant Flow systems for advanced climate control solutions.",
        icon: Droplets,
        images: [
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chiller1.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/vrf1.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/vrf2.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chiller4.jpeg",
        ],
        features: [
            "Installation of both indoor and outdoor units",
            "Proper refrigerant piping and smart control integration",
            "Thorough system testing and commissioning",
            "Installation by manufacturer-certified HVAC technicians"
        ],
        process: [
            "We begin with a detailed site survey",
            "Our engineers design a customized VRF system configuration",
            "We install the outdoor units with proper vibration isolation",
            "Indoor units are strategically placed for balanced air distribution",
        ]
    },
{
  id: 3,
  title: "Chilled Water Pipelining",
  description: "We design and install chilled water piping networks that enhance HVAC system efficiency in large-scale facilities. Our solutions are built for performance and long-term operation.",
  icon: Wrench,
  images: [
    "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chilledwater1.jpg",
    "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chilledwater2.jpg",
    "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chilledwater3.jpg",
    "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chilledwater4.jpg",
    "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chillwater1.jpeg",
    "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chillwater2.jpeg",
    "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chillwater3.jpeg",
  ],
  features: [
    "Professionally insulated piping",
    "Pressure-tested sealed systems",
    "Balanced chilled water flow",
    "High-grade welded connections"
  ],
  process: [
    "Piping layout with minimal pressure loss",
    "Installation of supply and return lines",
    "Thermal insulation for condensation control",
    "Hydrostatic testing of pipelines"
  ]
},
    {
        id: 4,
        title: "Chiller Installation",
        description: "Our chiller installation services are ideal for large-scale cooling needs in commercial and industrial environments. We deliver end-to-end solutions using robust equipment and proven methods.",
        icon: Zap,
        images: [
           "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/a1422441-a47e-4c9a-9fa4-8d046f56bfce.jpg",
           "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/b261195d-de5b-4ad5-b4da-7ccd9215affc.jpg",
           "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/b67de50f-d22c-4dda-82e4-79530fe23e0d.jpg",
           "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chill.jpg",
           "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/pill.jpg",
           "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/28aba70f-5d51-466e-baec-c8fb67a3d3f2.jpg",
           "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chillpill.jpg"
        ],
        features: [
            "Air-cooled and water-cooled chiller support",
            "Integration with piping and pump systems",
            "Full load testing and balancing",
            "Energy-efficient installation strategy"
        ],
        process: [
            "Evaluate cooling load and space availability",
            "Select appropriate chiller type and capacity",
            "Install with proper foundation and isolation",
            "Connect piping network with insulation",
        ]
    },
    {
        id: 5,
        title: "Ducting Systems",
        description: "Our ductwork systems are custom-designed to ensure efficient airflow, minimal noise, and fire safety compliance. We use high-grade materials and design tools to deliver quality and reliability.",
        icon: HardHat,
        images: [
           "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ducting.jpg",
           "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ducting1.jpg",
           "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ducting2.jpg",
           "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ducting3.jpg"
        ],
        features: [
            "Galvanized or flexible duct options",
            "CFD-based airflow optimization",
            "Noise and vibration dampening",
            "Fire and smoke damper integration"
        ],
        process: [
            "CFD analysis for airflow and sizing",
            "Custom duct fabrication in workshop",
            "Sealed and supported on-site setup",
            "Fire protection system coordination",
            "Airflow testing and final balancing"
        ]
    },
    {
        id: 6,
        title: "Ventilation Solutions",
        description: "We provide advanced ventilation systems that support healthy indoor air quality. Our systems are energy-efficient, customizable, and seamlessly integrated with building automation.",
        icon: CircuitBoard,
        images: [
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ventilation.jpg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/vent4.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/vent3.jpeg"
        ],
        features: [
            "Energy/heat recovery ventilators",
            "Air exhaust & purification systems",
            "Indoor air quality monitoring",
            "Smart CO₂ level control options"
        ],
        process: [
            "Indoor air quality evaluation",
            "Balanced system design with ERV/HRV",
            "Professional installation & duct link-up",
            "Automation and purifier integration"
        ]
    },
    {
  id: 7,
  title: "AHU Installation",
  description: "We specialize in Air Handling Unit (AHU) installations for commercial spaces, ensuring reliable air circulation and filtration. Our units are designed to support energy-efficient and scalable operations.",
  icon: Wind, // You can replace this with any other suitable icon if desired
  images: [
   "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ahu1.jpg",
   "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ahu2.jpg",
   "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ahu3.jpg",
   "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ahu4.jpg",
   "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ahu5.jpg"
  ],
  features: [
    "Custom-configured AHUs",
    "Vibration and noise dampening",
    "Clean filtration systems"
  ],
  process: [
    "System load analysis and AHU selection",
    "Structural evaluation and unit placement",
    "Mounting with vibration isolation",
    "Duct and electrical connectivity"
  ]
},

{
  id: 8,
  title: "Electrical Panel Revamping",
  description: "We upgrade and modernize electrical control panels used in HVAC systems. Our services improve safety, enhance energy tracking, and ensure smooth performance.",
  icon: Cpu,
  images: [
    "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chiller1.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/vrf1.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/vrf2.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chiller4.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/electricalpanel1.jpg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/electricalpanel2.jpg"

  ],
  features: [
    "Upgrade of outdated electrical components",
    "Wiring enhancement and relabeling",
    "Safety system installation",
    "Energy monitoring device integration"
  ],
  process: [
    "Comprehensive system assessment",
    "Revamping plan with minimal downtime",
    "Component replacement with modern equivalents",
    "Wiring upgrades and clear labeling"
  ]
}


];

const benefits = [
    {
        title: "20+ Certified HVAC Technicians",
        description: "Skilled and regularly trained experts certified by top HVAC system manufacturers for design, installation, and repair.",
        icon: Hammer
    },
    {
        title: "Quality Assurance with Warranty",
        description: "All installations and services are backed by ISO 9001:2015-certified processes and comprehensive warranties.",
        icon: Settings
    },
    {
        title: "24/7 Emergency Response",
        description: "Our dedicated teams are on standby to ensure uninterrupted climate control for your facility.",
        icon: Zap
    }
];

export default function Services() {

    return (
        <>
           <Head>
  <title>Professional HVAC Services Across India | Certified Experts </title>
  <meta name="description" content="Get expert HVAC services for residential, commercial & industrial spaces. From installation to maintenance, we offer 24/7 support across India" />
  <meta name="keywords" content="HVAC services  , AirTechnicServices  VRF, Chilled Water Pipelining, Chiller Installation, Ducting Systems, Ventilation Solutions, AHU Installation, Electrical Panel Revamping, Air Technic Services" />
  <meta name="author" content="Air Technic Services" />

  {/* Open Graph */}
  <meta property="og:title" content="Professional HVAC Services Across India | Certified Experts " />
  <meta property="og:description" content="Get expert HVAC services for residential, commercial & industrial spaces. From installation to maintenance, we offer 24/7 support across India" />
  <meta property="og:image" content="/ats-logo.png" />
  <meta property="og:url" content="https://airtechnicservices.com/services" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Air Technic Services" />
  <meta name="twitter:description" content="Expert HVAC solutions — installation, maintenance, repair across India." />
  <meta name="twitter:image" content="/ats-logo.png" />

  <link rel="canonical" href="https://airtechnicservices.com/" />
  <link rel="icon" href="/ats-logo.png" />

  {/* JSON-LD Schema for HVAC Business */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Air Technic Services",
        url: "https://airtechnicservices.com",
        logo: "https://airtechnicservices.com/ats-logo.png",
        sameAs: [
          "https://www.instagram.com/airtechnicservices/",
          "https://www.linkedin.com/company/airtechnicservices/"
        ],
        description: "Air Technic Services delivers expert HVAC installations, VRF systems, and industrial ducting solutions across India.",
        foundingDate: "2020",
        founder: { "@type": "Person", name: "Ilyas Shaikh" },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9136283995",
          contactType: "Customer Service",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: " NASHEMAN CHS LTD, SHOP NO 8,BLDG NO 17, AMRUT NAGAR,NEAR AJIT GLASS FACTORY, JOGESHWARI (WEST) MUMBAI 400 102",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400102",
          addressCountry: "IN",
        },
      }),
    }}
  />
</Head>
        <div className="min-h-screen pt-24">
            {/* Services Hero Section */}
            <section className="bg-gradient-to-br from-navy to-navy-800 text-white pt-0 pb-20 -mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                            <Settings size={40} className="text-navy" />
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                            Our <span className="text-gold">HVAC Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
                            From installation to maintenance and emergency support<br />
                            We offer end-to-end HVAC solutions for businesses, institutions, and industries nationwide.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <Hammer className="text-gold" size={16} />
                                <span>Expert Installations</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Settings className="text-gold" size={16} />
                                <span>Precision Maintenance</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="text-gold" size={16} />
                                <span>24/7 Emergency Service</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Our Services */}
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
                            Our <span className="text-gold">Specialized Services</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional HVAC solutions tailored to your specific requirements
                        </p>
                    </motion.div>


                    <div className="grid grid-cols-1 gap-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:flex`}
                            >
                                <div className="lg:w-1/2 relative h-64 lg:h-auto">
                                    <ServiceImageCarousel images={service.images} />
                                </div>
                                <div className="lg:w-1/2 p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                                            <service.icon className="text-navy" size={24} />
                                        </div>
                                        <h3 className="font-display text-2xl font-bold text-navy">
                                            {service.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-navy mb-3">Service Features:</h4>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-2">
                                                    <div className="w-5 h-5 bg-gold/20 text-gold rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    </div>
                                                    <span className="text-gray-600">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="font-semibold text-navy mb-3">Our Process:</h4>
                                        <ol className="space-y-3 list-decimal list-inside">
                                            {service.process.map((step, stepIndex) => (
                                                <li key={stepIndex} className="text-gray-600">
                                                    {step}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>

                                    {/* <Link
                    href="/contact"
                    className="inline-block bg-navy text-white py-3 px-6 rounded-lg font-medium flex items-center gap-2 hover:bg-navy/90 transition-colors"
                  >
                    Get a Quote
                  </Link> */}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
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
                            Why <span className="text-gold">Choose Us</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We deliver exceptional service quality and customer satisfaction
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

            {/* CTA Section */}
            <section className="py-20 bg-white text-navy">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Ready to <span className="text-gold">Get Started?</span>
                        </h2>
                        <p className="text-xl text-black-200 max-w-3xl mx-auto mb-8">
                            Contact us today for a free consultation and quote on your HVAC needs
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <Link
                                href="/contact"
                                className="bg-gold text-navy py-4 px-8 rounded-lg font-bold text-lg hover:bg-gold/90 transition-colors flex items-center justify-center gap-2"
                            >
                                Contact Us
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
        </>
    );
}