import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Contact Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
        </div>
      </div>
      {/* Contact Information and Form */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Our team of cloud experts is ready to answer your questions and help you find the perfect solution for your business needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">Office Location</h3>
                    <address className="not-italic text-gray-600">
                     Langford Town, Banglore-25,
Karnataka, INDIA
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">Email Us</h3>
                    <a href="mailto:info@aioncloud.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      info@aionnimbius.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">Call Us</h3>
                    <a href="tel:+18001234567" className="text-gray-600 hover:text-blue-600 transition-colors">
                      +91 99999 99999
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-blue-900">Send Us a Message</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="cloud-consulting">Cloud Consulting</option>
                    <option value="cloud-migration">Cloud Migration</option>
                    <option value="managed-services">Managed Services</option>
                    <option value="devops">DevOps Services</option>
                    <option value="atlassian">Atlassian Solutions</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="h-96 bg-gray-200 relative">
        {/* This would be replaced with an actual map component */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
          <p className="text-gray-600 text-lg">Interactive Map Would Be Displayed Here</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;