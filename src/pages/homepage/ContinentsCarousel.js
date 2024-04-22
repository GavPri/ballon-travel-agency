import React from "react";
// ----- import fetch data hook. 
import FetchData from "../../api/FetchData";

const ContinentsCarousel = () => {
    // ----- fetch and deconstruct data from api end point.
    const { data, isLoading, errors} = FetchData('gavpri/ballon-travel-agency/db')

    // ----- set loading states 
    if (isLoading) {
        return <div>...Loading</div>
    }
    // ----- set errors state 
    if (errors) {
        <div>Oops, there was an error... {errors.message}</div>
    }
    
  return (
    <div className="max-w-[90vw] m-auto">
      <h2 className="uppercase text-yellow font-M header-spacing text-xl text-center">
        Disc<span className="stand-out">o</span>ver popula
        <span className="stand-out">r</span> Destin
        <span className="stand-out">a</span>tions
      </h2>
    </div>
  );
};

export default ContinentsCarousel;
