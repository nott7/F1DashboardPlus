import React, { useState, useEffect } from "react";
import TeamDriver from "./TeamDriver";
import { Link } from "react-router-dom";

const TeamDrivers = ({team}) => {
//TODO fetch drivers
  return (
    <section className="team-drivers">
      <h2>Drivers</h2>
      <ul className="team-drivers-list">
        <li className="team-driver">
          <Link to="/drivers/1">
            <TeamDriver />
          </Link>
        </li>
        <li className="team-driver">
          <Link to="/drivers/1">
            <TeamDriver />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default TeamDrivers;
