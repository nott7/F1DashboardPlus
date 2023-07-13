import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import DriverHeader from "../components/Driver/DriverHeader";
import DriverStats from "../components/Driver/DriverStats";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import axios from "axios";

const Driver = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDriver = async () => {
      const res = await axios.get(`http://localhost:3000/drivers/${id}`);
      setDriver(res.data);
      setLoading(false);
    };
    fetchDriver();
  }, [id]);

  return (
    <>
      <Header />
      <main className="driver-container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <DriverHeader driver={driver} />
            <DriverStats driver={driver} />
          </>
        )}
      </main>
    </>
  );
};

export default Driver;
