import React from "react";
import logo from "../../assets/images/logo.png";

const Homepage = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <nav className="flex items-center justify-between px-4 py-3">
          <div className="w-10 h-10 absolute top-7 left-10">
            <img className="text-white font-bold" src={logo} alt="logo" />
          </div>
          <div className="absolute top-7 right-10 bg-white text-black [font:sans-serif] font-semibold py-2 px-9 rounded-full shadow-md hover:bg-gray-200 transition">
            <button className="font-bold text-[15px]">Join Waitlist</button>
          </div>
        </nav>
        <header className="text-center justify-center">
          <div className="leading-none">
            <p class="text-[clamp(40px,7vw,90px)] font-medium  tracking-[clamp(-1.76px)] text-white">
              Your Store
            </p>
            <p class="font-medium text-[clamp(40px,7vw,90px)] tracking-[-1.76px]">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-300 to-indigo-500">
                AI Ready
              </span>
            </p>
          </div>
          <p class="text-[clamp(14px,4vw,20px)] font-medium leading-[332.158%] tracking-[-0.4px] text-center text-[#8B8989]">
            An OS that makes your brand generate, personalize and sell better to
            your customers.
          </p>
        </header>
        {/* <div className=" rounded-xl p-4 bg-[#151515] w-[700px] h-[130px]">
          <form
            action=""
            class="flex flex-col w-full max-w-full mx-auto text-lg font-medium rounded-md"
          >
            <input
              type="hidden"
              name="_redirect"
              value="https://app.houseofmodels.ai/"
            />
            <input
              type="text"
              id="moviename"
              name="moviename"
              placeholder="Generate a photorealistic image male model"
              required
              autocomplete="off"
              className="w-full text-base font-sans bg-transparent mb-2 border-none focus:outline-none text-[#8B8989]"
            />
          </form>

          <div className="flex items-center space-x-32 p-4">
            <button className="flex items-center px-6 py-3 bg-[#262424] text-white rounded-md shadow text-xs font-semibold cursor-pointer flex-1">
              <img
                src="https://framerusercontent.com/images/YOaEOJvv8az10PzU8YOeFo2Xa8.svg"
                alt="Upload Image"
                class="w-6 h-6 object-cover rounded-md "
              />
              <p class="text-sm font-semibold text-gray-400 px-2">
                Upload Image
              </p>
            </button>

            <button className="flex items-center px-6 py-2 bg-white text-black rounded-md shadow text-xs font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16l4-4m0 0l4-4m-4 4H4m16 4v-4a4 4 0 00-4-4H4"
                />
              </svg>
              Generate
            </button>
          </div>
        </div> */}

        <div className="flex flex-wrap justify-center mt-12 gap-4">
          <div className="flex flex-wrap rounded=full border border-[#1B1B1B] rounded-full opacity-100">
            <button className=" text-[#8B8989] py-2 px-6 font-medium">
              Product Research
            </button>
            <svg
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-stars mt-3 mr-5 text-[#8B8989]"
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
            </svg>
          </div>
          <div className="flex flex-wrap rounded=full border border-[#1B1B1B] rounded-full opacity-100">
            <button className=" text-[#8B8989] py-2 px-6 font-medium">
              Photoshoots & Images
            </button>
            <svg
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-stars mt-3 mr-5 text-[#8B8989]"
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
            </svg>
          </div>
          <div className="flex flex-wrap rounded=full border border-[#1B1B1B] rounded-full opacity-100">
            <button className=" text-[#8B8989] py-2 px-6 font-medium">
              Storefront Optimizations
            </button>
            <svg
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-stars mt-3 mr-5 text-[#8B8989]"
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
            </svg>
          </div>

          {/* <button className="border border-[#1B1B1B] rounded-full opacity-100 text-gray-300 py-2 px-6">
            Photoshoots & Images
          </button>
          <button className="border border-[#1B1B1B] rounded-full opacity-100 text-gray-300 py-2 px-6">
            Storefront Optimizations
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Homepage;
