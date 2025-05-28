import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background pattern/overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Accelerate Your <span className="text-blue-300">Cloud Journey</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-xl">
              Expert cloud consulting and managed services to transform your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/services" 
                className="btn btn-primary bg-blue-600 hover:bg-blue-500 border-2 border-blue-500"
              >
                Our Solutions
              </Link>
              <Link 
                to="/contact" 
                className="btn btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10"
              >
                Schedule a Call <ChevronRight className="inline-block ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Cloud Infrastructure" 
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-lg opacity-80 hidden md:block"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-300 rounded-lg opacity-80 hidden md:block"></div>
            </div>
          </div>
        </div>
        
        {/* Stats or Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-blue-800/50 rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
            <p className="text-blue-200">Client Satisfaction</p>
          </div>
          <div className="bg-blue-800/50 rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">250+</div>
            <p className="text-blue-200">Cloud Projects</p>
          </div>
          <div className="bg-blue-800/50 rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
            <p className="text-blue-200">Years Experience</p>
          </div>
          <div className="bg-blue-800/50 rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <p className="text-blue-200">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;