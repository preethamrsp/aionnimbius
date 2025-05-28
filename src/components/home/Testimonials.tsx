import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const activeTestimonial = testimonialsData[activeIndex];

  return (
    <section className="section py-20 bg-blue-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">What Our Clients Say</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-blue-800 rounded-xl p-8 md:p-12 shadow-xl relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="h-16 w-16 text-blue-300" />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="md:w-1/4 flex-shrink-0">
                  <img 
                    src={activeTestimonial.image} 
                    alt={activeTestimonial.name} 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-400 mx-auto"
                  />
                </div>
                
                <div className="md:w-3/4">
                  <p className="text-xl mb-6 text-blue-100">"{activeTestimonial.content}"</p>
                  <div>
                    <h4 className="text-xl font-bold text-white">{activeTestimonial.name}</h4>
                    <p className="text-blue-300">{activeTestimonial.role}, {activeTestimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-white scale-125' : 'bg-blue-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Arrow Controls */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;