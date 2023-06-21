import React from "react";
import TeamLogoImage from "../../assets/team-logo.png";

const TeamHeader = () => {
  return (
    <header className="team-header">
      <div className="team-header_left">
        <img src={TeamLogoImage} alt="Team Logo" />
      </div>
      <div className="team-header_right">
        <h1>Scuderia Ferrari</h1>
        <div className="team-details">
            <p>Team Principal: Frédéric Vasseur</p>
            <p>Team World Championships: 16</p>
            <p>Driver World Championships: 15</p>
        </div>
      </div>
    </header>
  );
};

export default TeamHeader;
