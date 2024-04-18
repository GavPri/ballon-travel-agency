import React from "react";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <nav className="max-w-[1240px] bg-dark h-24 m-auto flex">
      {/* ----- Logo */}
      <Logo width={100} height={100} />
      {/* ----- Nav links / unordered list */}
      <ul className="text-grey flex items-center font-Fig">
        <li className="mr-6 hover:cursor-pointer hover:text-yellow transition-all duration-500 ease-in-out">
          Home
        </li>
        <li className="mr-6 hover:cursor-pointer hover:text-yellow transition-all duration-500 ease-in-out">
          About
        </li>
        <li className="mr-6 hover:cursor-pointer hover:text-yellow transition-all duration-500 ease-in-out">
          Flights
        </li>
        <li className="mr-6 hover:cursor-pointer hover:text-yellow transition-all duration-500 ease-in-out">
          Destination
        </li>
        <li className="mr-6 hover:cursor-pointer hover:text-yellow transition-all duration-500 ease-in-out">
          Blogs
        </li>
        <li className="hover:cursor-pointer hover:text-yellow transition-all duration-500 ease-in-out">
          Contact
        </li>
      </ul>
      {/* ----- Social media links */}
    </nav>
  );
};

export default Navbar;
