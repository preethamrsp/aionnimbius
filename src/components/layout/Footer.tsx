import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { navigationData } from '../../data/navigationData';

const Footer: React.FC = () => {
  // Extract main navigation items for quick links
  const quickLinks = navigationData.map(item => ({
    title: item.title,
    path: item.path || '#'
  }));

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Cloud className="h-8 w-8 text-white mr-2" />
              <span className="text-xl font-bold text-white">Aionnimbius</span>
            </div>
            <p className="text-white mb-6">
              Empowering businesses with innovative cloud solutions and expert consulting services.
            </p>
            <address className="not-italic text-white space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Langford Town, Banglore-25,
Karnataka, INDIA</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="tel:+18001234567" className="hover:text-blue-200 transition-colors">+91 99999 99999</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="mailto:info@aioncloud.com" className="hover:text-blue-200 transition-colors">info@aionnimbus</a>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link 
                    to={link.path} 
                    className="text-white hover:text-blue-200 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {navigationData.find(item => item.title === 'Services')?.children?.slice(0, 4).map((service) => (
                <li key={service.title}>
                  <Link 
                    to={service.path || '#'} 
                    className="text-white hover:text-blue-200 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-white mb-4">
              Subscribe to our newsletter to receive the latest updates and insights.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-800 text-white placeholder-blue-300"
                />
              </div>
              <button 
                type="submit" 
                className="bg-white hover:bg-blue-50 transition-colors text-blue-900 px-4 py-2 rounded-md w-full font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="pt-8 border-t border-blue-800 flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-white hover:text-blue-200 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <div className="text-white text-sm">
            © {new Date().getFullYear()} Aionnimbius. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;