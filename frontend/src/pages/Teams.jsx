import React from "react";
import Header from "../components/Header";
import TeamsItem from "../components/Teams/TeamsItem";

const Teams = () => {
  return (
    <>
      <Header />
      <main className="teams-container">
        <h1>Teams</h1>
        <ul className="teams-list">
          <TeamsItem />
          <TeamsItem />
          <TeamsItem />
          <TeamsItem />
          <TeamsItem />
          <TeamsItem />
          <TeamsItem />
          <TeamsItem />
          <TeamsItem />
          <TeamsItem />
        </ul>
      </main>
    </>
  );
};

export default Teams;
