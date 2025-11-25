import React from 'react';
import { Plane, Hotel, Map, FileCheck, Globe, Briefcase } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'Flight Booking',
    description: 'Best deals on local and international flights. We get you there faster and cheaper.',
    icon: <Plane className="w-8 h-8 text-secondary" />,
  },
  {
    title: 'Visa Assistance',
    description: 'Expert guidance through the complex visa application processes for major destinations.',
    icon: <FileCheck className="w-8 h-8 text-secondary" />,
  },
  {
    title: 'Hotel Reservations',
    description: 'Luxury to budget-friendly stays. We find the perfect home away from home for you.',
    icon: <Hotel className="w-8 h-8 text-secondary" />,
  },
  {
    title: 'Holiday Packages',
    description: 'Curated vacation experiences for families, couples, and solo travelers.',
    icon: <Map className="w-8 h-8 text-secondary" />,
  },
  {
    title: 'Corporate Travel',
    description: 'Seamless business travel management for companies and executives.',
    icon: <Briefcase className="w-8 h-8 text-secondary" />,
  },
  {
    title: 'Travel Insurance',
    description: 'Comprehensive travel protection for peace of mind during your journeys.',
    icon: <Globe className="w-8 h-8 text-secondary" />,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase mb-2">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-slate-900">Why Choose Travukwik?</h3>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 duration-300 border border-slate-100 group"
            >
              <div className="w-16 h-16 bg-sky-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
