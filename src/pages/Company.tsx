import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Company: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Company Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Company</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Learn about AionCloud, our mission, vision, and the team behind our success.
          </p>
        </div>
      </div>
      
      {/* Company Section Links */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Overview */}
            <div className="card p-8 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Company Overview</h2>
              <p className="text-gray-600 mb-6">
                Learn about our mission, vision, values, and the history of AionCloud.
              </p>
              <Link 
                to="/company/overview" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            {/* Join Us */}
            <div className="card p-8 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Join Us</h2>
              <p className="text-gray-600 mb-6">
                Explore career opportunities and what it's like to work at AionCloud.
              </p>
              <Link 
                to="/company/join-us" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                View Careers <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            {/* Contact */}
            <div className="card p-8 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact</h2>
              <p className="text-gray-600 mb-6">
                Get in touch with our team for inquiries, support, or partnership opportunities.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;