import React, { useState, useEffect } from "react";
import axios from "axios";
import { TeamContext } from "../contexts/TeamContext";
import Header from "../components/Header";
import ScoutingHeader from "../components/Scouting/ScoutingHeader";
import Modal from "../components/Modal";
import ListItem from "../components/ListItem";

const Scouting = () => {
  const { team } = React.useContext(TeamContext);

  const [modal, setModal] = useState(false);
  const [scoutedDrivers, setScoutedDrivers] = useState([]);
  const [scoutedDriver, setScoutedDriver] = useState();
  async function fetchScoutedDrivers() {
    const res = await axios.get(
      `http://localhost:3000/teams/${team._id}/scoutedDrivers`
    );
    const scoutedDrivers = res.data;
    setScoutedDrivers(scoutedDrivers);
  }
  function getScoutedDriver(scoutedDriver) {
    setScoutedDriver(scoutedDriver);
  }
  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    fetchScoutedDrivers();
  }, [modal]);

  return (
    <>
      {modal && <div className="backdrop" onClick={closeModal}></div>}
      <Header />
      <main className="scouting-container">
        <ScoutingHeader showModal={showModal} />
        <ul>
          {scoutedDrivers.map((scoutedDriver) => (
            <li key={scoutedDriver._id} className="list-item">
              <ListItem
                person={scoutedDriver}
                fetchScoutedDrivers={fetchScoutedDrivers}
                showModal={showModal}
                getScoutedDriver={getScoutedDriver}
              />
            </li>
          ))}
        </ul>
      </main>

      {modal && (
        <Modal closeModal={closeModal} person={scoutedDriver} page="scouting" />
      )}
    </>
  );
};

export default Scouting;
