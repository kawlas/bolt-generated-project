'use client';

    import React from 'react';
    import ServiceCard from './ServiceCard';

    const OurWorkSection = () => {
      const projects = [
        {
          title: 'Dachówka Ceramiczna',
          description: 'Montaż dachówki ceramicznej na nowym domu.',
          imageUrl: '/images/dachowka_ceramiczna.jpg',
        },
        {
          title: 'Blachodachówka',
          description: 'Wymiana starego dachu na blachodachówkę.',
          imageUrl: '/images/blachodachowka.jpg',
        },
        {
          title: 'Dach Zielony',
          description: 'Realizacja dachu zielonego na budynku biurowym.',
          imageUrl: '/images/dach_zielony.jpg',
        },
        {
          title: 'Renowacja Dachu',
          description: 'Kompleksowa renowacja zabytkowego dachu.',
          imageUrl: '/images/renowacja_dachu.jpg',
        },
      ];

      return (
        <section className="bg-gray-100 py-16" id="projects">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-gray-500 uppercase tracking-wider text-sm mb-2">
                Nasze Realizacje
              </h3>
              <h2 className="text-3xl font-bold mb-4">
                Zadowolenie Klienta Naszym Priorytetem
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects.map((project, index) => (
                <ServiceCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default OurWorkSection;
