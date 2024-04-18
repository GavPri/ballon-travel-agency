import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import NavbarLinks from "./NavbarLinks";
import SocialMediaLinks from "./SocialMediaLinks";

const Navbar = () => {
  // ----- handling state for hamburger menu span
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="flex justify-center m-auto w-[80vw]">
      <nav className="w-[80vw] md:max-w-[1240px] h-24 bg-transparent z-10 m-0 flex items-center justify-between absolute top-0 ">
        {/* ----- Logo */}
        <Logo width={100} height={100} />
        {/* ----- Nav links / unordered list */}
        <NavbarLinks />
        {/* ----- Social media links */}
        <SocialMediaLinks />
        {/* ----- hamburger menu */}
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
      </nav>
    </div>
  );
};

export default Navbar;
