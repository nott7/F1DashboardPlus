import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import TeamsItem from "../components/Teams/TeamsItem";
import Loader from "../components/Loader";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      const res = await axios.get("http://localhost:3000/teams");
      const teams = res.data;
      setTeams(teams);
      setLoading(false);
    };

    fetchTeams();
  }, []);

  return (
    <>
      <Header />
      <main className="teams-container">
        <h1>Teams</h1>
        {loading ? (
          <Loader />
        ) : (
          <ul className="teams-list">
            {teams.map((team) => (
              <li className="teams-item" key={team._id}>
                <TeamsItem team={team} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
};

export default Teams;
