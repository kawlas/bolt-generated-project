'use client';

    import React from 'react';

    const HeroSection = () => {
      return (
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-4">
            {/* Left Column - Text Content */}
            <div className="mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Build Modern Roofing Solutions
              </h1>
              <p className="text-lg mb-8">
                We provide high-quality roofing services for residential and
                commercial properties.
              </p>
              <div className="flex space-x-4">
                <button className="bg-accent text-white py-2 px-6 rounded-md hover:opacity-80">
                  REPAIRS
                </button>
                <button className="bg-accent text-white py-2 px-6 rounded-md hover:opacity-80">
                  REPLACEMENT
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div>
              <img
                src="https://picsum.photos/id/1015/800/600"
                alt="Roofing"
                className="rounded-md shadow-lg"
              />
            </div>
          </div>
        </section>
      );
    };

    export default HeroSection;
