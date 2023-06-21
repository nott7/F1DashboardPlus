import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import Driver from './pages/Driver'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams/:id" element={<Team />} />
        <Route path="/drivers/:id" element={<Driver />} />

      </Routes>
    </>
  )
}

export default App
