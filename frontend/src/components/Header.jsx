import React from "react";
import { Link } from "react-router-dom";
import { TeamContext } from "../contexts/TeamContext";

const Header = () => {
  const { team } = React.useContext(TeamContext);
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
        <button className="header-button">Logout</button>
        </div>
      </div>
      <nav className="header-bottom">
        <ul className="header-nav">
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
            <Link to="/employees">
              <p className="header-nav-item-link">Employees</p>
            </Link>
          </li>
          <li className="header-nav-item">
            <Link to="/scouting">
              <p className="header-nav-item-link">Scouting</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
