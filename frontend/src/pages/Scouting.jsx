import React, { useState, useEffect } from "react";
import axios from "axios";
import { TeamContext } from "../contexts/TeamContext";
import Header from "../components/Header";
import ScoutingHeader from "../components/Scouting/ScoutingHeader";
import Modal from "../components/Modal";
import UpdateModal from "../components/UpdateModal";
import ListItem from "../components/ListItem";
import Loader from "../components/Loader";

const Scouting = () => {
  const { team } = React.useContext(TeamContext);
  const [modal, setModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [scoutedDrivers, setScoutedDrivers] = useState([]);
  const [scoutedDriver, setScoutedDriver] = useState();
  const [loading, setLoading] = useState(true);

  const fetchScoutedDrivers = async () => {
    const res = await axios.get(
      `http://localhost:3000/teams/${team._id}/scoutedDrivers`
    );
    const scoutedDrivers = res.data;
    setScoutedDrivers(scoutedDrivers);
    setLoading(false);
  };

  const getScoutedDriver = (scoutedDriver) => {
    setScoutedDriver(scoutedDriver);
  };

  const showModal = (isUpdate) => {
    if (isUpdate) {
      setUpdateModal(true);
    } else {
      setModal(true);
    }
  };

  const closeModal = (isUpdate) => {
    if (isUpdate) {
      setUpdateModal(false);
    } else {
      setModal(false);
    }
  };

  useEffect(() => {
    fetchScoutedDrivers();
  }, [modal, updateModal]);

  return (
    <>
      {(modal || updateModal) && (
        <div className="backdrop" onClick={closeModal}></div>
      )}
      <Header />
      <main className="scouting-container">
        <ScoutingHeader showModal={() => showModal(false)} />
        {loading ? ( 
          <Loader />
        ) : (

        <ul>
          {scoutedDrivers.map((scoutedDriver) => (
            <li key={scoutedDriver._id} className="list-item">
              <ListItem
                person={scoutedDriver}
                fetchScoutedDrivers={fetchScoutedDrivers}
                showModal={() => showModal(true)}
                getScoutedDriver={getScoutedDriver}
              />
            </li>
          ))}
        </ul>
        )}
      </main>

      {modal && <Modal closeModal={() => closeModal(false)} page="scouting" />}
      {updateModal && (
        <UpdateModal
          closeModal={() => closeModal(true)}
          person={scoutedDriver}
          page="scouting"
        />
      )}
    </>
  );
};

export default Scouting;
