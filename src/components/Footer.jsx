import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, OFFICES } from '../data/constants';

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-primary relative overflow-hidden text-white/80">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
             <Link to="/" className="text-2xl font-bold tracking-tighter text-white inline-block mb-6 hover:text-white transition-colors">
              CLING
              <span className="text-secondary text-sm ml-1 font-semibold tracking-normal">INFO TECH</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Leading IT solutions provider offering web development, mobile apps, digital marketing, and ERP development.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/60 hover:text-white hover:pl-1 transition-all duration-300 text-sm flex items-center">About Us</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-white hover:pl-1 transition-all duration-300 text-sm flex items-center">Services</Link></li>
              <li><Link to="/solutions" className="text-white/60 hover:text-white hover:pl-1 transition-all duration-300 text-sm flex items-center">Solutions</Link></li>
              <li><Link to="/portfolio" className="text-white/60 hover:text-white hover:pl-1 transition-all duration-300 text-sm flex items-center">Portfolio</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Expertise</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-white/60 hover:text-white hover:pl-1 transition-all duration-300 text-sm flex items-center">Web Development</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-white hover:pl-1 transition-all duration-300 text-sm flex items-center">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-white hover:pl-1 transition-all duration-300 text-sm flex items-center">AI / ML</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-white hover:pl-1 transition-all duration-300 text-sm flex items-center">ERP Systems</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="text-white/60 hover:text-white transition-colors text-sm"><a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a></li>
              <li className="text-white/60 hover:text-white transition-colors text-sm"><a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}>{CONTACT_INFO.phone}</a></li>
              <li className="text-white/60 text-sm leading-relaxed mt-4 pt-4 border-t border-white/10">{OFFICES[0].address}</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Cling Info Tech Works Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
