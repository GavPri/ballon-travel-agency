import React from "react";

const BackgroundImage = ({
  imageUrl,
  height,
  className,
  backgroundPosition,
}) => {
  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: backgroundPosition || "center",
    width: "100%",
    height: height || "400px",
  };
  return <div style={divStyle} className={className}></div>;
};

export default BackgroundImage;
