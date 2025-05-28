import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CloudCog, Server, GitMerge, Shield, DollarSign, Users } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

const ServicesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    CloudCog: <CloudCog className="h-12 w-12 text-[#3677ec]" />,
    Server: <Server className="h-12 w-12 text-[#3677ec]" />,
    GitMerge: <GitMerge className="h-12 w-12 text-[#3677ec]" />,
    Shield: <Shield className="h-12 w-12 text-[#3677ec]" />,
    DollarSign: <DollarSign className="h-12 w-12 text-[#3677ec]" />,
    Users: <Users className="h-12 w-12 text-[#3677ec]" />
  };

  return (
    <section className="section bg-[#F8FAFC] py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Cloud Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cloud solutions tailored to your business needs,
            from migration to management and optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#A5D7E8]/20"
            >
              <div className="mb-6">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#19376D]">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
                Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
             
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;