import React from "react";

const HamburgerMenu = ({ mobileMenu, handleMobileMenu }) => {
  return (
    <div
      className="ml-auto w-6 aspect-square relative md:hidden"
      onClick={handleMobileMenu}
    >
      {/* ---- first & last span - opacity 0, width 0 when open */}
      <span
        className={
          mobileMenu
            ? `opacity-0 w-0 bg-yellow h-0.5 rounded-full absolute rotate-0 transition-all duration-500 ease-in-out top-0/4`
            : `bg-yellow w-full h-0.5 rounded-full absolute rotate-0 transition-all duration-500 ease-in-out top-0/4`
        }
      ></span>
      {/* ----- Rotate 45 deg when open */}
      <span
        className={
          mobileMenu
            ? `-rotate-45 bg-yellow w-full h-0.5 rounded-full absolute transition-all duration-500 ease-in-out top-1/4`
            : `bg-yellow w-full h-0.5 rounded-full absolute rotate-0 transition-all duration-500 ease-in-out top-1/4`
        }
      ></span>
      {/* ----- Rotate -45 deg when open */}
      <span
        className={
          mobileMenu
            ? `rotate-45 bg-yellow w-full h-0.5 rounded-full absolute transition-all duration-500 ease-in-out top-1/4`
            : `bg-yellow w-full h-0.5 rounded-full absolute rotate-0 transition-all duration-500 ease-in-out top-1/4`
        }
      ></span>
      {/* ---- first & last span - opacity 0, width 0 when open */}
      <span
        className={
          mobileMenu
            ? `opacity-0 w-0 bg-yellow h-0.5 rounded-full absolute rotate-0 transition-all duration-500 ease-in-out top-2/4`
            : `bg-yellow w-full h-0.5 rounded-full absolute rotate-0 transition-all duration-500 ease-in-out top-2/4`
        }
      ></span>
    </div>
  );
};

export default HamburgerMenu;
