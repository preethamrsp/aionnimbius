import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqData } from '../../data/faqData';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our cloud solutions and services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className={`w-full flex justify-between items-center p-5 text-left font-medium text-lg ${
                    openIndex === index ? 'bg-blue-50 text-blue-700' : 'text-gray-800'
                  }`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="p-5 bg-white border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Additional Support */}
          <div className="mt-12 bg-blue-50 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <HelpCircle className="h-8 w-8 text-blue-600 mr-4" />
              <div>
                <h3 className="text-xl font-bold text-blue-900">Still have questions?</h3>
                <p className="text-gray-600">Contact our support team for more information.</p>
              </div>
            </div>
            <a
              href="/contact"
              className="btn btn-primary whitespace-nowrap"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;