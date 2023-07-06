import "./App.scss";
import { Routes, Route, Router } from "react-router-dom";
import { TeamContextProvider } from "./contexts/TeamContext";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Teams from "./pages/Teams";
import Driver from "./pages/Driver";
import Employees from "./pages/Employees";
import Scouting from "./pages/Scouting";
import Login from "./pages/Login";

function App() {
  //TODO - gestire quando non sei loggato
  return (
    <>
      <TeamContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:id" element={<Team />} />
            <Route path="/drivers/:id" element={<Driver />} />
            <Route path="/teams/:id/employees" element={<Employees />} />
            <Route path="/teams/:id/scouting" element={<Scouting />} />
          </Routes>
      </TeamContextProvider>
    </>
  );
}

export default App;
