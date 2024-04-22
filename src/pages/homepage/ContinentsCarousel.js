import React from "react";
// ----- import fetch data hook.
import FetchData from "../../api/FetchData";

const ContinentsCarousel = () => {
  // ----- fetch and deconstruct data from api end point.
  const { data, isLoading, errors } = FetchData(
    "gavpri/ballon-travel-agency/db"
  );

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
            key={index}
            className="p-1 bg-[#006400] font-Fig text-white basis-[30%] rounded-lg flex justify-center items-center"
          >
            {continent.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinentsCarousel;
