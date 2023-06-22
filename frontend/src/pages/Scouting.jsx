import React from 'react'
import Header from '../components/Header'
import ScoutingHeader from '../components/Scouting/ScoutingHeader'

const Scouting = () => {
  return (
    <>
        <Header />
        <main className="scouting-container">
            <ScoutingHeader />

        </main>
    </>
  )
}

export default Scouting