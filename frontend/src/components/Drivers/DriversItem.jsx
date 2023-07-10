import React from "react";
import { Link } from "react-router-dom";

const DriversItem = ({driver}) => {
  return (
      <Link to={`/drivers/${driver._id}`}>
        <img src={driver.imgUrl} alt="driver face" />
        <p>{driver.name} {driver.surname}</p>
      </Link>
  );
};

export default DriversItem;
