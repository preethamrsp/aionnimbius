import React from 'react';
import { Link } from 'react-router-dom'; // <-- Make sure this is imported

const caseStudies = [
  {
    title: 'Magento Upgrade Service for an Online Store on AWS',
    image: '/images/cs1.png',
    link: '/magentoupgrade',
  },
  {
    title: 'SaaS Infrastructure Monitoring and 24x7 DevOps Support',
    image: '/images/cs2.png',
    link: '/magentoupgrade',
  },
  {
    title: 'Implementation of Multi-Tenant Architecture on AWS',
    image: '/images/cs3.png',
    link: '/magentoupgrade',
  },
  {
    title: 'Serverless App Development With Real-Time Data',
    image: '/images/cs4.jpg',
    link: '/magentoupgrade',
  },
  {
    title: 'Recommendation Engine for Audio Content',
    image: '/images/cs5.jpg',
    link: '/magentoupgrade',
  },
  {
    title: 'Infrastructure Automation Services for E-Commerce Platform',
    image: '/images/cs6.webp',
    link: '/magentoupgrade',
  },
  {
    title: 'Building Text-to-Speech Software Based on Amazon Polly',
    image: '/images/cs7.png',
    link: '/magentoupgrade',
  },
  {
    title: 'Centralized Application Monitoring and Logging Systems Development',
    image: '/images/cs8.png',
    link: '/magentoupgrade',
  },
  {
    title: 'Full-Cycle Software Development for a BioTech Company',
    image: '/images/cs9.jpg',
    link: '/magentoupgrade',
  },
];

const SuccessStories: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header Section */}
      <div className="bg-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Case Studies</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover how we <strong>BUILD</strong>, <strong>SUPPORT</strong>, and <strong>OPTIMIZE</strong> cloud solutions on AWS.
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <Link key={index} to={study.link}>
            <div
              className="relative h-56 rounded-md overflow-hidden group shadow-md hover:scale-[1.02] transition-transform"
              style={{
                backgroundImage: `url(${study.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-opacity"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-white text-center font-semibold text-lg">{study.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
