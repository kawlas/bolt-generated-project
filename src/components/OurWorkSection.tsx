'use client';

    import React from 'react';
    import ServiceCard from './ServiceCard';

    const OurWorkSection = () => {
      const projects = [
        {
          title: 'Nowoczesny Styl Dachu',
          description: 'Zrealizowany projekt z nowoczesnym stylem dachu.',
          imageUrl: 'https://picsum.photos/id/1019/400/300',
        },
        {
          title: 'Wymiana Dachu',
          description: 'Udany projekt wymiany dachu.',
          imageUrl: 'https://picsum.photos/id/1020/400/300',
        },
        {
          title: 'Nowa Instalacja',
          description: 'Nowa instalacja dachu dla nieruchomości mieszkalnej.',
          imageUrl: 'https://picsum.photos/id/1021/400/300',
        },
        {
          title: 'Renowacja',
          description: 'Projekt renowacji dachu.',
          imageUrl: 'https://picsum.photos/id/1022/400/300',
        },
      ];

      return (
        <section className="bg-gray-100 py-16" id="projects">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-gray-500 uppercase tracking-wider text-sm mb-2">
                Nasza Praca
              </h3>
              <h2 className="text-3xl font-bold mb-4">
                Pomyślnie zrealizowane projekty dla naszych klientów
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
            <div className="text-right mt-8">
              <span className="text-3xl font-bold text-accent">180+</span>
              <span className="text-gray-700 ml-2">Zrealizowanych Projektów</span>
            </div>
          </div>
        </section>
      );
    };

    export default OurWorkSection;
