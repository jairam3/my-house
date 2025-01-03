import React from "react";

const Group = () => {
  return (
    <div className="relative">
      
      <div className="relative z-0">
        <video
          src="https://framerusercontent.com/assets/IFm1iCq5DMNEq4hsMtblkXkIWD8.mp4"
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

    </div>
  );
};

export default Group;
