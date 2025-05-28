import React from 'react';
import { useParams } from 'react-router-dom';

// This is a placeholder component for company detail pages
// You would expand this to handle different company sections like Overview, Join Us, etc.
const CompanyDetail: React.FC = () => {
  const { section } = useParams<{ section: string }>();
  
  const sectionTitle = section?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return (
    <div className="pt-24">
      {/* Company Section Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{sectionTitle}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Learn more about AionCloud and our mission to deliver exceptional cloud solutions.
          </p>
        </div>
      </div>
      
      {/* Company Section Content */}
      <div className="py-16">
        <div className="container-custom">
          <p className="text-xl text-gray-600 mb-8">
            This is the {sectionTitle} page. Content would be customized based on the specific section.
          </p>
          
          {/* Placeholder content */}
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              Detailed information about {sectionTitle} will be available soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;