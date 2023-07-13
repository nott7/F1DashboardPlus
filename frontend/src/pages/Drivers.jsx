import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import DriversItem from "../components/Drivers/DriversItem";
import Loader from "../components/Loader";

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrivers = async () => {
      const res = await axios.get("http://localhost:3000/drivers");
      const drivers = res.data;
      setDrivers(drivers);
      setLoading(false);
    };
    fetchDrivers();
  }, []);

  return (
    <>
      <Header />
      <main className="drivers-container">
        <h1>Drivers</h1>
        {loading ? (
          <Loader />
        ) : (
          <ul className="drivers-list">
            {drivers.map((driver) => (
              <li className="drivers-item" key={driver._id}>
                <DriversItem driver={driver} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
};

export default Drivers;
