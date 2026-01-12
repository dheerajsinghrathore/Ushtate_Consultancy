import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Star } from 'lucide-react';

const slides = [
    {
        title: "Strategic Planning",
        description: "Empowering your business vision with data-driven strategies and expert insights.",
        image: "/client_meeting_1.png",
        color: "from-blue-600/20 to-indigo-600/20"
    },
    {
        title: "Financial Excellence",
        description: "Optimizing your growth and assets through comprehensive financial consulting.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
        color: "from-purple-600/20 to-pink-600/20"
    },
    {
        title: "Digital Transformation",
        description: "Elevating your technical edge with modern digital solutions and innovation.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
        color: "from-cyan-600/20 to-blue-600/20"
    },
    {
        title: "Operational Efficiency",
        description: "Streamlining processes for success and maximizing organizational productivity.",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop",
        color: "from-teal-600/20 to-emerald-600/20"
    }
];

const reviews = [
    {
        name: "Jonathan Miller",
        role: "CEO, TechFlow Solutions",
        text: "Ushtate has been instrumental in our digital transformation. Their strategic insights and operational efficiency have helped us scale our operations while maintaining a high standard of quality.",
        rating: 4.5
    },
    {
        name: "Sarah Peterson",
        role: "Director of Finance, Global Bridge",
        text: "The financial excellence consulting we received was top-notch. They helped us optimize our assets and provided a clear roadmap for our long-term growth. Highly recommended!",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Operations Manager, Innovate Corp",
        text: "Their team brought a fresh perspective to our operational challenges. The efficiency gains we've seen since implementing their recommendations have been remarkable.",
        rating: 5
    }
];

const employeeReviews = [
    {
        name: "Alex Rivera",
        role: "Senior Strategy Consultant",
        text: "Working at Ushtate has been a journey of continuous growth. The collaborative culture and the focus on delivering real value to clients make every project exciting.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
        name: "Emily Watson",
        role: "Financial Analyst",
        text: "The mentorship and professional development opportunities here are unparalleled. I've had the chance to work on high-impact projects that truly challenge and inspire me.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
    {
        name: "David Park",
        role: "Digital Solutions Lead",
        text: "Innovation is at the heart of everything we do. At Ushtate, we're not just consultants; we're partners in our clients' success, leveraging the latest tech to drive change.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    }
];

const Home = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <>
            <div className="relative w-full h-[600px] overflow-hidden rounded-3xl mt-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className={`absolute inset-0 flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-10 bg-gradient-to-r ${slides[current].color}`}
                    >
                        <div className="md:w-1/2 space-y-6 z-10">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
                            >
                                {slides[current].title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg md:text-xl text-gray-600 max-w-lg"
                            >
                                {slides[current].description}
                            </motion.p>
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-primary/50 transition-all"
                            >
                                Get Started <ArrowRight size={20} />
                            </motion.button>
                        </div>

                        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                src={slides[current].image}
                                alt={slides[current].title}
                                className="max-h-[400px] object-contain drop-shadow-2xl rounded-2xl"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md text-gray-800 hover:bg-white/40 transition-all z-20"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md text-gray-800 hover:bg-white/40 transition-all z-20"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-primary w-8" : "bg-gray-400 hover:bg-gray-600"}`}
                        />
                    ))}
                </div>
            </div>

            {/* Client Reviews Section */}
            <div className="mt-24 mb-20">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900">What Our Clients Say</h2>
                    <p className="text-lg text-gray-600">
                        At Ushtate Consultancy Services, we are dedicated to delivering transformative results that empower our clients to achieve their most ambitious goals. Our collaborative approach and commitment to excellence have made us a trusted partner for businesses across various industries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                <div className="flex gap-1 text-yellow-400">
                                    {[...Array(Math.floor(review.rating))].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                    {review.rating % 1 !== 0 && <Star size={18} fill="currentColor" className="opacity-50" />}
                                </div>
                                <p className="text-gray-600 italic">"{review.text}"</p>
                            </div>
                            <div className="mt-8">
                                <h4 className="font-bold text-gray-900">{review.name}</h4>
                                <p className="text-sm text-gray-500">{review.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Employee Reviews Section */}
            <div className="mt-32 mb-32 bg-indigo-50/50 -mx-5 px-5 py-24 sm:-mx-10 sm:px-10 md:-mx-14 md:px-14 lg:-mx-20 lg:px-20">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900">Our Team's Perspective</h2>
                    <p className="text-lg text-gray-600">
                        Behind every successful project is a team of dedicated professionals. Here's what some of our team members have to say about their experience at Ushtate.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {employeeReviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-indigo-100 flex flex-col items-center text-center space-y-6"
                        >
                            <img
                                src={review.image}
                                alt={review.name}
                                className="w-20 h-20 rounded-full object-cover border-4 border-indigo-200"
                            />
                            <p className="text-gray-600 italic">"{review.text}"</p>
                            <div>
                                <h4 className="font-bold text-gray-900">{review.name}</h4>
                                <p className="text-sm text-indigo-600 font-medium">{review.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
