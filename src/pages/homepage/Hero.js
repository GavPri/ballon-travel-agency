import React from "react";
import hero from "../../images/hero.jpg";
import BackgroundImage from "../../components/BackgroundImage";

const Hero = () => {
  return (
    <div className="max-w-[1240px] m-auto h-[800px] relative mt-4 flex justify-center items-center">
      <BackgroundImage
        imageUrl={hero}
        height={800}
        className={`rounded-lg absolute`}
        backgroundPosition={`top, center`}
      />
      <div className="z-10 ">
        <h2 className="font-M text-yellow text-5xl uppercase text-center">
          Emb<span className="stand-out">a</span>rk on a journe
          <span className="stand-out">
            y<br></br>
          </span>{" "}
          of a lif<span className="stand-out">e</span>
          time
        </h2>
      </div>
    </div>
  );
};

export default Hero;
