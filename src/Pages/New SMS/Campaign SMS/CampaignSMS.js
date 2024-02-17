import React from 'react'
import './CampaignSMS.css';
import { NavLink } from 'react-router-dom'

const CampaignSMS = () => {
  return (
    <div className='campSms'>
    <nav className='campSms1'>
    <ul>
      <li><NavLink to="/CampaignSMS1">Campaign SMS</NavLink></li>
      <li><NavLink to= "/ViewSchedule">View Schedule</NavLink></li>
    </ul>
  </nav>
    </div>
  )
}

export default CampaignSMS;