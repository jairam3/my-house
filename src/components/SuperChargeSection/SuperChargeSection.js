import React from "react";

const SuperchargeSection = () => {
  return (
    <div className=" bg-black py-20">
      <div className="relative p-32">
        <div className="absolute inset-0 mt-48">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://framerusercontent.com/images/vP0en219LMqVhHyWMZMxYWk8Dw.svg"
            alt=""
          />
        </div>
        <div className="mx-auto pb-48 text-center sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 relative z-10">
          <h2 className="text-xl font-medium text-pink-300">Supercharged</h2>
          <h1 className="text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
            Up to 3X higher engagement and conversions
          </h1>
          <p className="mt-2 text-lg font-light text-gray-400 sm:text-xl">
            A whole new way to generate media for your stores. Create images,
            videos, text, ads & 3D that lets your customers see your brand in
            ways never before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuperchargeSection;
