import React from "react";

const VideoScroll = () => {
  return (
    <div>
      {" "}
      <div className="relative w-full h-full">
        <video
          src="https://framerusercontent.com/assets/wRohANpz9aHkFTX69NtufAoCyVE.mp4"
          loop
          playsInline
          autoPlay
          muted
          className="w-full h-full object-cover bg-black"
          style={{
            cursor: "auto",
            borderRadius: "0px",
            backgroundColor: "rgba(0, 0, 0, 0)",
            objectPosition: "50% 50%",
          }}
        ></video>
      </div>
    </div>
  );
};

export default VideoScroll;
