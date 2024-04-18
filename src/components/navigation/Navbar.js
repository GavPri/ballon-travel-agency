import React from "react";
import Logo from "../Logo";
import NavbarLinks from "./NavbarLinks";
import SocialMediaLinks from "./SocialMediaLinks";

const Navbar = () => {
  return (
    <nav className="w-screen bg-dark h-24 m-auto flex items-center justify-between absolute top-0 px-6">
      {/* ----- Logo */}
      <Logo width={100} height={100} />
      {/* ----- Nav links / unordered list */}
      <NavbarLinks />
      {/* ----- Social media links */}
      <SocialMediaLinks />
    </nav>
  );
};

export default Navbar;
