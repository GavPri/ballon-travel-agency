import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const SocialMediaLinks = () => {
  return (
    <div className="hidden md:flex text-white items-center mt-4">
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
  );
};

export default SocialMediaLinks;
