import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Applications from "./components/Applications";
import WhyChooseAI from "./components/WhyChooseAI";
import FutureSection from "./components/FutureSection";
import { CTA, Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-purple-100 selection:text-purple-900">
      <Nav />
      <main>
        <Hero />
        <Process />
        <Applications />
        <WhyChooseAI />
        <FutureSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
