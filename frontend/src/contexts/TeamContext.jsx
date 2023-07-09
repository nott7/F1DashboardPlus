import React, { createContext, useState } from "react";

export const TeamContext = createContext();

export const TeamContextProvider = ({ children }) => {
  const [team, setTeam] = useState({});

  const setCurrentTeam = (team) => {
    setTeam(team);
  };

  const logout = () => {
    setTeam({});
  };


  return (
    <TeamContext.Provider value={{ team, setCurrentTeam, logout}}>
      {children}
    </TeamContext.Provider>
  );
};
