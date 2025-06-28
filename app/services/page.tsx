'use client';

import { motion } from 'framer-motion';
import { Hammer, Settings, Zap, Droplets, Fan, HardHat, Wrench, CircuitBoard } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
        title: "VRF System Installation",
        description: "Professional installation of Variable Refrigerant Flow systems for optimal climate control in commercial spaces with multi-zone requirements.",
        icon: Settings,
        images: [
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/vrf1.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/vrf2.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/vrf3.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/vrf4.jpeg",
        ],
        features: [
            "Precision installation of indoor/outdoor units",
            "Refrigerant piping and controls",
            "System commissioning and testing",
            "Manufacturer-certified technicians"
        ],
        process: [
            "We begin with a detailed site survey to assess your building's layout and cooling requirements",
            "Our engineers design a customized VRF system configuration for optimal performance",
            "We install the outdoor units with proper vibration isolation and refrigerant line sets",
            "Indoor units are strategically placed for balanced air distribution",
            "The system is thoroughly tested and balanced before commissioning"
        ]
    },
    {
        id: 2,
        title: "HVAC Solutions",
        description: "Comprehensive heating, ventilation and air conditioning systems for residential and commercial properties.",
        icon: Fan,
        images: [
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/hvac1.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/hvac3.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/hvac4.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/hvac5.jpeg",
        ],
        features: [
            "Energy-efficient system design",
            "Ducted and ductless solutions",
            "Regular maintenance programs",
            "24/7 emergency repairs"
        ],
        process: [
            "Our HVAC specialists conduct a comprehensive load calculation for your space",
            "We recommend the most suitable system type based on your needs and budget",
            "Installation is performed by certified technicians following manufacturer guidelines",
            "All systems include a post-installation performance verification",
            "We provide customized maintenance plans to ensure long-term efficiency"
        ]
    },
    {
        id: 3,
        title: "Chiller Installation",
        description: "Expert installation of industrial-grade chillers for large-scale cooling applications.",
        icon: Droplets,
        images: [
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chiller1.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chiller2.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chiller3.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chiller4.jpeg",
        ],
        features: [
            "Air-cooled and water-cooled systems",
            "Pipework and pump integration",
            "Load testing and balancing",
            "Energy optimization"
        ],
        process: [
            "Our team evaluates your facility's cooling load and space constraints",
            "We select the appropriate chiller type (air-cooled or water-cooled)",
            "Professional installation includes proper foundation and vibration isolation",
            "Complete piping system installation with insulation and supports",
            "System commissioning includes performance testing and operator training"
        ]
    },
    {
        id: 4,
        title: "Chill Water Pipelining",
        description: "Specialized chilled water piping systems for commercial HVAC applications.",
        icon: Wrench,
        images: [
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chillwater1.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chillwater2.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chillwater3.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chillwater4.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chillwater5.jpeg",
        ],
        features: [
            "Insulated piping installations",
            "Pressure testing and flushing",
            "Flow balancing",
            "Leak-proof welding techniques"
        ],
        process: [
            "Detailed piping layout design to minimize pressure drops",
            "Precision installation of chilled water supply and return lines",
            "Proper insulation installation to prevent condensation",
            "Hydrostatic pressure testing of all piping systems",
            "Chemical treatment and flushing before system commissioning"
        ]
    },
    {
        id: 5,
        title: "Ducting Systems",
        description: "Custom-designed ductwork for efficient air distribution throughout your facility.",
        icon: HardHat,
        images: [
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ducting1.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ducting2.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ducting3.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ducting4.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ducting5.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ducting6.jpeg"
        ],
        features: [
            "Galvanized steel and flexible ducts",
            "CFD-optimized airflow design",
            "Noise reduction solutions",
            "Smoke and fire dampers"
        ],
        process: [
            "Computational Fluid Dynamics (CFD) analysis for optimal airflow design",
            "Fabrication of custom ductwork in our controlled workshop",
            "Precision installation with proper sealing and support",
            "Integration with fire protection systems where required",
            "Final airflow testing and balancing for optimal performance"
        ]
    },
    {
        id: 6,
        title: "Ventilation Solutions",
        description: "Advanced ventilation systems to maintain optimal indoor air quality.",
        icon: Zap,
        images: [
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/vent1.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/vent2.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/vent3.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/vent4.jpeg"
        ],
        features: [
            "Heat recovery ventilators",
            "Exhaust systems",
            "Air purification integration",
            "CO2 monitoring systems"
        ],
        process: [
            "Comprehensive indoor air quality assessment",
            "Design of balanced ventilation systems with heat recovery",
            "Installation of energy recovery ventilators (ERVs) or heat recovery ventilators (HRVs)",
            "Integration with building automation systems for smart control",
            "Commissioning with air quality monitoring verification"
        ]
    },
    {
        id: 7,
        title: "AHU Installation",
        description: "Professional Air Handling Unit installations for commercial buildings.",
        icon: Wrench,
        images: [
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ahu1.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ahu2.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ahu3.jpeg"
        ],
        features: [
            "Custom AHU configurations",
            "VAV system integration",
            "Filter replacements",
            "Vibration isolation"
        ],
        process: [
            "Detailed load calculation and AHU selection",
            "Structural assessment for proper unit placement",
            "Professional installation with vibration isolation mounts",
            "Ductwork connection with proper sealing",
            "Electrical and control system integration",
            "Performance testing and balancing"
        ]
    },
    {
        id: 8,
        title: "Electrical Panel Revamping",
        description: "Upgrading and modernizing electrical control panels for HVAC systems.",
        icon: CircuitBoard,
        images: [
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/panel1.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/panel2.jpeg",
            "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/panel3.jpeg"
        ],
        features: [
            "Component replacement",
            "Wiring upgrades",
            "Safety compliance",
            "Energy monitoring integration"
        ],
        process: [
            "Comprehensive electrical system assessment",
            "Development of revamping plan with minimal downtime",
            "Replacement of outdated components with modern equivalents",
            "Wiring upgrades with proper labeling",
            "Safety system integration and testing",
            "Energy monitoring system installation"
        ]
    }
];

const benefits = [
    {
        title: "Certified Technicians",
        description: "Our team holds manufacturer certifications and regular training",
        icon: Hammer
    },
    {
        title: "Quality Assurance",
        description: "All work backed by comprehensive warranties",
        icon: Settings
    },
    {
        title: "24/7 Support",
        description: "Emergency services available round the clock",
        icon: Zap
    }
];

export default function Services() {
    return (
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
                            Comprehensive climate control solutions for residential, commercial and industrial applications
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
            <section className="py-20 bg-navy text-white">
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
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
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
    );
}