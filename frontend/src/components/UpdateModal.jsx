import React, { useState } from "react";
import { TeamContext } from "../contexts/TeamContext";

import axios from "axios";

const updateModal = ({ closeModal, page, person }) => {
  const { team } = React.useContext(TeamContext);
  const [formData, setFormData] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await axios.put(
      `http://localhost:3000/teams/${team._id}/${
        page === "scouting" ? "scoutedDrivers" : "employees"
      }/${person._id}`,
      formData
    );
    closeModal();
  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="modal-container">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            placeholder={person.name}
          />
        </div>
        <div className="form-item">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            name="surname"
            id="surname"
            onChange={handleChange}
            placeholder={person.surname}
          />
        </div>
        <div className="form-item">
          <label htmlFor="birthDate">Birth Date</label>
          <input
            type="date"
            name="birthDate"
            id="birth-date"
            onChange={handleChange}
            placeholder={person.birthDate}
          />
        </div>

        {page === "scouting" && (
          <div className="form-item">
            <label htmlFor="category">Category</label>
            <select name="category" id="category" onChange={handleChange}>
              <option value="">Choose One...</option>
              <option value="Formula 2">Formula 2</option>
              <option value="Formula 3">Formula 3</option>
              <option value="Formula E">Formula E</option>
              <option value="IndyCar Series">IndyCar Series</option>
              <option value="World Endurance Championship">
                World Endurance Championship
              </option>
            </select>
          </div>
        )}

        {page === "employees" && (
          <div className="form-item">
            <label htmlFor="jobRole">Job Role</label>
            <select name="jobRole" id="job-role" onChange={handleChange}>
            <option value="">Choose One...</option>
              <option value="Aerodynamic Engineer">Aerodynamic Engineer</option>
              <option value="Race Engineer">Race Engineer</option>
              <option value="Data Engineer">Data Engineer</option>
              <option value="Pit Crew Mechanic">Pit Crew Mechanic</option>
              <option value="Race Strategist">Race Strategist</option>
            </select>
          </div>
        )}
        <div className="form-item">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="1"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-item">
          <button type="button" onClick={closeModal}>
            Close
          </button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default updateModal;
