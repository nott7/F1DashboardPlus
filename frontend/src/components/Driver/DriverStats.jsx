import React from "react";

const DriverStats = () => {
  return (
    <div className="driver-stats_container">
      <h2>Statistics</h2>
      <ul className="driver-stats_list">
        <li className="driver-stats_item">
          <h3>Grand Prix Entered</h3>
          <p>111</p>
        </li>
        <li className="driver-stats_item">
          <h3>Grand Prix Won</h3>
          <p>5</p>
        </li>
        <li className="driver-stats_item">
          <h3>Best Final Result</h3>
          <p>2º</p>
        </li>
        <li className="driver-stats_item">
          <h3>Podiums</h3>
          <p>25</p>
        </li>
        <li className="driver-stats_item">
          <h3>Pole Positions</h3>
          <p>19</p>
        </li>
        <li className="driver-stats_item">
          <h3>Career points</h3>
          <p>922</p>
        </li>
      </ul>
    </div>
  );
};

export default DriverStats;
