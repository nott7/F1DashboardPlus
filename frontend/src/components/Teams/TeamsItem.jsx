import React from "react";
import { Link } from "react-router-dom";

const TeamItem = ({team}) => {
  return (
      <Link to={`/teams/${team._id}`}>
        <img src={team.imgUrl} alt="team logo" />
        <p>{team.name}</p>
      </Link>
  );
};

export default TeamItem;
