import React, { useState, useEffect } from "react";
// ----- import fetch data hook.
import FetchData from "../../api/FetchData";
import { FaLocationPin } from "react-icons/fa6";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const ContinentsCarousel = () => {
  // ----- fetch and deconstruct data from api end point.
  const { data, isLoading, errors } = FetchData(
    "gavpri/ballon-travel-agency/db"
  );
  // ----- set state for carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedContinent, setSelectedContinent] = useState(null);

  //   ----- prevIndex
  const handlePrevIndex = (currentIndex, data) => {
    if (currentIndex === 0) {
      setCurrentIndex(data.continents.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  //   ----- handleNextSlide
  const handleNextIndex = (currentIndex, data) => {
    if (currentIndex === data.continents.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    if (data && data.continents.length > 0) {
      setSelectedContinent(data.continents[currentIndex]);
    }
  }, [data, currentIndex]);

  //   ----- Handle current index
  const handleIndex = (index) => {
    setCurrentIndex(index);
  };
  // ----- set loading states
  if (isLoading) {
    return <div>...Loading</div>;
  }
  // ----- set errors state
  if (errors) {
    return <div>Oops, there was an error... {errors.message}</div>;
  }

  return (
    <div className="max-w-[90vw] m-auto">
      {/* ------ Heading  */}
      <h2 className="uppercase text-yellow font-M header-spacing text-xl text-center mb-4">
        Disc<span className="stand-out">o</span>ver popula
        <span className="stand-out">r</span> Destin
        <span className="stand-out">a</span>tions
      </h2>
      {/* ----- Continent Tabs */}
      <div className="flex flex-wrap lg:flex-nowrap gap-1 justify-center mb-4">
        {data.continents.map((continent, index) => (
          <div
            onClick={() => handleIndex(index)}
            key={index}
            className={`transition-all duration-500 p-1 bg-[#013220] font-Fig basis-[30%] rounded-lg flex justify-center items-center mb-2 ${
              currentIndex === index ? `bg-yellow text-dark` : `text-white`
            }`}
          >
            {continent.name}
          </div>
        ))}
      </div>
      {/* ----- Continents image */}
      <div className="w-[90vw] h-[40vh] mb-4">
        {selectedContinent && (
          <div className="h-full w-full">
            <div className="grid grid-cols-2 gap-2 w-full h-full ">
              {data.locations[selectedContinent.slug].map((location, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden h-full relative"
                >
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover absolute top-0 left-0 brightness-50"
                  />
                  <div className="w-full bg-gradient-to-b from-transparent to-dark mb-auto h-1/2 absolute bottom-0">
                    <h3 className="text-center font-Fig text-yellow text-bold mt-2">
                      {location.name}
                    </h3>
                    <div className="w-full flex justify-between items-center px-2">
                      <p className="text-yellow font-Fig flex items-center">
                        <FaLocationPin size={20} />
                        <span className="text-white">{location.country}</span>
                      </p>
                      <p className="font-Fig text-white">{location.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* ----- Carousel Buttons */}
      <div className="flex justify-evenly items-center">
        <div
          className="bg-yellow text-dark rounded-full h-12 w-12 flex justify-center items-center"
          onClick={() => handlePrevIndex(currentIndex, data)}
        >
          <IoIosArrowRoundBack size={40} />
        </div>
        <div
          onClick={() => handleNextIndex(currentIndex, data)}
          className="bg-yellow text-dark rounded-full h-12 w-12 flex justify-center items-center"
        >
          <IoIosArrowRoundForward size={40} />
        </div>
      </div>
    </div>
  );
};

export default ContinentsCarousel;
