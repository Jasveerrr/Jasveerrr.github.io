import React from "react";

const Hero = () => {
  return (
    <div
      className="
      h-screen
      flex
      flex-col
      items-center
      justify-center
      font-inter
      text-white
      select-none
    "
    >
      <div className="flex flex-col items-center">
        <h1
          className="
          text-7xl
          font-semibold
          tracking-tight
          leading-none
        "
        >
          Your shortcut to
        </h1>

        <h1
          className="
          mt-1
          text-7xl
          font-semibold
          tracking-tight
          leading-none
        "
        >
          everything.
        </h1>

        <p
          className="
          mt-8
          text-lg
          text-center
          leading-tight
        "
        >
          A collection of powerful productivity tools all within
          <br />
          an extendable launcher. Fast, ergonomic and reliable.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 mt-14">
        <button
          className="
          bg-white
          p-2
          px-4
          rounded-lg
          cursor-pointer
          text-black
          font-medium
          hover:bg-gray-200
          transition-all
          duration-300
          flex
          items-center
          gap-2
        "
        >
          <i className="ri-apple-fill"></i>
          Download for Mac
        </button>

        <button
          className="
          bg-white
          p-2
          px-4
          rounded-lg
          cursor-pointer
          text-black
          font-medium
          hover:bg-gray-200
          transition-all
          duration-300
          flex
          items-center
          gap-2
        "
        >
          <i className="ri-windows-fill"></i>
          Download for Windows (beta)
        </button>
      </div>
      <div
        className="
          flex
          items-center
          justify-center
          gap-2
         text-[#8E8E8F]
           mt-5
          text-sm
         "
      >
        <a href="#" className="hover:text-white transition-all duration-300">
          Install via homebrew or winget
        </a>

        <span>|</span>

        <a href="#" className="hover:text-white transition-all duration-300">
          Try the new Raycast beta
        </a>
      </div>
    </div>
  );
};

export default Hero;
