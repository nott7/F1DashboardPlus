import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-top">
        <Link to="/teams/1">
          <p className="header-app_name">F1Dashboard+</p>
        </Link>
        <h1 className="header-team_name">Scuderia Ferrari</h1>
        <button className="header-button">Logout</button>
      </div>
      <nav className="header-bottom">
        <ul className="header-nav">
          <li className="header-nav-item">
            <Link to="/teams/1">
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