import React from "react";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <nav className="max-w-[1240px] bg-dark h-24 m-auto flex">
      {/* ----- Logo */}
      <Logo width={100} height={100} />
      {/* ----- Nav links / unordered list */}
      <ul className="text-grey flex items-center">
        <li>Home</li>
        <li>About</li>
        <li>Flights</li>
        <li>Destination</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>
      {/* ----- Social media links */}
    </nav>
  );
};

export default Navbar;
