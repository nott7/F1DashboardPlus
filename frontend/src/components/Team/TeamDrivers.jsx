import React, { useState, useEffect } from "react";
import TeamDriver from "./TeamDriver";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Loader";

const TeamDrivers = ({ driversIDs }) => {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrivers = async () => {
      const drivers = [];
      for (let i = 0; i < driversIDs.length; i++) {
        const res = await axios.get(
          `http://localhost:3000/drivers/${driversIDs[i]}`
        );
        const driver = res.data;
        drivers.push(driver);
      }
      setDrivers(drivers);
      setLoading(false);
    };
    fetchDrivers();
  }, [driversIDs]);

  return (
    <section className="team-drivers">
      <h2>Drivers</h2>
      {loading ? (
        <Loader isWhite={true} />
      ) : (
        <>
          <ul className="team-drivers-list">
            {drivers.map((driver) => (
              <li className="team-driver" key={driver._id}>
                <Link to={`/drivers/${driver._id}`}>
                  <TeamDriver driver={driver} />
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default TeamDrivers;
