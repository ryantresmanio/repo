import React from 'react'
import { Notificationss } from './Notificationss'
import { Transaction } from './Transaction'
import { Books } from './Books'



export const Dashboard = () => {
  return (
    <div>
      <Notificationss/>
<Transaction/>
      <Books/>
    </div>

  )
}