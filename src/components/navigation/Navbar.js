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
    <div className="w-screen md:max-w-[1240px]">
      {/* ----Navigation Wrapper */}
      <div className="flex justify-center items-center ">
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
          {/* ----- Side Bar NavList */}
        </nav>
      </div>
      <ul
        className={
          mobileMenu
            ? "absolute top-16 right-0 w-[100vw] h-[90vh] bg-dark text-white z-50 flex flex-col justify-center items-center opacity-100 transform translate-x-0 transition-all duration-500 ease-in"
            : "absolute top-16 right-full w-[100vw] h-[90vh] bg-dark text-white z-50 flex flex-col justify-center items-center opacity-0 transform translate-x-full transition-all duration-500 ease-in"
        }
      >
        <li className="list-items-hover mb-4 text-2xl">Home</li>
        <li className="list-items-hover mb-4 text-2xl">About</li>
        <li className="list-items-hover mb-4 text-2xl">Flights</li>
        <li className="list-items-hover mb-4 text-2xl">Destinations</li>
        <li className="list-items-hover mb-4 text-2xl">Blogs</li>
        <li className="list-items-hover mb-4 text-2xl">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
