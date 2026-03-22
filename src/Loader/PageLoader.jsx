import React from "react";

const PageLoader = ({ fullScreen = false }) => {
  return (
    <div
      className={`${
        fullScreen
          ? "fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
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
          className="absolute w-12 h-12 bg-base-100 dark:bg-slate-900 
        rounded-full shadow-xl"
        ></div>

        {/* Loading Text */}
        <p
          className="mt-6 text-lg font-semibold bg-gradient-to-r 
        from-info to-accent bg-clip-text text-transparent animate-pulse"
        >
          Loading...
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
