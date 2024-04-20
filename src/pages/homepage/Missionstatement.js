import React from "react";
import FetchData from "../../api/FetchData";
import { PiTreeEvergreenBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { TbRobot } from "react-icons/tb";

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

  // Array of Icons to Loop through
  const MissionIcons = [
    <PiTreeEvergreenBold size={30} />,
    <IoLocationOutline size={30} />,
    <TbRobot size={30} />,
  ];

  return (
    // ----- Wrapping Div
    <div className="max-w-[1240px] m-auto">
      {/* ----- Section Header */}
      <div className="w-full text-center mb-4">
        <h2 className="uppercase text-xl md:text-5xl text-yellow font-M header-spacing">
          Th<span className="stand-out">e</span> Art of <br></br> tail
          <span className="stand-out">o</span>red tr
          <span className="stand-out">a</span>vel
        </h2>
      </div>
      {/* ----- Mapping Over fetched data */}
      <div className="w-3/4 m-auto">
        {data &&
          Object.values(data.company_info.missions_and_stats).map(
            (mission, index) => (
              <div
                key={mission.heading}
                className="text-white mb-8 max-w-readable"
              >
                {/* ------ H3 container */}
                <div className="flex justify-center items-between">
                  <div className="h-16 aspect-square bg-transparent relative mr-6 flex justify-center items-center">
                    <div className=" text-yellow h-16 flex justify-center items-center z-10">
                      {MissionIcons[index % MissionIcons.length]}
                    </div>

                    <div className="h-10 border-2 border-[#013220] aspect-square rounded-lg top-0 left-0 absolute"></div>
                    <div className="h-10 aspect-square rounded-lg bg-[#013220] right-0  bottom-1 absolute"></div>
                  </div>
                  <h3 className="mb-4 text-2xl font-Fig header-spacing">
                    {mission.heading}
                  </h3>
                </div>
                <p className="font-Fig para-spacing">{mission.description}</p>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Missionstatement;
