export interface NavigationItem {
  title: string;
  path?: string;
  children?: NavigationItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  logo: string;
  description?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}