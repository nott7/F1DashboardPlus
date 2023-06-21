import React from 'react'
import Header from '../components/Header'
import DriverHeader from '../components/Driver/DriverHeader'

const Driver = () => {
  return (
    <>
    <Header />
    <main className="driver-container">
        <DriverHeader />
    </main>
    </>
  )
}

export default Driver