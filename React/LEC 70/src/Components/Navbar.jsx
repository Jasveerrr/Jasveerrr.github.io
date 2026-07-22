import React from 'react'

const Navbar = () => {
  return (
    <div className=" pt-4 ">
      <nav
        className="
      fixed
      top-4
      left-0
      right-0
      z-50
      max-w-7xl
      p-5
      flex
      items-center
      justify-between
      mx-auto 
      rounded-2xl
     bg-[#151515]
      border
      border-white/10
      backdrop-blur-xl
      shadow-[rgba(255,255,255,0.15)_0px_1px_1px_0px_inset]
      shadow-lg
       "
      >
        <div
          className="taskbar-left
        flex
        items-center
        justify-center
        text-[#E6E6E6]
        text-xl
        "
        >
          <button
            className="flex
          justify-center
          items-center
          cursor-pointer"
          >
            <img
              src="https://www.raycast.com/favicon-production.png"
              alt="Raycast Logo"
              className="w-9 h-9 object-contain"
            />
            <h3 className="text-[18px]">Raycast</h3>
          </button>
        </div>
        <div
          className="taskbar-mid 
        flex
        items-center
        justify-center
        gap-7
        text-[#8E8E8F]
        "
        >
          <a href="#">Store</a>
          <a href="#">Pro</a>
          <a href="#">AI</a>
          <a href="#">iOS</a>
          <a href="#">Windows</a>
          <a href="#">Teams</a>
          <a href="#">Enterprise</a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
        </div>

        <div
          className="taskbar-right
        flex
        items-center
        justify-center
        gap-10
        text-[#8E8E8F]
        "
        >
          <a href="#">Log in</a>
          <button
            className="bg-white
          p-2
          px-4
          border-none
          rounded-lg
          cursor-pointer
          text-black
          "
          >
             Download
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

