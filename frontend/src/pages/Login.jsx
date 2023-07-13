import React, { useState, useContext } from "react";
import { TeamContext } from "../contexts/TeamContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { setCurrentTeam } = useContext(TeamContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    });
    if (res.data.error) {
      setError(true);
    } else {
      const teamID = res.data.teamID;
      const teamName = res.data.teamName;
      setCurrentTeam({ _id: teamID, name: teamName });
      navigate(`/teams/${teamID}`);
    }
  }
  return (
    <div className="login-container">
      <h1 className="login-title">F1Dashboard+</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {error && <p className="login-error">Email or Password is incorrect</p>}
        <button className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
