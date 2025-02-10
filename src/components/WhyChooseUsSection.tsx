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
                alt="Prace Dekarskie"
                className="rounded-md shadow-lg"
              />
            </div>

            {/* Right Column - Text Content */}
            <div>
              <h3 className="text-gray-500 uppercase tracking-wider text-sm mb-2">
                Dlaczego My
              </h3>
              <h2 className="text-3xl font-bold mb-4">
                Zalety naszej firmy tkwią w jakości napraw
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Jesteśmy zobowiązani do świadczenia usług dekarskich najwyższej
                jakości. Nasz zespół wykwalifikowanych profesjonalistów
                wykorzystuje najlepsze materiały i techniki, aby zapewnić, że
                Twój dach jest trwały i długotrwały. Priorytetem jest dla nas
                zadowolenie klienta i dążymy do przekroczenia Twoich
                oczekiwań.
              </p>
            </div>
          </div>
        </section>
      );
    };

    export default WhyChooseUsSection;
