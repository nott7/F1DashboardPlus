import React, { useContext } from "react";
import axios from "axios";
import { TeamContext } from "../contexts/TeamContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({
  person,
  showModal,
  fetchEmployees,
  fetchScoutedDrivers,
  getScoutedDriver,
  getEmployee,
}) => {
  const { team } = useContext(TeamContext);
  const handleDelete = async () => {
    const res = await axios.delete(
      `http://localhost:3000/teams/${team._id}/${
        person.jobRole ? "employees" : "scoutedDrivers"
      }/${person._id}`
    );
    person.jobRole ? fetchEmployees() : fetchScoutedDrivers();
  };

  return (
    <div className="list-item_container">
      <div className="list-item_details">
        <h3>
          {person.name} {person.surname}
        </h3>
        <p>{person.jobRole ? person.jobRole : person.category}</p>
        <p>{person.birthDate}</p>
        <details>
          <summary>Description</summary>
          <p>{person.description}</p>
        </details>
      </div>
      <div className="list-item_settings">
        <button
          className="list-item_settings-button"
          onClick={() => {
            showModal();
            person.jobRole ? getEmployee(person) : getScoutedDriver(person);
          }}
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <button className="list-item_settings-button" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
