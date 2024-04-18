import React from "react";
import Logo from "../Logo";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="max-w-[1240px] bg-dark h-24 m-auto flex items-center justify-between">
      {/* ----- Logo */}
      <Logo width={100} height={100} />
      {/* ----- Nav links / unordered list */}
      <ul className="text-grey flex  font-Fig">
        <li className="mr-6 list-items-hover">Home</li>
        <li className="mr-6 list-items-hover">About</li>
        <li className="mr-6 list-items-hover">Flights</li>
        <li className="mr-6 list-items-hover">Destination</li>
        <li className="mr-6 list-items-hover">Blogs</li>
        <li className="list-items-hover">Contact</li>
      </ul>
      {/* ----- Social media links */}
      <div className="flex text-white items-center">
        <p className="font-Fig text-sm">Follow Us :</p>
        <ul className="flex text">
          <li className="mx-2 list-items-hover">
            <AiFillFacebook size={20} />
          </li>
          <li className="mx-2 list-items-hover">
            <AiFillTwitterSquare size={20} />
          </li>
          <li className="mx-2 list-items-hover">
            <AiFillInstagram size={20} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
