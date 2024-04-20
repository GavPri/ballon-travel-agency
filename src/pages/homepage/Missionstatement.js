import React from "react";
import FetchData from "../../api/FetchData";
import ProcessData from "../../api/ProcessData";

const Missionstatement = () => {
  // ----- Fetch data from the specified endpoint
  const { data, isLoading, errors } = FetchData(
    "gavpri/ballon-travel-agency/db"
  );

  // ----- Set Loading state
  if (isLoading) {
    return <div> Loading... </div>;
  }

  // ----- Set Error state
  if (errors) {
    return <div>Oops, there was an error... {errors.message}</div>;
  }
  return (
    // ----- Wrapping Div
    <div className="max-w-[1240px] m-auto">
      {/* ----- Section Header */}
      <div className="w-full text-center">
        <h2 className="uppercase text-xl md:text-5xl text-yellow font-M header-spacing">
          Th<span className="stand-out">e</span> Art of <br></br> tail
          <span className="stand-out">o</span>red tr
          <span className="stand-out">a</span>vel
        </h2>
      </div>
      {/* ----- Mapping Over fetched data */}
      <div>
        {data &&
          Object.values(data.company_info.missions_and_stats).map((mission) => (
            <div key={mission.heading}>
              <h3>{mission.heading}</h3>
              <p>{mission.description}</p>
              <div>{mission.icon}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Missionstatement;
