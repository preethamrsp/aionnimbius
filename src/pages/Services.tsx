import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { navigationData } from '../data/navigationData';

const Services: React.FC = () => {
  // Get all service categories from navigation data
  const serviceCategories = navigationData.find(item => item.title === 'Services')?.children || [];
  
  return (
    <div className="pt-24">
      {/* Services Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Comprehensive cloud solutions designed to power your digital transformation and drive business success.
          </p>
        </div>
      </div>
      
      {/* Services Categories */}
      <div className="py-16">
        <div className="container-custom">
          {serviceCategories.map((category, index) => (
            <div key={category.title} className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <h2 className="text-3xl font-bold mb-12 text-blue-900 border-b-2 border-blue-200 pb-4">
                {category.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.children?.map((service) => (
                  <div 
                    key={service.title}
                    className="card hover:shadow-lg hover:-translate-y-1 p-6 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-3 text-blue-900">{service.title}</h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive {service.title.toLowerCase()} tailored to your business needs and technological requirements.
                    </p>
                    <Link 
                      to={service.path || '#'}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-blue-50 py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact our team today to discuss how our cloud services can help your business grow and innovate.
            </p>
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-3">
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;