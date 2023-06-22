import React from "react";
import TeamDriver from "./TeamDriver";
import { Link } from "react-router-dom";

const TeamDrivers = () => {
  return (
    <section className="team-drivers">
      <h2>Drivers</h2>
      <ul className="team-drivers-list">
        <li className="team-driver">
          <Link to="/teams/1/drivers/1">
            <TeamDriver />
          </Link>
        </li>
        <li className="team-driver">
          <Link to="/teams/1/drivers/1">
            <TeamDriver />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default TeamDrivers;
