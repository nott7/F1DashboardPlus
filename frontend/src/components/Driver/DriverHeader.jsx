import React from "react";

const DriverHeader = ({driver}) => {
  return (
    <header className="driver-header">
      <div className="driver-header_left">
        <img src={driver.imgUrl} alt="Driver" />
      </div>
      <div className="driver-header_right">
        <h1>{driver.name} {driver.surname}</h1>
        <div className="driver-details">
          <p>Born on: {driver.birthDate}</p>
          <p>Place of Birth: {driver.birthPlace}</p>
          <p>Number: {driver.carNumber}</p>
        </div>
      </div>
    </header>
  );
};

export default DriverHeader;
