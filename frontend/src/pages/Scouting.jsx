import React, {useState} from "react";
import Header from "../components/Header";
import ScoutingHeader from "../components/Scouting/ScoutingHeader";
import Modal from "../components/Modal";

const Scouting = () => {
  const [modal, setModal] = useState(false);

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
      </main>

      {modal && <Modal closeModal={closeModal} page="scouting"/>}
    </>
  );
};

export default Scouting;
