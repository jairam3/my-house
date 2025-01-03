import React from "react";

const MediaMagical = () => {
  return (
    <>
      <div className=" bg-black py-20 px-20">
        <div className="flex justify-between rounded-2xl border border-gray-700">
          <div className=" bg-[#1a1a1a] rounded-2xl justify-center p-10 ">
            <h1 className="text-white font-medium text-8xl">
              Make. <br /> Media. <br /> Magical.
            </h1>
            <button className="bg-white text-black rounded-full font-medium px-8 py-4 mt-16">
              Join Waitlist
            </button>
          </div>
          <div className="w-full rounded-3xl shadow-lg bg-black p-10">
            <div className="flex flex-col items-center justify-between ">
              <img
                className="rounded-lg"
                src="https://framerusercontent.com/images/FeW9yXkSPUmxIEcp8CribPXDZFg.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex py-10 gap-6 justify-between">
          <div className="p-4 rounded-lg bg-[#0e0e0e] shadow-lg">
            <div className="">
              <p className="text-lg font-medium text-white">Works everywhere</p>
            </div>
            <div className="relative w-full h-48 mt-4">
              <img
                src="https://framerusercontent.com/images/roVYTmTfsBuXooWYa364LF2I.png"
                alt="Works Everywhere"
                className="absolute inset-0 w-full h-full rounded-lg object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-300">Agents work, much like you do</p>
              <p className="text-gray-400">
                Over email, Slack, and internal knowledge bases, tools and
                workflows.
              </p>
            </div>
          </div>
          <div className="relative p-4 rounded-lg bg-[#0e0e0e] shadow-lg">
            <div className="">
              <p className="text-white text-lg font-medium">
                One-click migrations
              </p>
            </div>
            <div className="relative w-full h-48 mt-4">
              <img
                decoding="async"
                loading="lazy"
                sizes="calc(max((min(100vw, 1440px) - 110px) / 2, 1px) - 60px)"
                src="https://framerusercontent.com/images/k1FnDMc77GEqM09lUtk0C67Xg.png"
                alt="One-click migrations"
                className="absolute inset-0 w-full h-full rounded-lg object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-300">
                House of Models can personalize media and agents
              </p>
              <p className="text-gray-400">
                to be finetuned exactly to your brand's assets and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaMagical;
