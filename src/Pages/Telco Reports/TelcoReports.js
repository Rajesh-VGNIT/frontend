import React from 'react'
import './TelcoReport.css';
import { NavLink } from 'react-router-dom';

const TelcoReports = () => {
  return (
    <div className='telco'>
    <nav className='telco1'>
    <ul>
      <li><NavLink to="/PartnerSummary">Partner Summary</NavLink></li>
      <li><NavLink to="/TUCSummary">TUC Summary</NavLink></li>
    </ul>
  </nav>
      
    </div>
  )
}

export default TelcoReports;