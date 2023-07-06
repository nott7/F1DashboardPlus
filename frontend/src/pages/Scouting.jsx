import React, {useState, useEffect} from "react";
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

  useEffect(() => {
    async function fetchScoutedDrivers() {
      const res = await axios.get(`http://localhost:3000/teams/${team._id}/scoutedDrivers`);
      const scoutedDrivers = res.data.scoutedDrivers;
      setScoutedDrivers(scoutedDrivers);
    }
    fetchScoutedDrivers();
  }, [modal]);

  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {modal && <div className="backdrop" onClick={closeModal}></div>}
      <Header />
      <main className="scouting-container">
        <ScoutingHeader showModal={showModal} />
        <ul>
        {scoutedDrivers.map((scoutedDriver) => (
            <li key={scoutedDriver._id} className="list-item">
            <ListItem person={scoutedDriver}/>
            </li>
          ))}
        </ul>
      </main>

      {modal && <Modal closeModal={closeModal} page="scouting"/>}
    </>
  );
};

export default Scouting;
