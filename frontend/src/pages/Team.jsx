import React from 'react'
import Header from '../components/Header'
import TeamHeader from '../components/Team/TeamHeader'
import TeamDrivers from '../components/Team/TeamDrivers'

const Team = () => {
  return (
    <>
    <Header />
    <main className="team-container">
        <TeamHeader />
        <TeamDrivers />
    </main>
    </>

  )
}

export default Team