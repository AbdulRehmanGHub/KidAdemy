import React from "react";
import Hero from "../components/Hero";
import PopularSection from "../components/PopularSection";
import SubjectsGrid from "../components/SubjectsGrid";
import InteractiveActivities from "../components/InteractiveActivities";
import WorldExplorer from "../components/WorldExplorer";
import PricingSection from "../components/PricingSection";
import FeaturesGrid from "../components/FeaturesGrid";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <PopularSection />
      <SubjectsGrid />
      <PricingSection />
      <InteractiveActivities />
      <WorldExplorer />
    </>
  );
};

export default Home;
