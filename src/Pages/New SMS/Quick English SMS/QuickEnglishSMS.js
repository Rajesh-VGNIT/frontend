import React from 'react'
import './QuickEnglishSMS.css'
import { NavLink } from 'react-router-dom'


const QuickEnglishSMS = () => {
  return (
    <div className='quickE'>
    <nav className='quickE1'>
    <ul>
      <li><NavLink to="/QuickSMS">Quick SMS</NavLink></li>
      <li><NavLink to= "/ViewSchedule">View Schedule</NavLink></li>
    </ul>
  </nav>
    </div>
  )
}

export default QuickEnglishSMS;