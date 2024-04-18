import React from "react";
import hero from "../../images/hero.jpg";
import BackgroundImage from "../../components/BackgroundImage";
import Button from "../../components/Button";

const Hero = () => {
  return (
    <div className="md:max-w-[1240px] w-[90vw] m-auto h-[800px] relative mt-4 flex justify-center md:items-center items-start">
      <BackgroundImage
        imageUrl={hero}
        className={`rounded-lg absolute h-2/4 md:h-full`}
        backgroundPosition={`top, center`}
      />
      <div className="z-10 text-center flex flex-col justify-center items-center mt-24">
        <h2 className="font-M text-yellow md:text-7xl text-xl uppercase ">
          Emb<span className="stand-out">a</span>rk on a journe
          <span className="stand-out">
            y<br></br>
          </span>
          of a lif<span className="stand-out">e</span>
          time
        </h2>
        <p className="text-center p-6 text-white font-Fig max-w-readable md:text-xl hidden md:flex">
          Embark on unforgettable journeys with us! Explore exotic destinations,
          savor local cuisine, and create lasting memories. From breathtaking
          landscapes to vibrant cities. Your adventure starts here!
        </p>
        <Button
          className={`z-20 bg-amber rounded-full h-10 w-fit px-4 py-2 font-Fig font-bold text-dark mt-12 md:mt-6`}
          text={`Book now`}
        />
      </div>
    </div>
  );
};

export default Hero;
