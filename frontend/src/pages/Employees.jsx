import React from 'react'
import Header from '../components/Header'
import EmployeesHeader from '../components/Employees/EmployeesHeader'

const Employees = () => {
  return (
    <>
        <Header />
        <main className="employees-container">
            <EmployeesHeader />

        </main>
    </>
  )
}

export default Employees