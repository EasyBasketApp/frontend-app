import React from "react";
import AboutSection from "./sections/AboutSection";
import FeaturesSection from "./sections/FeaturesSection";
import HeroSection from "./sections/HeroSection";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
    </>
  );
};

export default HomePage;
