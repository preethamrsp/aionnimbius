import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { certificationsData } from '../../data/certificationsData';

const CertificationsCarousel: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { current } = sliderRef;
      const scrollAmount = direction === 'left' 
        ? -current.offsetWidth / 2 
        : current.offsetWidth / 2;
      
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="section bg-gray-50 py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Certifications & Partnerships</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to be recognized by leading technology providers for our expertise and service quality.
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
          
          {/* Carousel Container */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto pb-8 pt-4 gap-6 scrollbar-hide snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certificationsData.map((certification) => (
              <div 
                key={certification.id}
                className="min-w-[300px] bg-white rounded-lg shadow-md p-6 snap-start flex flex-col items-center hover:shadow-lg transition-shadow"
              >
                <div className="w-32 h-32 mb-6 flex items-center justify-center">
                  <img 
                    src={certification.logo} 
                    alt={certification.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-blue-900">{certification.name}</h3>
                {certification.description && (
                  <p className="text-gray-600 text-center">{certification.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsCarousel;