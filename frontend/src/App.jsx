import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import Teams from './pages/Teams'
import Driver from './pages/Driver'
import Employees from './pages/Employees'
import Scouting from './pages/Scouting'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<Team />} />
        <Route path="/teams/:id/drivers/:id" element={<Driver />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/scouting" element={<Scouting />} />

      </Routes>
    </>
  )
}

export default App
