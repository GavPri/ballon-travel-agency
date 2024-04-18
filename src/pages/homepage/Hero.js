import React from "react";
import hero from "../../images/hero.jpg";
import BackgroundImage from "../../components/BackgroundImage";

const Hero = () => {
  return (
    <div className="max-w-[1240px] m-auto h-[800px] relative mt-4">
      <BackgroundImage
        imageUrl={hero}
        height={800}
        className={`rounded-lg absolute`}
      />
    </div>
  );
};

export default Hero;
