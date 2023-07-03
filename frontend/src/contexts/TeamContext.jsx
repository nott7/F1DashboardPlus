import React, { createContext, useState } from "react";

export const TeamContext = createContext();

export const TeamContextProvider = ({ children }) => {
  const [team, setTeam] = useState({});

  const setCurrentTeam = (team) => {
    setTeam(team);
  };


  return (
    <TeamContext.Provider value={{ team, setCurrentTeam }}>
      {children}
    </TeamContext.Provider>
  );
};
