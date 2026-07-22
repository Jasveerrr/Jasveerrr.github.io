import React from "react";
import "./Hero.css";

import heroImg from "../../Assets/8642209.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-center">
          <img
            className="hero-main-img"
            src={heroImg}
            alt="Hero"
          />
          <h1 className="hero-heading">
              Unlock Your Football Potential.
              <br />
              Build Your Own Legacy.
            </h1>
              
            <p className="hero-text">
              Train with elite coaches, sharpen every skill,
              <br />
              and take the first step toward becoming the player
              <br />
              you've always dreamed of.
            </p>
              
            <button className="hero-btn">
              Start Your Journey
            </button>
                    </div>
      </div>
    </section>
  );
};

export default Hero;