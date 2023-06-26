import React from 'react'

const ScoutingHeader = ({showModal}) => {

  return (
    <header className='scouting-header'>
        <h1>Scouting</h1>
        <button onClick={showModal}>Add Driver</button>
    </header>
  )
}

export default ScoutingHeader