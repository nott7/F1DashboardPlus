import React from "react";

const Modal = ({closeModal, page}) => {
  return (
    // Todo: Sistemare il fatto che il textarea si espande anche oltre il div
    <div className="modal-container">
      <form action="/da-riempire" method="POST">
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="form-item">
          <label htmlFor="surname">Surname</label>
          <input type="text" name="surname" id="surname" required />
        </div>
        <div className="form-item">
          <label htmlFor="birth-date">Birth Date</label>
          <input type="date" name="birth-date" id="birth-date" required />
        </div>
        <div className="form-item">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" id="image" required />
        </div>
        { page === 'scouting' && (
        <div className="form-item">
          <label htmlFor="category">Category</label>
          <select name="category" id="category" required>
            <option value="Formula 2">Formula 2</option>
            <option value="Formula 3">Formula 3</option>
            <option value="Formula E">Formula E</option>
            <option value="IndyCar Series">IndyCar Series</option>
            <option value="World Endurance Championship">
              World Endurance Championship
            </option>
          </select>
        </div>
        ) }

{ page === 'employees' && (
        <div className="form-item">
          <label htmlFor="job-role">Job Role</label>
          <select name="job-role" id="job-role" required>
            <option value="Aerodynamic Engineer">Aerodynamic Engineer</option>
            <option value="Race Engineer">Race Engineer</option>
            <option value="Data Engineer">Data Engineer</option>
            <option value="Pit Crew Mechanic">Pit Crew Mechanic</option>
            <option value="Race Strategist">
              Race Strategist
            </option>
          </select>
        </div>
        ) }
        <div className="form-item">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="1"
            required
          ></textarea>
        </div>
        <div className="form-item">
        <button type="button" onClick={closeModal}>Close</button>
        <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
