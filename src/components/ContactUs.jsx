import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-16">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Let's Start a Conversation
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Ready to transform your business? Get in touch with our experts today and discover how we can help you achieve your goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-lg"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                    placeholder="Strategic Planning Inquiry"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center space-y-12"
                    >
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-indigo-100 rounded-2xl text-indigo-600">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">Email Us</h4>
                                    <p className="text-lg text-gray-600">contact@ushtate.com</p>
                                    <p className="text-sm text-gray-400">Response within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-indigo-100 rounded-2xl text-indigo-600">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">Call Us</h4>
                                    <p className="text-lg text-gray-600">+1 (555) 000-1111</p>
                                    <p className="text-sm text-gray-400">Mon-Fri from 9am to 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-indigo-100 rounded-2xl text-indigo-600">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">Visit Us</h4>
                                    <p className="text-lg text-gray-600">123 Business Avenue, Suite 500</p>
                                    <p className="text-sm text-gray-600 text-gray-400">Tech City, TC 10101</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-indigo-900 rounded-3xl text-white shadow-xl">
                            <h4 className="text-xl font-bold mb-4">Book a Free Consultation</h4>
                            <p className="text-indigo-200 mb-6 italic">
                                "The first step towards excellence is a single conversation. We're here to listen and help you map out your future."
                            </p>
                            <button className="text-white font-bold border-b-2 border-indigo-400 hover:border-white transition-all pb-1">
                                Schedule Now &rarr;
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
