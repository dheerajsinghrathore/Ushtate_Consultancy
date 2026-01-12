import React from "react";

const NavBar = () => {
    return (
        <div className="flex justify-between items-center bg-white shadow-sm py-4 sticky top-0 z-50 px-4 -mx-4">
            <h1 className="text-2xl font-bold text-primary cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Ushtate</h1>
            <ul className="flex gap-8 text-gray-700 font-medium">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
        </div>
    );
};

export default NavBar;