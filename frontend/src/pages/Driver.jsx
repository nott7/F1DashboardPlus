import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import DriverHeader from "../components/Driver/DriverHeader";
import DriverStats from "../components/Driver/DriverStats";
import { useParams } from "react-router-dom";
import axios from "axios";

const Driver = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState({});

  useEffect(() => {
    async function fetchDriver() {
      const res = await axios.get(`http://localhost:3000/drivers/${id}`);
      setDriver(res.data);
    }
    fetchDriver();
  }, [id]);

  return (
    <>
      <Header />
      <main className="driver-container">
        <DriverHeader driver={driver} />
        <DriverStats driver={driver} />
      </main>
    </>
  );
};

export default Driver;
