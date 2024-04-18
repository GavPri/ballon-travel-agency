import React, { useState } from "react";
import Logo from "../Logo";
import NavbarLinks from "./NavbarLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import HamburgerMenu from "./HamburgerMenu";
import MobileNavLinks from "./MobileNavLinks";

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
        <nav
          className={`w-full px-10 md:max-w-[1240px] h-16 z-10 m-0 flex items-center justify-between absolute top-0 transition-all duration-500 ${
            mobileMenu ? `bg-dark` : `bg-transparent`
          }`}
        >
          {/* ----- Logo */}
          <Logo width={100} height={100} />
          {/* ----- Nav links / unordered list */}
          <NavbarLinks />
          {/* ----- Social media links */}
          <SocialMediaLinks />
          {/* ----- hamburger menu */}
          <HamburgerMenu
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
            handleMobileMenu={handleMobileMenu}
          />
          {/* ----- Side Bar NavList */}
        </nav>
      </div>
      {/* ----- Mobile NavLinks */}
      <MobileNavLinks mobileMenu={mobileMenu} />
    </div>
  );
};

export default Navbar;
