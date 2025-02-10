'use client';

    import React from 'react';
    import ServiceCard from './ServiceCard';

    const OurWorkSection = () => {
      const projects = [
        {
          title: 'Modern Roofing Style',
          description: 'Completed project with a modern roofing style.',
          imageUrl: 'https://picsum.photos/id/1019/400/300',
        },
        {
          title: 'Roof Replacement',
          description: 'Successful roof replacement project.',
          imageUrl: 'https://picsum.photos/id/1020/400/300',
        },
        {
          title: 'New Installation',
          description: 'New roof installation for a residential property.',
          imageUrl: 'https://picsum.photos/id/1021/400/300',
        },
        {
          title: 'Renovation',
          description: 'Roof renovation project.',
          imageUrl: 'https://picsum.photos/id/1022/400/300',
        },
      ];

      return (
        <section className="bg-gray-100 py-16" id="projects">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-gray-500 uppercase tracking-wider text-sm mb-2">
                Our Work
              </h3>
              <h2 className="text-3xl font-bold mb-4">
                Successfully completed projects for our clients
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
              <span className="text-gray-700 ml-2">Projects Completed</span>
            </div>
          </div>
        </section>
      );
    };

    export default OurWorkSection;
