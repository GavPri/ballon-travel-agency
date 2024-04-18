import React, { useState } from "react";
import Logo from "../Logo";
import NavbarLinks from "./NavbarLinks";
import SocialMediaLinks from "./SocialMediaLinks";

const Navbar = () => {
  // ----- handling state for hamburger menu span
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <nav className="w-screen max-w-[1240px] h-24 bg-transparent z-10 m-auto flex items-center justify-between absolute top-0 px-10">
      {/* ----- Logo */}
      <Logo width={100} height={100} />
      {/* ----- Nav links / unordered list */}
      <NavbarLinks />
      {/* ----- Social media links */}
      <SocialMediaLinks />
      {/* ----- hamburger menu */}
      <div className="ml-auto w-6 aspect-square relative">
        {/* ---- first & last span - opacity 0, width 0 when open */}
        <span className="bg-yellow w-full h-0.5 rounded-full absolute rotate-0 transition-all duration-500 ease-in-out top-0/4"></span>
        {/* ----- Rotate 45 deg when open */}
        <span className="bg-yellow w-full h-0.5 rounded-full absolute rotate-0 transition-all duration-500 ease-in-out top-1/4"></span>
        {/* ----- Rotate -45 deg when open */}
        <span className="bg-yellow w-full h-0.5 rounded-full absolute rotate-0 transition-all duration-500 ease-in-out top-1/4"></span>
        {/* ---- first & last span - opacity 0, width 0 when open */}
        <span className="bg-yellow w-full h-0.5 rounded-full absolute rotate-0 transition-all duration-500 ease-in-out top-2/4"></span>
      </div>
    </nav>
  );
};

export default Navbar;
