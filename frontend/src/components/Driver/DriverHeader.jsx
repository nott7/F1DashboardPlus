import React from "react";
import DriverImage from "../../assets/team-driver.png";

const DriverHeader = () => {
  return (
    <header className="driver-header">
      <div className="driver-header_left">
        <img src={DriverImage} alt="Driver" />
      </div>
      <div className="driver-header_right">
        <h1>Charles Leclerc</h1>
        <div className="driver-details">
          <p>Nato il: 16/10/1997</p>
          <p>Luogo di nascita: Monte Carlo, Monaco</p>
          <p>Numero: 16</p>
        </div>
      </div>
    </header>
  );
};

export default DriverHeader;
