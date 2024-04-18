import React from "react";
import Logo from "../Logo";
import NavbarLinks from "./NavbarLinks";
import SocialMediaLinks from "./SocialMediaLinks";

const Navbar = () => {
  return (
    <nav className="w-screen max-w-[1240px] h-24 bg-transparent z-10 m-auto flex items-center justify-between absolute top-0 px-10">
      {/* ----- Logo */}
      <Logo width={100} height={100} />
      {/* ----- Nav links / unordered list */}
      <NavbarLinks />
      {/* ----- Social media links */}
      <SocialMediaLinks />
      {/* ----- hamburger menu */}
      <div className="ml-auto flex flex-col justify-between items-center w-6 aspect-square">
        <span className="bg-yellow w-full h-1 rounded-full"></span>
        <span className="bg-yellow w-full h-1 rounded-full"></span>
        <span className="bg-yellow w-full h-1 rounded-full"></span>
      </div>
    </nav>
  );
};

export default Navbar;
