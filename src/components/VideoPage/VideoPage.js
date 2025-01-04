import React from "react";

const VideoPage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background/Overlays */}
      <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black opacity-100 z-50"></div>
      <div className="absolute  w-full h-full bg-gradient-to-b from-transparent to-black opacity-100 z-50"></div>

      {/* Video */}
      <div className="relative ">
        <video
          src="https://framerusercontent.com/assets/oi6sebXDmnVMQbvHHKXGiG0hNw.mp4"
          loop
          playsInline
          autoPlay
          muted
          className="object-cover"
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
        <button className="mt-6 text-white text-lg font-bold py-4 px-16  rounded-full border border-white">
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default VideoPage;
