import React, { useState, useEffect } from "react";
// ----- import fetch data hook.
import FetchData from "../../api/FetchData";

const ContinentsCarousel = () => {
  // ----- fetch and deconstruct data from api end point.
  const { data, isLoading, errors } = FetchData(
    "gavpri/ballon-travel-agency/db"
  );
  // ----- set state for carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedContinent, setSelectedContinent] = useState(null);

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
      <div className="flex flex-wrap gap-1 justify-center">
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
      <div className="w-[90vw] h-[40vh]">
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
                    className="w-full h-full object-cover absolute top-0 left-0"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContinentsCarousel;
