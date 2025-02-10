'use client';

    import React from 'react';

    const WhyChooseUsSection = () => {
      return (
        <section className="py-16" id="why-choose-us">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
            {/* Left Column - Image */}
            <div>
              <img
                src="https://picsum.photos/id/1023/600/400"
                alt="Roofing Work"
                className="rounded-md shadow-lg"
              />
            </div>

            {/* Right Column - Text Content */}
            <div>
              <h3 className="text-gray-500 uppercase tracking-wider text-sm mb-2">
                Why Choose Us
              </h3>
              <h2 className="text-3xl font-bold mb-4">
                The advantages of our company are in the quality of repairs
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We are committed to providing the highest quality roofing
                services. Our team of skilled professionals uses the best
                materials and techniques to ensure your roof is durable and
                long-lasting. We prioritize customer satisfaction and strive to
                exceed your expectations.
              </p>
            </div>
          </div>
        </section>
      );
    };

    export default WhyChooseUsSection;
