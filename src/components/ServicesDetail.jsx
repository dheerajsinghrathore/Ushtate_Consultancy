import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Cpu, Settings } from 'lucide-react';

const services = [
    {
        title: "Strategic Planning",
        description: "We help you define your long-term goals and create a detailed roadmap to achieve them. Our data-driven approach ensures that every decision is backed by solid research and market insights.",
        icon: <TrendingUp size={32} />,
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "Financial Excellence",
        description: "Optimize your assets and maximize growth through our comprehensive financial consulting. We provide expert advice on investment strategies, risk management, and capital allocation.",
        icon: <BarChart3 size={32} />,
        color: "bg-purple-100 text-purple-600"
    },
    {
        title: "Digital Transformation",
        description: "Stay ahead of the curve with our modern digital solutions. We help you leverage the latest technologies to streamline your operations and enhance your customer experience.",
        icon: <Cpu size={32} />,
        color: "bg-cyan-100 text-cyan-600"
    },
    {
        title: "Operational Efficiency",
        description: "Streamline your processes and maximize productivity. We identify bottlenecks in your workflow and implement effective solutions to improve your bottom line.",
        icon: <Settings size={32} />,
        color: "bg-teal-100 text-teal-600"
    }
];

const ServicesDetail = () => {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-16">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Comprehensive Consultancy Solutions
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        We offer a wide range of professional services designed to help you navigate the complexities of modern business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className={`p-4 rounded-xl inline-block mb-6 ${service.color}`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                            <button className="mt-6 text-indigo-600 font-semibold hover:text-indigo-500 flex items-center gap-2">
                                Learn More <span>&rarr;</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesDetail;
