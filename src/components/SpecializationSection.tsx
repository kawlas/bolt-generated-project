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
          title: 'Montaż Dachu',
          description:
            'Eksperckie usługi montażu dachu z użyciem wysokiej jakości materiałów.',
        },
        {
          icon: <Hammer className="w-8 h-8 text-accent" />,
          title: 'Naprawa Uszkodzeń',
          description:
            'Szybkie i efektywne usługi naprawy wszystkich rodzajów uszkodzeń dachu.',
        },
        {
          icon: <Settings className="w-8 h-8 text-accent" />,
          title: 'Obróbka Blacharska',
          description:
            'Profesjonalne usługi obróbki blacharskiej w celu zapewnienia integralności dachu.',
        },
        {
          icon: <Wrench className="w-8 h-8 text-accent" />,
          title: 'Czyszczenie',
          description:
            'Kompleksowe usługi czyszczenia dachu w celu usunięcia zanieczyszczeń i konserwacji dachu.',
        },
      ];

      return (
        <section className="py-16" id="services">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-gray-500 uppercase tracking-wider text-sm mb-2">
                Co Robimy
              </h3>
              <h2 className="text-3xl font-bold mb-4">Nasza Specjalizacja</h2>
              <p className="text-gray-700 leading-relaxed">
                Oferujemy szeroki zakres usług dekarskich, aby sprostać Twoim
                potrzebom.
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
                Zobacz wszystkie usługi
              </a>
            </div>
          </div>
        </section>
      );
    };

    export default SpecializationSection;
