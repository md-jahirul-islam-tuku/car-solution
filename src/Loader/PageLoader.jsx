import React from "react";

const PageLoader = ({ fullScreen = false }) => {
  return (
    <div
      className={`${
        fullScreen
          ? "fixed inset-0 backdrop-blur-sm z-50"
          : "w-full h-full"
      } flex items-center justify-center`}
    >
      <div className="relative flex flex-col items-center">
        {/* Gradient Ring */}
        <div
          className="w-20 h-20 rounded-full border-4 border-transparent 
        bg-gradient-to-r from-primary via-secondary to-primary 
        animate-spin [mask-image:linear-gradient(white,white)]"
        ></div>

        {/* Inner Glow Circle */}
        <div
          className="absolute w-12 h-12 bg-base-100
        rounded-full shadow-xl"
        ></div>
      </div>
    </div>
  );
};

export default PageLoader;
