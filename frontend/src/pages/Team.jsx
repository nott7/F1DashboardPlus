import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import TeamHeader from "../components/Team/TeamHeader";
import TeamDrivers from "../components/Team/TeamDrivers";
import { useParams } from "react-router-dom";
import axios from "axios";

const Team = () => {
  const { id } = useParams();
  const [team, setTeam] = useState({});
  //cambiare immagine alfaromeo

  useEffect(() => {
    async function fetchTeam() {
      const res = await axios.get(`http://localhost:3000/teams/${id}`);
      setTeam(res.data);
    }
    fetchTeam();
  }, [id]);

  return (
    <>
      <Header/>
      <main className="team-container">
        <TeamHeader team = {team}/>
        <TeamDrivers driversIDs = {team.drivers}/>
      </main>
    </>
  );
};

export default Team;
