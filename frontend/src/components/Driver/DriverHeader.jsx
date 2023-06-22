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
          <p>Born on: 16/10/1997</p>
          <p>Place of Birth: Monte Carlo, Monaco</p>
          <p>Number: 16</p>
        </div>
      </div>
    </header>
  );
};

export default DriverHeader;
