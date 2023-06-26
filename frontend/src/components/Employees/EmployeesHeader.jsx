import React from 'react'

const EmployeesHeader = ({showModal}) => {
  return (
    <header className='employees-header'>
        <h1>Employees</h1>
        <button onClick={showModal}>Add Employee</button>
    </header>
  )
}

export default EmployeesHeader