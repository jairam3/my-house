import React from "react";

const StoreDataModel = () => {
  return (
    <>
      <div className="bg-black text-white flex justify-between px-12">
        <div className="max-w-lg px-10">
          <div className="">
            <h2 className="text-[clamp(30px,5vw,90px)] font-medium tracking-[clamp(-1.76px)] text-white">
            Your{" "}
              <span className="font-medium text-[clamp(30px,5vw,90px)] tracking-[-1.76px]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-300 to-indigo-500">
                  Store
                </span>
              </span>
            </h2>
            <h2 className="text-[clamp(30px,5vw,90px)] font-medium tracking-[clamp(-1.76px)] text-white">
            Your{" "}
              <span className="font-medium text-[clamp(30px,5vw,90px)] tracking-[-1.76px]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-300 to-indigo-500">
                  Data
                </span>
              </span>
            </h2>
            <h2 className="text-[clamp(30px,5vw,90px)] font-medium tracking-[clamp(-1.76px)] text-white">
            Your{" "}
              <span className="font-medium text-[clamp(30px,5vw,90px)] tracking-[-1.76px]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-300 to-indigo-500">
                  Model
                </span>
              </span>
            </h2>
          </div>
          <p className="text-2xl mt-20">
            With House of Models, your brand gets access to the best AI outcomes
            and workflows possible to generate new, personalized media.
            Everything we use to do this, such as datasets, and workflows remain
            yours.
          </p>
          <div className="max-w-lg mt-24 space-y-12">
            <div className="">
              <div className="text-2xl">
                <span>👥</span>
              </div>
              <div className="">
                <h3 className="text-xl font-bold mt-6">Vendor agnostic</h3>
                <p className="text-gray-400 text-xl mt-8">
                  Create pipelines for GitHub, GitLab, Bitbucket, Azure, and
                  more.
                </p>
              </div>
            </div>
            <div className="">
              <div className="text-2xl">
                <span>🗂️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mt-6">Platform agnostic</h3>
                <p className="text-gray-400 text-xl mt-8">
                  Build pipelines for any language or platform. Works with
                  Linux, Windows and Mac.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:w-3/4 md:w-2/3 sm:w-1/2">
          <img
            src="https://framerusercontent.com/images/ivkKM6xcF8D5IjIeiYt4tiJvDE.png?scale-down-to=2048"
            alt="3D crystal visualization"
            className="w-full lg:w-3/4 md:w-2/3 sm:w-1/2 max-w-4xl "
          />
        </div>
      </div>
    </>
  );
};

export default StoreDataModel;
