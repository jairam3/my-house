import React from 'react';

const VideoContainer = () => {
  return (
    <div className="relative">
      {/* Background/Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50 z-20"></div>

      {/* Video */}
      <div className="relative z-0">
        <video
          src="https://framerusercontent.com/assets/DLoaywSY4mPJ80gpVnVs5ASwo.mp4"
          loop
          playsInline
          autoPlay
          muted
          className="w-full h-full object-cover"
          style={{
            cursor: 'auto',
            borderRadius: '0px',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            objectPosition: '50% 50%',
          }}
        ></video>
      </div>

      {/* Overlay/Additional Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-30">
        {/* Add any overlay content like text, buttons, etc. here */}
      </div>
    </div>
  );
};

export default VideoContainer;
