import React from 'react'
import Card from '../components/dashboard/card/card'
import Transactions from '../components/dashboard/transactions/Transactions'
import Chart from '../components/dashboard/chart/Chart'
import DateTime from '../components/dashboard/date/date'
import Clock from '../components/dashboard/time/Time'

const Dashboard = () => {
  return (
    <div>
      <div className='flex gap-4'>
        <Card />
          <DateTime />
          <Clock />
      </div>
      <div>
      <Transactions />
      </div>
      <div>
      <Chart />
      </div>
 </div>
  )
}

export default Dashboard