import React from "react";

const Library = () => {
  return (
    <>
      <div class="flex flex-col items-center justify-center bg-black text-white">
        <div class="py-10">
          <a
            href="#"
            class="inline-flex items-center border border-white px-3 py-3 bg-[#0e0c0d] rounded-2xl"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 4a1 1 0 011-1v-3a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 011 1h2a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3a1 1 0 01-1-1h-2a1 1 0 01-1-1v-3a1 1 0 011-1h3a1 1 0 011 1v-3a1 1 0 00-1-1z"
              ></path>
            </svg>
            <span className="font-semibold text-xl">
              House of Models Library
            </span>
          </a>
        </div>
        <h1 class="text-7xl font-semibold mt-4">
          <span class="text-white">Under</span>
          <span class="text-pink-500">the</span>
          <span class="text-purple-500">hood</span>
        </h1>
        <p className="text-xl text-center text-gray-400 max-w-lg mt-8">
          Site Builder utilizes a built-in design system and component library
          of 1000+ components made for Figma & Webflow.
        </p>
        <div className=" bg-[#0f0f0f] text-white rounded-3xl mt-10 py-8">
          <div className=" flex max-w-7xl mx-auto px-10 gap-8">
            <div className=" rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://framerusercontent.com/images/vSZ2IjhYnXG8nSWh9a3LDB7g6w.png?scale-down-to=2048"
                alt="Assemble your team"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Assemble your team</h2>
                <p className="text-gray-400 mb-6">
                  Work with our AI expert to put together Agents that use
                  Generative AI to transform your storefront.
                </p>
                <ul className="text-gray-400 space-y-2 mb-6">
                  <li>✔️ Custom workflow management</li>
                  <li>✔️ Engineered just for your brand</li>
                  <li>✔️ Your data. Your models. Your agents.</li>
                  <li>✔️ Unlimited usage</li>
                </ul>
                <button className="w-full bg-white text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-300">
                  Talk to an expert
                </button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://framerusercontent.com/images/hHMfgeWJbQSMsbTtDto9PATYYw.svg"
                alt="Make some magic"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Make some magic</h2>
                <p className="text-gray-400 mb-6">
                  Create incredible images, videos, 3D, ads, and more media for
                  your brand, store, or product with our crew of agents that are
                  ready to go.
                </p>
                <ul className="text-gray-400 space-y-2 mb-6">
                  <li>✔️ Custom workflow management</li>
                  <li>✔️ Engineered just for your brand</li>
                  <li>✔️ Your data. Your models. Your agents.</li>
                  <li>✔️ Unlimited usage</li>
                </ul>
                <button className="w-full text-white font-bold py-3 border border-white rounded-lg hover:bg-gray-700">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0f0f0f] px-10 mt-10 rounded-3xl">
          <div className="flex py-10 ">
            <div className="py-8">
              <span className="inline-block border border-white text-sm font-medium px-2 py-2 rounded-xl">
                Brand Accelerator
              </span>
              <h1 className="text-4xl font-bold mt-4">
                So, you're a new brand?
              </h1>
              <h2 className="text-5xl font-extrabold mt-6">Start here.</h2>
              <p className="text-gray-400 mt-6 text-lg">
                We think brands of the future will be built using
                 AI alone. Think you make the cut? Tell us about it,
                <br /> and we'd assemble your crew of AI agents.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="text-4xl mr-4">🖼️</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Unlimited Media</h3>
                  <p className="text-gray-400">
                    Use our agents to start your brand.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-4xl mr-4">🛒</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Idea to storefront</h3>
                  <p className="text-gray-400">
                    Our AI experts turn your idea into a live online store.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-4xl mr-4">🌐</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Your prompts, our GPUs
                  </h3>
                  <p className="text-gray-400">
                    The cost of your AI models is on the house.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
