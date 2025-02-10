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
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  We are a team of experienced roofing professionals dedicated to
                  providing top-quality roofing services. With years of
                  experience, we have built a reputation for excellence and
                  customer satisfaction. We specialize in all types of roofing
                  projects, from repairs to complete replacements.
                </p>
              </div>

              {/* Right Column - Stats and Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Happy Clients */}
                <div className="text-center">
                  <span className="text-4xl font-bold text-accent">
                    {happyClients.toLocaleString()}
                  </span>
                  <p className="text-gray-700">Happy Clients</p>
                </div>

                {/* Image Cards */}
                <div className="col-span-2 grid grid-cols-2 gap-4">
                  <img
                    src="https://picsum.photos/id/1016/400/300"
                    alt="Roof Repair"
                    className="rounded-md shadow-md"
                  />
                  <img
                    src="https://picsum.photos/id/1017/400/300"
                    alt="Roof Replacement"
                    className="rounded-md shadow-md"
                  />
                  <img
                    src="https://picsum.photos/id/1018/400/300"
                    alt="Roof Damage"
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
