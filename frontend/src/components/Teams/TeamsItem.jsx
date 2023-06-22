import React from "react";
import { Link } from "react-router-dom";
import TeamImage from "../../assets/team-logo.png";

const TeamItem = () => {
  return (
    <li className="teams-item">
      <Link to="/teams/1">
        <img src={TeamImage} alt="team logo" />
        <p>Scuderia Ferrari </p>
      </Link>
    </li>
  );
};

export default TeamItem;
