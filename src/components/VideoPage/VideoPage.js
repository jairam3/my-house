import React from "react";

const VideoPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background/Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50 z-20"></div>

      {/* Video */}
      <div className="relative z-0 w-full h-full">
        <video
          src="https://framerusercontent.com/assets/oi6sebXDmnVMQbvHHKXGiG0hNw.mp4"
          loop
          playsInline
          autoPlay
          muted
          className="w-full h-full object-cover"
          style={{
            cursor: "auto",
            borderRadius: "0px",
            backgroundColor: "rgba(0, 0, 0, 0)",
            objectPosition: "50% 50%",
          }}
        ></video>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-30 p-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Welcome to Our Video Page
        </h1>
        <p className="mt-4 text-center text-lg md:text-xl">
          Enjoy our content and explore more!
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default VideoPage;
