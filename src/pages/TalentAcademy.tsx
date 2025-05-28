import React from 'react';

// Placeholder component for the Talent Academy page
const TalentAcademy: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Talent Academy Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Talent Academy</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Empowering the next generation of cloud professionals through education and hands-on experience.
          </p>
        </div>
      </div>
      
      {/* Talent Academy Content */}
      <div className="py-16">
        <div className="container-custom">
          <p className="text-xl text-gray-600 mb-8 text-center">
            Our Talent Academy page is currently under development. Check back soon for information about our training programs and career opportunities.
          </p>
          
          {/* Placeholder content */}
          <div className="bg-gray-100 p-8 rounded-lg text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              Detailed information about our Talent Academy programs will be available soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentAcademy;