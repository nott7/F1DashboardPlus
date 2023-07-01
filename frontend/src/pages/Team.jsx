import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import TeamHeader from "../components/Team/TeamHeader";
import TeamDrivers from "../components/Team/TeamDrivers";
import { useParams } from "react-router-dom";
import axios from "axios";

const Team = () => {
  const { id } = useParams();
  const [team, setTeam] = useState({});

  useEffect(() => {
    async function fetchTeam() {
      console.log(id);
      const res = await axios.get(`http://localhost:3000/teams/${id}`);
      setTeam(res.data);
      console.log(res.data);
    }
    fetchTeam();
  }, [id]);

  return (
    <>
      <Header teamName={team.name}/>
      <main className="team-container">
        <TeamHeader team = {team}/>
        <TeamDrivers team = {team}/>
      </main>
    </>
  );
};

export default Team;
