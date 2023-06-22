import React from "react";
import Header from "../components/Header";
import DriverHeader from "../components/Driver/DriverHeader";
import DriverStats from "../components/Driver/DriverStats";

const Driver = () => {
  return (
    <>
      <Header />
      <main className="driver-container">
        <DriverHeader />
        {/* TODO: Far si che DriverDetails sia un menu a tendina */}
        <DriverStats />
      </main>
    </>
  );
};

export default Driver;
