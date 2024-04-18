import React from "react";

const NavbarLinks = () => {
  return (
    <ul className="text-white md:flex md:text-xl font-Fig mt-4 hidden">
      <li className="mr-2 md:mr-6 list-items-hover">Home</li>
      <li className="mr-2 md:mr-6 list-items-hover">About</li>
      <li className="mr-2 md:mr-6 list-items-hover">Flights</li>
      <li className="mr-2 md:mr-6 list-items-hover">Destination</li>
      <li className="mr-2 md:mr-6 list-items-hover">Blogs</li>
      <li className="list-items-hover">Contact</li>
    </ul>
  );
};

export default NavbarLinks;
