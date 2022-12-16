import React from 'react'
import { dashboardData } from './validateLogin'

const DashboardPage = async (): Promise<React.ReactElement> => {
  const data = await dashboardData()
  console.log(data)
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default DashboardPage
