'use client';

    import React from 'react';
    import { useState } from 'react';

    const AboutUsSection = () => {
      const [happyClients, setHappyClients] = useState(180000);

      return (
        <section className="bg-secondary py-16" id="about">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Column - Text Content */}
              <div>
                <hr className="border-t-2 border-gray-300 mb-4 w-24" />
                <h2 className="text-3xl font-bold mb-4">O Nas</h2>
                <p className="text-gray-700 leading-relaxed">
                  Jesteśmy zespołem doświadczonych profesjonalistów dekarskich,
                  zaangażowanych w świadczenie usług dekarskich najwyższej
                  jakości. Z wieloletnim doświadczeniem zbudowaliśmy
                  reputację doskonałości i zadowolenia klientów. Specjalizujemy
                  się we wszystkich rodzajach projektów dachowych, od napraw po
                  kompleksowe wymiany.
                </p>
              </div>

              {/* Right Column - Stats and Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Happy Clients */}
                <div className="text-center">
                  <span className="text-4xl font-bold text-accent">
                    {happyClients.toLocaleString()}
                  </span>
                  <p className="text-gray-700">Zadowolonych Klientów</p>
                </div>

                {/* Image Cards */}
                <div className="col-span-2 grid grid-cols-2 gap-4">
                  <img
                    src="https://picsum.photos/id/1016/400/300"
                    alt="Naprawa Dachu"
                    className="rounded-md shadow-md"
                  />
                  <img
                    src="https://picsum.photos/id/1017/400/300"
                    alt="Wymiana Dachu"
                    className="rounded-md shadow-md"
                  />
                  <img
                    src="https://picsum.photos/id/1018/400/300"
                    alt="Uszkodzenie Dachu"
                    className="rounded-md shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default AboutUsSection;
