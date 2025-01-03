import React from "react";

const SellBetter = () => {
  return (
    <>
      <div class="flex flex-col items-center justify-center py-20 bg-black text-white">
        <h1 class="text-7xl font-semibold mt-4">
          <span class="text-white">Sell</span>
          <span class="text-pink-500">Better</span>
        </h1>
        <div className=" bg-[#0f0f0f] text-white rounded-3xl mt-10 py-8">
          <div className=" flex max-w-7xl mx-auto px-10 gap-8">
            <div className=" rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://framerusercontent.com/images/dJX6V4n6FUqBPGQkR4VF75JlyXU.svg"
                alt="Assemble your team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://framerusercontent.com/images/dJX6V4n6FUqBPGQkR4VF75JlyXU.svg"
                alt="Make some magic"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl mt-5">Mixture of Experts</h2>
                <h1 className="text-4xl font-bold">Multimodal AI</h1>
                <p className="text-gray-400 mt-5">
                  We've created a ground up new way of thinking about AI +
                  eCommerce. Our Large Action Model lets you create images,
                  change descriptions, make ads, search trends and supercharge
                  your brand in ways never possible before.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellBetter;
