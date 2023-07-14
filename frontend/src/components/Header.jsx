import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TeamContext } from "../contexts/TeamContext";

const Header = () => {
  const { team, logout } = useContext(TeamContext);
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await axios.post(`http://localhost:3000/auth/logout`);
    logout();
    navigate("/");
  };

  return (
    <header className="main-header">
      <div className="header-top">
        <div className="header-top_left">
          <Link to={`/teams/${team._id}`}>
            <p className="header-app_name">F1Dashboard+</p>
          </Link>
        </div>
        <div className="header-top_center">
          <h1 className="header-team_name">{team.name}</h1>
        </div>
        <div className="header-top_right">
          <button className="header-button" onClick={handleLogout}>
            Logout
          </button>
          <div className="menu-button" onClick={() => setIsOpened(!isOpened)}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </div>
      </div>
      <nav className="header-bottom">
        <ul className={isOpened ? "header-nav opened" : "header-nav"}>
          <li className="header-nav-item">
            <Link to={`/teams/${team._id}`}>
              <p className="header-nav-item-link">Home</p>
            </Link>
          </li>
          <li className="header-nav-item">
            <Link to="/teams">
              <p className="header-nav-item-link">Teams</p>
            </Link>
          </li>
          <li className="header-nav-item">
            <Link to="/drivers">
              <p className="header-nav-item-link">Drivers</p>
            </Link>
          </li>
          <li className="header-nav-item">
            <Link to={`/teams/${team._id}/employees`}>
              <p className="header-nav-item-link">Employees</p>
            </Link>
          </li>
          <li className="header-nav-item">
            <Link to={`/teams/${team._id}/scouting`}>
              <p className="header-nav-item-link">Scouting</p>
            </Link>
          </li>
          <button onClick={handleLogout}>Logout</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
