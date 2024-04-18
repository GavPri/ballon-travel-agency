import React from "react";
import hero from "../../images/hero.jpg";
import BackgroundImage from "../../components/BackgroundImage";

const Hero = () => {
  return (
    <div className="max-w-[1240px] m-auto h-[800px] rounded-lg">
      <BackgroundImage imageUrl={hero} height={800} className={`rounded-lg`} />
    </div>
  );
};

export default Hero;
