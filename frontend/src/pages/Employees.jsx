import React, { useState, useEffect } from "react";
import axios from "axios";
import { TeamContext } from "../contexts/TeamContext";
import Header from "../components/Header";
import EmployeesHeader from "../components/Employees/EmployeesHeader";
import Modal from "../components/Modal";
import UpdateModal from "../components/UpdateModal";
import ListItem from "../components/ListItem";
import Loader from "../components/Loader";

const Employees = () => {
  const { team } = React.useContext(TeamContext);
  const [modal, setModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState();
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    const res = await axios.get(
      `http://localhost:3000/teams/${team._id}/employees`
    );
    const employees = res.data;
    setEmployees(employees);
    setLoading(false);
  };

  const getEmployee = async (employee) => {
    setEmployee(employee);
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
    fetchEmployees();
  }, [modal, updateModal]);

  return (
    <>
      {(modal || updateModal) && (
        <div className="backdrop" onClick={closeModal}></div>
      )}
      <Header />
      <main className="employees-container">
        <EmployeesHeader showModal={() => showModal(false)} />
        {loading ? (
          <Loader />
        ) : (
          <ul>
            {employees.map((employee) => (
              <li key={employee._id} className="list-item">
                <ListItem
                  person={employee}
                  fetchEmployees={fetchEmployees}
                  showModal={() => showModal(true)}
                  getEmployee={getEmployee}
                />
              </li>
            ))}
          </ul>
        )}
      </main>
      {modal && <Modal closeModal={() => closeModal(false)} page="employees" />}
      {updateModal && (
        <UpdateModal
          closeModal={() => closeModal(true)}
          person={employee}
          page="employees"
        />
      )}
    </>
  );
};

export default Employees;
