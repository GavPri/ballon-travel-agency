import React from "react";
import hero from "../../images/hero.jpg";
import BackgroundImage from "../../components/BackgroundImage";
import Button from "../../components/Button";

const Hero = () => {
  return (
    <div className="max-w-[1240px] m-auto h-[800px] relative mt-4 flex justify-center items-center">
      <BackgroundImage
        imageUrl={hero}
        height={800}
        className={`rounded-lg absolute`}
        backgroundPosition={`top, center`}
      />
      <div className="z-10 text-center flex flex-col justify-center items-center">
        <h2 className="font-M text-yellow text-7xl uppercase ">
          Emb<span className="stand-out">a</span>rk on a journe
          <span className="stand-out">
            y<br></br>
          </span>
          of a lif<span className="stand-out">e</span>
          time
        </h2>
        <p className="text-center p-6 text-white font-Fig max-w-readable text-xl">
          Embark on unforgettable journeys with us! Explore exotic destinations,
          savor local cuisine, and create lasting memories. From breathtaking
          landscapes to vibrant cities. Your adventure starts here!
        </p>
        <Button
          className={`z-20 bg-amber rounded-full h-10 w-fit px-4 py-2 font-Fig font-bold text-dark`}
          text={`Book now`}
        />
      </div>
    </div>
  );
};

export default Hero;
