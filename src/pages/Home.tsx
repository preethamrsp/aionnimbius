import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import HeroBanner from '../components/home/HeroBanner';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CertificationsCarousel from '../components/home/CertificationsCarousel';
import Testimonials from '../components/home/Testimonials';
import FAQSection from '../components/home/FAQSection';
import CTASection from '../components/home/CTASection';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Certifications and Awards */}
      <CertificationsCarousel />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;