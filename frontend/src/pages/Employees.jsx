import React, {useState, useEffect} from "react";
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

  useEffect(() => {
    async function fetchEmployees() {
      const res = await axios.get(`http://localhost:3000/teams/${team._id}/employees`);
      const employees = res.data.employees;
      setEmployees(employees);
    }
    fetchEmployees();
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
      <main className="employees-container">
        <EmployeesHeader showModal={showModal}/>
        <ul>
          {employees.map((employee) => (
            <li key={employee._id} className="list-item">
            <ListItem person={employee}/>
            </li>
          ))}
        </ul>
      </main>
      {modal && <Modal closeModal={closeModal} page="employees"/>}
    </>
  );
};

export default Employees;
