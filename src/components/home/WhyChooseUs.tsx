import React from 'react';
import { Shield, Clock, Users, Badge, Globe, Lightbulb } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Certified Expertise',
      description: 'Our team consists of certified cloud professionals with expertise across AWS, Azure, Google Cloud, and more.'
    },
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: '24/7 Support',
      description: 'Around-the-clock monitoring and support to ensure your cloud infrastructure runs smoothly at all times.'
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: 'Dedicated Teams',
      description: 'Assigned teams who understand your business needs and provide personalized solutions.'
    },
    {
      icon: <Badge className="h-12 w-12 text-blue-600" />,
      title: 'Industry Recognition',
      description: 'Award-winning cloud services recognized by industry leaders and satisfied clients worldwide.'
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: 'Global Presence',
      description: 'Serving clients worldwide with localized expertise and global best practices.'
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-blue-600" />,
      title: 'Innovative Solutions',
      description: 'Cutting-edge cloud solutions that keep you ahead of the competition and technology curve.'
    }
  ];

  return (
    <section className="section py-20">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Why Choose AionCloud for Your Cloud Journey?</h2>
            <p className="text-xl text-gray-600 mb-8">
              With our expert team and proven methodologies, we deliver cloud solutions that drive business growth, enhance efficiency, and provide a competitive edge.
            </p>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team of cloud experts" 
                className="rounded-lg shadow-lg"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-blue-500 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;