import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import TeamHeader from "../components/Team/TeamHeader";
import TeamDrivers from "../components/Team/TeamDrivers";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const Team = () => {
  const { id } = useParams();
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      const res = await axios.get(`http://localhost:3000/teams/${id}`);
      setTeam(res.data);
      setLoading(false);
    };

    fetchTeam();
  }, [id]);

  return (
    <>
      <Header />
      <main className="team-container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <TeamHeader team={team} />
            <TeamDrivers driversIDs={team.drivers} />
          </>
        )}
      </main>
    </>
  );
};

export default Team;
