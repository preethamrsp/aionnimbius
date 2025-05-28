import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Cloud, Server, DivideIcon as LucideIcon } from 'lucide-react';
import NavMenu from './NavMenu';
import MobileMenu from './MobileMenu';
import { navigationData } from '../../data/navigationData';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md py-3' : 'py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
               <img
                        src="/images/logo.png"  // adjust the path as needed
                          alt="Logo"
                                 className="h-16 w-auto"
                             />
                        </Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavMenu items={navigationData} />
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden lg:block">
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} items={navigationData} />
    </header>
  );
};

export default Header;