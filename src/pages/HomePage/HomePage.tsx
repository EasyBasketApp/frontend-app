import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import AboutSection from "./sections/AboutSection";

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
