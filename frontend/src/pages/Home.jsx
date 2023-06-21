import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">F1Dashboard+</h1>
      <p className="home-description">The Best Dashboard for Team Principals</p>
      <p className="home-details">
        Revolutionize Formula 1 team management. Our web app offers login-only
        access for Team Principals, providing drivers and teams insights, driver
        scouting, and team member management.
      </p>
      {/* TODO: Add link to login page */}
      <Link to="/teams/1">
        <button className="home-button">Monitor Your Team!</button>
      </Link>
    </div>
  );
};

export default Home;
