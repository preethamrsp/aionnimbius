import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, CloudCog, Server, Eye, GitMerge, Clock, Flag, Users, GraduationCap, Award, CheckCircle, ArrowRight } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
  
  // This would normally come from an API or a more comprehensive data store
  // For demonstration, we're creating some mock data
  const serviceData = {
    title: subcategory?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    category: category?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: 'Our comprehensive service offering designed to help businesses leverage cloud technology for optimal performance and growth.',
    features: [
      'Expert consultation and strategy development',
      'Seamless implementation and migration',
      '24/7 monitoring and support',
      'Regular maintenance and optimization',
      'Detailed reporting and analytics',
      'Ongoing training and knowledge transfer'
    ],
    benefits: [
      'Improved operational efficiency',
      'Enhanced security and compliance',
      'Cost optimization and predictable spending',
      'Scalability to meet changing business needs',
      'Increased innovation and competitive advantage',
      'Reduced maintenance burden on internal IT teams'
    ],
    process: [
      { name: 'Assessment', description: 'Thorough evaluation of your current environment and needs' },
      { name: 'Strategy', description: 'Development of a tailored approach to meet your specific goals' },
      { name: 'Implementation', description: 'Expert execution of the solution with minimal disruption' },
      { name: 'Optimization', description: 'Continuous improvement to ensure optimal performance' },
      { name: 'Support', description: 'Ongoing assistance and proactive monitoring' }
    ]
  };

  return (
    <div className="pt-24">
      {/* Service Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container-custom">
          <div className="flex items-center text-blue-200 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to={`/services/${category}`} className="hover:text-white transition-colors">{serviceData.category}</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>{serviceData.title}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{serviceData.title}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            {serviceData.description}
          </p>
        </div>
      </div>
      
      {/* Service Overview */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Service Overview</h2>
              <p className="text-gray-600 mb-6">
                Our {serviceData.title} provides comprehensive solutions to address your most pressing cloud challenges. We work closely with your team to understand your unique requirements and deliver tailored services that drive real business value.
              </p>
              <p className="text-gray-600 mb-6">
                With our expert team of certified professionals, we help you navigate the complexities of cloud technology, ensuring a smooth implementation and ongoing optimization of your cloud environment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/contact" className="btn btn-primary text-center">
                  Request a Consultation
                </Link>
                <Link to="/success-stories" className="btn btn-secondary text-center">
                  View Success Stories
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7661651/pexels-photo-7661651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt={serviceData.title} 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features and Benefits */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Key Features</h2>
              <div className="space-y-4">
                {serviceData.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Benefits</h2>
              <div className="space-y-4">
                {serviceData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Process */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Our Process</h2>
          
          <div className="relative">
            {/* Process Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
            
            {/* Process Steps */}
            <div className="space-y-12 relative">
              {serviceData.process.map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  <div className="md:w-1/2 flex justify-end">
                    <div className={`p-6 bg-white rounded-lg shadow-md max-w-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <h3 className="text-xl font-bold mb-2 text-blue-900">{index + 1}. {step.name}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="z-10 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    {index + 1}
                  </div>
                  
                  <div className="md:w-1/2">
                    {/* Empty div to maintain layout */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started with {serviceData.title}?</h2>
              <p className="text-xl text-blue-200">
                Contact us today to discuss how our {serviceData.title.toLowerCase()} can help your business thrive in the cloud.
              </p>
            </div>
            <div>
              <Link to="/contact" className="btn bg-white text-blue-900 hover:bg-blue-50">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;