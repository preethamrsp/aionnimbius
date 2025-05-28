import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl">
              Start your cloud journey with AionCloud today. Our experts are ready to help you 
              implement the perfect solution for your business needs.
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <Link 
              to="/contact" 
              className="btn bg-white text-blue-700 hover:bg-blue-50 transition-colors text-lg font-bold flex items-center"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;