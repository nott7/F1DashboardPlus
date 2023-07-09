import React, { useState, useEffect } from "react";
import axios from "axios";
import { TeamContext } from "../contexts/TeamContext";
import Header from "../components/Header";
import EmployeesHeader from "../components/Employees/EmployeesHeader";
import Modal from "../components/Modal";
import ListItem from "../components/ListItem";

const Employees = () => {
  const { team } = React.useContext(TeamContext);
  const [modal, setModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState();
  async function fetchEmployees() {
    const res = await axios.get(
      `http://localhost:3000/teams/${team._id}/employees`
    );
    const employees = res.data;
    setEmployees(employees);
  }
  function getEmployee(employee) {
    setEmployee(employee);
  }
  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    fetchEmployees();
  }, [modal]);

  return (
    <>
      {modal && <div className="backdrop" onClick={closeModal}></div>}
      <Header />
      <main className="employees-container">
        <EmployeesHeader showModal={showModal} />
        <ul>
          {employees.map((employee) => (
            <li key={employee._id} className="list-item">
              <ListItem
                person={employee}
                fetchEmployees={fetchEmployees}
                showModal={showModal}
                getEmployee={getEmployee}
              />
            </li>
          ))}
        </ul>
      </main>
      {modal && <Modal closeModal={closeModal} person={employee} page="employees" />}
    </>
  );
};

export default Employees;
