import React from "react";

const BackgroundImage = ({ imageUrl, height }) => {
  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: height || "400px",
  };
  return <div style={divStyle}></div>;
};

export default BackgroundImage;
