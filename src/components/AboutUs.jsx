import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Shield } from 'lucide-react';

const AboutUs = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-16">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        A Journey of Strategic Excellence
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Ushtate Consultancy Services was founded with a single mission: to provide businesses with the clarity and professional support they need to thrive in a complex digital age.
                    </p>
                </div>

                <div className="mt-10 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            From our humble beginnings as a small strategy boutique, Ushtate has grown into a multi-disciplinary consultancy powerhouse. We've weathered market shifts and technological revolutions alongside our clients, always staying one step ahead.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Our team of experts brings decades of collective experience in finance, technology, and operations. We don't just offer advice; we partner with you to implement sustainable change.
                        </p>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Our Mission</h4>
                                    <p className="text-gray-500">To simplify complexity and drive measurable growth for our partners.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Our Vision</h4>
                                    <p className="text-gray-500">To be the world's most trusted partner in professional transformation.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-10 lg:mt-0"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                                alt="Ushtate Team Collaboration"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-indigo-600/10 mix-blend-multiply"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
