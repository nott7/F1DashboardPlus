import React from "react";

const Loader = ({ isWhite }) => {
  return <div className={isWhite ? "loader white" : "loader"}></div>;
};

export default Loader;
