import React from "react";
//TODO: nome non definitivo (forse)
//TODO: aggiungere pulsante per rimuovere l'elemento

const ListItem = () => {
  return (
    <li className="list-item">
      <div className="list-item_left">
        <img src="https://via.placeholder.com/150" alt="placeholder" />
      </div>
      <div className="list-item_right">
        <h3>Name Surname</h3>
        <p>Job Role</p>
        <details>
            <summary>Description</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
        </details>
      </div>
    </li>
  );
};

export default ListItem;
