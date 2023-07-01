import React, { useState, useEffect } from "react";
import TeamDriver from "./TeamDriver";
import axios from "axios";
import { Link } from "react-router-dom";

const TeamDrivers = ({ driversIDs }) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    async function fetchDrivers() {
      const drivers = [];
      for (let i = 0; i < driversIDs.length; i++) {
        const res = await axios.get(
          `http://localhost:3000/drivers/${driversIDs[i]}`
        );
        const driver = res.data;
        drivers.push(driver);
      }
      setDrivers(drivers);
    }
    fetchDrivers();
  }, [driversIDs]);

  return (
    <section className="team-drivers">
      <h2>Drivers</h2>
      <ul className="team-drivers-list">
        {drivers.map((driver) => (
          <li className="team-driver" key={driver._id}>
            <Link to={`/drivers/${driver._id}`}>
              <TeamDriver driver={driver} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TeamDrivers;
