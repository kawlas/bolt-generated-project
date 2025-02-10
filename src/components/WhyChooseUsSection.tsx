'use client';

    import React from 'react';

    const WhyChooseUsSection = () => {
      return (
        <section className="py-16" id="why-choose-us">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
            {/* Left Column - Image */}
            <div>
              <img
                src="/images/ekipa_dekarska.jpg"
                alt="Ekipa Dekarska"
                className="rounded-md shadow-lg"
              />
            </div>

            {/* Right Column - Text Content */}
            <div>
              <h3 className="text-gray-500 uppercase tracking-wider text-sm mb-2">
                Dlaczego Wybrać Nas?
              </h3>
              <h2 className="text-3xl font-bold mb-4">
                Gwarancja Jakości i Profesjonalizmu
              </h2>
              <p className="text-gray-700 leading-relaxed">
                TOP DEKARZ to pewność solidnego wykonania i trwałych rozwiązań.
                Nasi doświadczeni dekarze zapewniają najwyższą jakość usług i
                indywidualne podejście do każdego klienta.
              </p>
            </div>
          </div>
        </section>
      );
    };

    export default WhyChooseUsSection;
