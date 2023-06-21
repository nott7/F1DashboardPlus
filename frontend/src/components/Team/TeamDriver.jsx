import React from "react";
import TeamDriverImage from "../../assets/team-driver.png";

const TeamDriver = () => {
  return (
    <div className="team-driver_container">
      <img src={TeamDriverImage} alt="Team Driver" />
      <h2>Charles Leclerc</h2>
    </div>
  );
};

export default TeamDriver;
