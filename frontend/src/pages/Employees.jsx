import React, {useState} from "react";
import Header from "../components/Header";
import EmployeesHeader from "../components/Employees/EmployeesHeader";
import Modal from "../components/Modal";
import ListItem from "../components/ListItem";

const Employees = () => {
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
      <main className="employees-container">
        <EmployeesHeader showModal={showModal}/>
        <ul>
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </main>
      {modal && <Modal closeModal={closeModal} page="employees"/>}
    </>
  );
};

export default Employees;
