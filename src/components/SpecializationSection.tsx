'use client';

    import React from 'react';
    import {
      Building2,
      Hammer,
      Settings,
      Wrench,
    } from 'lucide-react';
    import ServiceCard from './ServiceCard';

    const SpecializationSection = () => {
      const services = [
        {
          icon: <Building2 className="w-8 h-8 text-accent" />,
          title: 'Roof Installation',
          description:
            'Expert roof installation services using high-quality materials.',
        },
        {
          icon: <Hammer className="w-8 h-8 text-accent" />,
          title: 'Damage Repair',
          description:
            'Quick and efficient repair services for all types of roof damage.',
        },
        {
          icon: <Settings className="w-8 h-8 text-accent" />,
          title: 'Cornering',
          description:
            'Professional cornering services to ensure the integrity of your roof.',
        },
        {
          icon: <Wrench className="w-8 h-8 text-accent" />,
          title: 'Cleaning',
          description:
            'Comprehensive roof cleaning services to remove debris and maintain your roof.',
        },
      ];

      return (
        <section className="py-16" id="services">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-gray-500 uppercase tracking-wider text-sm mb-2">
                What We Do
              </h3>
              <h2 className="text-3xl font-bold mb-4">Our Specialization</h2>
              <p className="text-gray-700 leading-relaxed">
                We offer a wide range of roofing services to meet your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
            <div className="text-right mt-8">
              <a href="#" className="text-accent hover:underline">
                View all services
              </a>
            </div>
          </div>
        </section>
      );
    };

    export default SpecializationSection;
