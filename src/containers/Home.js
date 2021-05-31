import React from "react";
import HeroSection from "../components/Hero";
import Tiles from "../components/Tiles";
import Statistics from "../components/Statistics";
import Questions from "../components/Questions";

export default function Home() {
  return (
    <div className="h-layout bg-white mt-64px">
      <HeroSection />
      <Tiles />
      <Statistics />
      <Questions />
    </div>
  );
}
