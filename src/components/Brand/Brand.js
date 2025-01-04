import React from "react";

const Brand = () => {
  return (
    <div className="p-10 md:p-16 lg:p-32">
      <div className="leading-none">
        <p className="text-[clamp(30px,5vw,90px)] font-medium text-center tracking-[clamp(-1.76px)] text-[#9c9c9c]">
          The Complete
        </p>
        <p className="font-medium text-[clamp(30px,5vw,90px)] text-center tracking-[-1.76px] text-black">
          Brand OS
        </p>
      </div>
      <div className="p-8 md:p-16 lg:p-20">
        {[
          "Dynamic Images",
          "Ad Baker",
          "Talking Avatars",
          "Product Videos",
          "Background Enhancement",
          "Text to 3D",
          "Product Voiceovers",
          "Description & details",
          "Apparel Try On",
          "Market Researcher",
          "Seller Store Manager",
        ].map((item, index) => (
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
            key={index}
          >
            <div className="flex items-center">
              <h2 className="text-lg md:text-xl font-bold">{item}</h2>
            </div>
            <div className="text-center">
              <button className="bg-gray-200 px-4 py-2 rounded-md text-sm md:text-base">
                Video
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
