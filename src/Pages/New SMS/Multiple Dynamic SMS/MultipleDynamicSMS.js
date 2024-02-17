import React from 'react'
import './MultipleDynamicSMS.css';
import { NavLink } from 'react-router-dom'

const MultipleDynamicSMS = () => {
  return (
    <div className='multi'>
    <nav className='multi1'>
    <ul>
      <li><NavLink to="/DynamicTemplateSMS">Dynamic Template SMS</NavLink></li>
      <li><NavLink to= "/#">View Schedule</NavLink></li>
    </ul>
  </nav>
    </div>
  )
}

export default MultipleDynamicSMS;