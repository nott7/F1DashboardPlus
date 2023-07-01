import React from "react";

const DriverStats = ({driver}) => {
  return (
    <div className="driver-stats_container">
      <h2>Statistics</h2>
      <ul className="driver-stats_list">
        <li className="driver-stats_item">
          <h3>Grand Prix Entered</h3>
          <p>{driver.grandPrixEntered}</p>
        </li>
        <li className="driver-stats_item">
          <h3>Grand Prix Won</h3>
          <p>{driver.grandPrixWins}</p>
        </li>
        <li className="driver-stats_item">
          <h3>Best Final Result</h3>
          <p>{driver.bestFinalResult ? `${driver.bestFinalResult}°`: "First Season"}</p>
        </li>
        <li className="driver-stats_item">
          <h3>World Championships</h3>
          <p>{driver.worldChampionships}</p>
        </li>
        <li className="driver-stats_item">
          <h3>Pole Positions</h3>
          <p>{driver.polePositions}</p>
        </li>
        <li className="driver-stats_item">
          <h3>Career points</h3>
          <p>{driver.careerPoints}</p>
        </li>
      </ul>
    </div>
  );
};

export default DriverStats;
