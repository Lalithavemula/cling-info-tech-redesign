import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services', 
      hasDropdown: true,
      items: [
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'Mobile App Development', path: '/services/mobile-app-development' },
        { name: 'AI / ML', path: '/services/ai-ml' },
        { name: 'ERP Solutions', path: '/services/erp' },
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
        { name: '3D Animation', path: '/services/3d-animation' }
      ]
    },
    { 
      name: 'Solutions', 
      path: '/solutions', 
      hasDropdown: true,
      items: [
        { name: 'Web Platforms', path: '/solutions/web-solutions' },
        { name: 'Mobile Applications', path: '/solutions/mobile-solutions' },
        { name: 'AI / ML Solutions', path: '/solutions/ai-solutions' },
        { name: 'ERP / Business Solutions', path: '/solutions/business-solutions' }
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Industries', path: '/industries' },
    { 
      name: 'About', 
      path: '/about', 
      hasDropdown: true,
      items: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Journey', path: '/about/journey' },
        { name: 'Leadership', path: '/about/leadership' }
      ]
    },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-surface/90 backdrop-blur-md shadow-sm py-3 border-b border-border' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={dropdownRef}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-primary">
              CLING
              <span className="text-secondary text-sm ml-1 font-semibold tracking-normal">INFO TECH</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`flex items-center gap-1 font-medium text-sm transition-colors ${
                      location.pathname.startsWith(link.path) || activeDropdown === link.name 
                        ? 'text-secondary' 
                        : 'text-text hover:text-secondary'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-medium text-sm transition-colors ${
                      location.pathname === link.path ? 'text-secondary' : 'text-text hover:text-secondary'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <div 
                    className={`absolute top-full left-0 mt-4 w-56 bg-surface border border-border shadow-xl rounded-xl overflow-hidden transition-all duration-200 origin-top ${
                      activeDropdown === link.name ? 'opacity-100 scale-100 pointer-events-auto visible' : 'opacity-0 scale-95 pointer-events-none invisible'
                    }`}
                  >
                    <div className="py-2">
                      {link.items.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-4 py-2.5 text-sm font-medium text-text hover:bg-surfaceLight hover:text-secondary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link to="/contact" className="px-5 py-2.5 rounded-lg bg-secondary text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-sm">
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text hover:text-secondary transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-surface border-t border-border shadow-lg transition-all duration-300 origin-top ${mobileMenuOpen ? 'max-h-[80vh] overflow-y-auto opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.hasDropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="w-full text-left px-3 py-3 text-base font-semibold text-text hover:text-secondary hover:bg-surfaceLight rounded-md transition-colors flex justify-between items-center"
                  >
                    {link.name}
                    <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  {/* Mobile Dropdown items */}
                  {activeDropdown === link.name && (
                    <div className="pl-6 py-2 space-y-2 bg-surfaceLight/50 rounded-b-md">
                      {link.items.map((item, index) => (
                         <Link
                          key={index}
                          to={item.path}
                          className="block px-3 py-2 text-sm font-medium text-muted hover:text-secondary"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.path}
                  className="block px-3 py-3 text-base font-semibold text-text hover:text-secondary hover:bg-surfaceLight rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="block mt-6 text-center px-4 py-3 rounded-lg bg-secondary text-white font-bold hover:bg-blue-700 transition-colors shadow-sm"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
