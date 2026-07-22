import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FloatingLines from "./Components/FloatingLines";
import "./App.css";
import CardSection from "./Components/CardSection";


const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <FloatingLines
          linesGradient={[
            "#ff3b30", // Bright Raycast red
            "#ff6b6b", // Soft red
            "#ffd6d6", // Almost white highlight
          ]}
          animationSpeed={2}
          interactive
          bendRadius={8}
          bendStrength={-2}
          mouseDamping={0.01}
          parallax
          parallaxStrength={2}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
      <CardSection />
    </div>
  );
};

export default App;
