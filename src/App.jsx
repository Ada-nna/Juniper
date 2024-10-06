import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WeightReset from "./components/WeightReset";
import WeightLoss from "./components/WeightLoss";
import ChangingConvo from "./components/ChangingConvo";
import Review from "./components/Review";
import HowItWorks from "./components/HowItWorks";
import Team from "./components/Team";
import IntroducingApp from "./components/IntroducingApp";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-[96px] ">
        <Hero />
      </div>
      <WeightReset />
      <WeightLoss />
      <ChangingConvo />
      <Review />
      <HowItWorks />
      <Team />
      <IntroducingApp />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
