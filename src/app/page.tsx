'use client';

    import React from 'react';
    import HeroSection from '@/components/HeroSection';
    import AboutUsSection from '@/components/AboutUsSection';
    import SpecializationSection from '@/components/SpecializationSection';
    import OurWorkSection from '@/components/OurWorkSection';
    import WhyChooseUsSection from '@/components/WhyChooseUsSection';

    export default function Page() {
      return (
        <div>
          <HeroSection />
          <AboutUsSection />
          <SpecializationSection />
          <OurWorkSection />
          <WhyChooseUsSection />
        </div>
      );
    }
