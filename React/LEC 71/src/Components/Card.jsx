import React from 'react'

const Card = ({app}) => {
  return (
    <div>
      <div className="card bg-white h-90 w-85 p-6 rounded-3xl relative shadow-xl  ">
        <div className="card-top">
          <div className="coverImg"></div>

          <div className="profileImg"></div>

          <div className="followBtn"></div>
        </div>

        <div className="card-mid"></div>
        <div className="card-stats"></div>
        <div className="social"></div>
      </div>
    </div>
  );
}

export default Card
