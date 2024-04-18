import React from "react";

const MobileNavLinks = ({ mobileMenu }) => {
  return (
    <ul
      className={`absolute top-16  h-[90vh] bg-dark text-white z-50 flex flex-col justify-center items-center mobile-menu-animation ${
        mobileMenu ? "open" : "close"
      }`}
    >
      <li className="list-items-hover mb-4 text-2xl">Home</li>
      <li className="list-items-hover mb-4 text-2xl">About</li>
      <li className="list-items-hover mb-4 text-2xl">Flights</li>
      <li className="list-items-hover mb-4 text-2xl">Destinations</li>
      <li className="list-items-hover mb-4 text-2xl">Blogs</li>
      <li className="list-items-hover mb-4 text-2xl">Contact</li>
    </ul>
  );
};

export default MobileNavLinks;
