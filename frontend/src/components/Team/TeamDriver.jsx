import React from "react";
const TeamDriver = ({ driver }) => {
  return (
    <div className="team-driver_container">
      <img src={driver.imgUrl} alt="Team Driver" />
      <h2>
        {driver.name} {driver.surname}
      </h2>
    </div>
  );
};

export default TeamDriver;
