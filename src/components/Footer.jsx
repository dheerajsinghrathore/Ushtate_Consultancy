import { Facebook, X, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 mt-20 -mx-5 px-5 py-16 sm:-mx-10 sm:px-10 md:-mx-14 md:px-14 lg:-mx-20 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
                {/* Brand Section */}
                <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-white tracking-tight">Ushtate</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Empowering businesses through strategic innovation and financial brilliance. Your partner in navigating the complexities of modern markets.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                            <X size={20} />
                        </a>
                        <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact info */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin size={20} className="text-indigo-400 mt-1 shrink-0" />
                            <span>123 Business Avenue, Suite 500, Tech City, TC 10101</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={20} className="text-indigo-400 shrink-0" />
                            <span>+1 (555) 000-1111</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={20} className="text-indigo-400 shrink-0" />
                            <span>contact@ushtate.com</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-6">Newsletter</h4>
                    <p className="text-slate-400 mb-4">Stay updated with our latest insights and industry trends.</p>
                    <div className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-slate-800 border border-slate-700 px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                        <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-indigo-900/40">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Ushtate Consultancy Services. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
