import React from "react";

const TeamHeader = ({ team }) => {
  return (
    <header className="team-header">
      <div className="team-header_left">
        <img src={team.imgUrl} alt="Team Logo" />
      </div>
      <div className="team-header_right">
        <h1>{team.name}</h1>
        <div className="team-details">
          <p>Team Principal: {team.teamPrincipal}</p>
          <p>Team World Championships: {team.teamsWorldChampionships}</p>
          <p>Driver World Championships: {team.driversWorldChampionships}</p>
        </div>
      </div>
    </header>
  );
};

export default TeamHeader;
