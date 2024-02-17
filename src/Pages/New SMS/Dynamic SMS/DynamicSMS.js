import React from 'react'
import './DynamicSMS.css';
import { NavLink } from 'react-router-dom'

const DynamicSMS = () => {
  return (
    <div className='dynamicSms'>
    <nav className='dynamicSms1'>
    <ul>
      <li><NavLink to="/DynamicSMS1">Dynamic SMS</NavLink></li>
      <li><NavLink to= "/ViewSchedule">View Schedule</NavLink></li>
    </ul>
  </nav>
    </div>
  )
}

export default DynamicSMS;
