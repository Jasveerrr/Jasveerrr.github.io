import React from 'react'

const Card = ({app}) => {
  return (
    <div>
      <div
        className="card  
      w-75 
      shrink-0
      rounded-3xl
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-[inset_0_0_120px_rgba(0,0,0,0.55)]      "
        style={{ backgroundColor: app.bgColor }}
      >
        <div className="top flex justify-between items-center px-5 py-3 font-inter text-xl text-white">
          <div className="left">
            <h2>{app.name}</h2>
            {/* <img src={} alt={app.name} /> */}
          </div>
          <div className="right text-white">
            <button
              className="    w-12
            h-10
            rounded-xl
            cursor-pointer
            border
            border-white/15
            bg-white/5
            backdrop-blur-md
            flex
            items-center
            justify-center
            text-white
            text-2xl
            transition-all
            duration-300
            hover:bg-white/10
            hover:border-white/25"
            >
              →
            </button>
          </div>
        </div>

        <div className="middle h-20 px-5 py-4   text-white ">
          <p>{app.description}</p>
        </div>
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/35 to-transparent my-6"></div>

        <div className="bottom h-65 flex items-end justify-center">
          <img
            src={app.image}
            alt={app.name}
            className="max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
